import { defineEventHandler, getCookie, readMultipartFormData } from "h3";
import { $fetch } from "ohmyfetch";

export default defineEventHandler(async (event) => {
    const authToken = getCookie(event, "authToken");
    if (!authToken) {
        throw new Error("Auth token tidak ditemukan");
    }

    const baseURL = useRuntimeConfig().public.baseURL;
    const todoId = event.context.params?.id;

    if (!todoId) {
        throw new Error("Todo ID tidak ditemukan");
    }

    const formData = await readMultipartFormData(event); // Baca FormData dari request

    try {
        return await $fetch(`/api/user/todo/${todoId}/`, {
            baseURL,
            method: "PATCH",
            headers: {
                Authorization: `Token ${authToken}`,
            },
            body: formData, // Kirim FormData langsung
        });
    } catch (error) {
        console.error("Gagal memperbarui data ke backend:", error);
        throw error;
    }
});
