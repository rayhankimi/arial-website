<template>
  <div>
    <!-- Section pertama -->
    <div class="w-full border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white mx-auto p-2 my-4">
      <h1 class="text-3xl font-heading">Todo List</h1>
      <p class="text-xl font-heading">Catat dan tulis hal yang akan dilakukan, tandai selesai jika sudah tercapai.</p>
    </div>

    <!-- Section kedua -->
    <div>
      <div class="border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white mx-auto p-4">
        <button
            @click="openCreateModal"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Tambahkan Todo
        </button>

        <!-- Daftar Todo -->
        <div v-if="todos.length > 0">
          <div
              v-for="todo in todos"
              :key="todo.id"
              class="border-2 border-black rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white p-4 mt-4"
              :class="getAccordionClass(todo)"
          >
            <Accordion
                :title="todo.title || 'Judul Tidak Tersedia'"
                :is-completed="todo.is_completed"
                :deadline-text="calculateDaysLeft(todo)"
                :status-class="todo.is_completed ? 'text-green-500' : 'text-red-500'"
                :deadline-class="getDeadlineClass(todo)"
            >
              <template #content>
                <p class="text-base text-gray-700 mb-4">{{ todo.description || "Tidak ada deskripsi" }}</p>
                <p class="text-sm"><strong>Tenggat:</strong> {{ formatDate(todo.due_date) }}</p>
                <p class="text-sm"><strong>Kapan dibuat:</strong> {{ formatDate(todo.created_at) }}</p>
                <p class="text-sm"><strong>Diupdate:</strong> {{ formatDate(todo.updated_at) }}</p>

                <div class="flex justify-between mt-4">
                  <a
                      v-if="todo.related_file"
                      :href="todo.related_file"
                      target="_blank"
                      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Download File
                  </a>
                  <button
                      @click="openEditModal(todo)"
                      class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  >
                    Edit Todo
                  </button>
                  <button
                      @click="todo.is_completed ? markAsIncomplete(todo.id) : markAsComplete(todo.id)"
                      class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    {{ todo.is_completed ? "Tandai Belum Selesai" : "Tandai Selesai" }}
                  </button>
                  <button
                      @click="deleteTodo(todo.id)"
                      class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Hapus Todo
                  </button>
                </div>
              </template>
            </Accordion>
          </div>
        </div>

        <div v-else class="text-center text-gray-500 my-4">Tidak ada Todo tersedia.</div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-4">{{ isEditing ? "Edit Todo" : "Tambah Todo" }}</h2>
        <form @submit.prevent="isEditing ? updateTodo() : addTodo()">
          <div class="mb-4">
            <label for="judul" class="block font-bold">Judul</label>
            <input type="text" id="judul" v-model="form.judul" class="w-full border rounded p-2" required />
          </div>
          <div class="mb-4">
            <label for="deskripsi" class="block font-bold">Deskripsi</label>
            <textarea id="deskripsi" v-model="form.deskripsi" class="w-full border rounded p-2"></textarea>
          </div>
          <div class="mb-4">
            <label for="tenggat" class="block font-bold">Tenggat</label>
            <input type="date" id="tenggat" v-model="form.tenggat" class="w-full border rounded p-2" />
          </div>
          <div class="mb-4">
            <label for="file" class="block font-bold">File Terkait (Opsional)</label>
            <input type="file" id="file" @change="handleFileUpload" class="w-full border rounded p-2" />
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2">
              Batal
            </button>
            <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="text-white text-xl font-bold">Loading...</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useState } from "#app";
import Accordion from "~/components/Accordion.vue";

// Meta konfigurasi halaman
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

// State untuk daftar todo dan modal
const todos = useState("todos", () => []);
const isModalOpen = ref(false);
const isEditing = ref(false);
const isLoading = ref(false);
const errorMessage = ref(null);
const editingTodoId = ref(null);
const form = ref({
  judul: "",
  deskripsi: "",
  tenggat: "",
  file: null,
});

// Fungsi modal
const openCreateModal = () => {
  isEditing.value = false;
  isModalOpen.value = true;
};

