import { defineEventHandler, getCookie } from "h3";
import { $fetch } from "ohmyfetch";

export default defineEventHandler(async (event) => {
    const authToken = getCookie(event, "authToken");
    if (!authToken) {
        throw new Error("Auth token tidak ditemukan");
    }

    const baseURL = useRuntimeConfig().public.baseURL;
    const todoId = event.context.params?.id; // Mendapatkan ID todo dari parameter dinamis

    if (!todoId) {
        throw new Error("Todo ID tidak ditemukan");
    }

    try {
        return await $fetch(`/api/user/todo/${todoId}/`, {
            baseURL,
            method: "DELETE",
            headers: {
                Authorization: `Token ${authToken}`,
            },
        });
    } catch (error) {
        console.error("Gagal menghapus data dari backend:", error);
        throw error;
    }
});