const openEditModal = (todo) => {
  isEditing.value = true;
  editingTodoId.value = todo.id;
  form.value = {
    judul: todo.title || "",
    deskripsi: todo.description || "",
    tenggat: todo.due_date ? todo.due_date.split("T")[0] : "",
    file: null,
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  errorMessage.value = null;
  form.value = {
    judul: "",
    deskripsi: "",
    tenggat: "",
    file: null,
  };
};

// Handle file upload
const handleFileUpload = (e) => {
  form.value.file = e.target.files[0];
};

// API untuk mengambil todo
const fetchTodos = async () => {
  try {
    isLoading.value = true;
    const response = await $fetch("/api/get-todo");
    todos.value = response.results || [];
  } catch (error) {
    handleError(error, "Gagal mengambil data todo.");
  } finally {
    isLoading.value = false;
  }
};

// API untuk menambah todo
const addTodo = async () => {
  try {
    isLoading.value = true;

    // Buat payload JSON
    const payload = {
      title: form.value.judul,
      description: form.value.deskripsi || "",
      due_date: form.value.tenggat ? new Date(form.value.tenggat).toISOString() : null,
      is_completed: false,
    };

    console.log("API Call to /api/post-todo with application/json");
    console.log("Payload:", JSON.stringify(payload));

    // Kirim payload sebagai JSON
    const response = await $fetch("/api/post-todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    todos.value.push(response);
    closeModal();
  } catch (error) {
    handleError(error, "Gagal menambahkan todo.");
  } finally {
    isLoading.value = false;
  }
};

// API untuk memperbarui todo
const updateTodo = async () => {
  try {
    if (!editingTodoId.value) {
      throw new Error("ID todo tidak ditemukan.");
    }

    isLoading.value = true;

    const payload = {
      title: form.value.judul,
      description: form.value.deskripsi || "",
      due_date: form.value.tenggat ? new Date(form.value.tenggat).toISOString() : null,
      is_completed: false,
    };

    let response;

    if (form.value.file) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(payload)) {
        formData.append(key, value);
      }
      formData.append("related_file", form.value.file);

      console.log(`API Call to /api/update-todo/${editingTodoId.value} with multipart/form-data`);
      response = await $fetch(`/api/update-todo/${editingTodoId.value}`, {
        method: "PATCH",
        body: formData,
      });
    } else {
      console.log(`API Call to /api/update-todo/${editingTodoId.value} with application/json`);
      response = await $fetch(`/api/update-todo/${editingTodoId.value}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: payload,
      });
    }

    const index = todos.value.findIndex((todo) => todo.id === editingTodoId.value);
    if (index !== -1) {
      todos.value[index] = {
        ...todos.value[index],
        ...response,
      };
    }

    closeModal();
  } catch (error) {
    handleError(error, "Gagal memperbarui todo.");
  } finally {
    isLoading.value = false;
  }
};

// API untuk menghapus todo
const deleteTodo = async (id) => {
  try {
    isLoading.value = true;
    await $fetch(`/api/delete-todo/${id}`, { method: "DELETE" });
    todos.value = todos.value.filter((todo) => todo.id !== id);
  } catch (error) {
    handleError(error, "Gagal menghapus todo.");
  } finally {
    isLoading.value = false;
  }
};

// API untuk menandai todo sebagai selesai
const markAsComplete = async (id) => {
  try {
    const todo = todos.value.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error("Todo tidak ditemukan.");
    }

    isLoading.value = true;

    const payload = { is_completed: true };

    await $fetch(`/api/update-todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    todo.is_completed = true;
  } catch (error) {
    handleError(error, "Gagal menandai sebagai selesai.");
  } finally {
    isLoading.value = false;
  }
};

// API untuk menandai todo sebagai belum selesai
const markAsIncomplete = async (id) => {
  try {
    const todo = todos.value.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error("Todo tidak ditemukan.");
    }

    isLoading.value = true;

    const payload = { is_completed: false };

    await $fetch(`/api/update-todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    todo.is_completed = false;
  } catch (error) {
    handleError(error, "Gagal menandai sebagai belum selesai.");
  } finally {
    isLoading.value = false;
  }
};

// Error handler
const handleError = (error, defaultMessage) => {
  const status = error?.status || "Unknown";
  const message = error?.data?.detail || defaultMessage;
  errorMessage.value = `${message} (Status: ${status})`;
  console.error(errorMessage.value);
};

// Formatter helpers
const formatDate = (dateString) => new Date(dateString).toLocaleDateString();
const calculateDaysLeft = (todo) => {
  const dueDate = new Date(todo.due_date);
  const currentDate = new Date();
  return Math.max(0, Math.ceil((dueDate - currentDate) / (1000 * 60 * 60 * 24))).toString();
};
const getDeadlineClass = (todo) => {
  const daysLeft = parseInt(calculateDaysLeft(todo), 10);
  return daysLeft <= 3 ? "text-red-500" : daysLeft <= 7 ? "text-yellow-500" : "text-black";
};
const getAccordionClass = (todo) => {
  const daysLeft = parseInt(calculateDaysLeft(todo), 10);
  return daysLeft <= 3 ? "bg-red-100 border-red-500" : daysLeft <= 7 ? "bg-yellow-100 border-yellow-500" : "bg-blue-100 border-blue-500";
};

// Ambil data awal
fetchTodos();
</script>
