import { defineEventHandler, getCookie, readBody, readMultipartFormData } from "h3";
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

    let body;
    let headers;

    // Tentukan apakah menggunakan multipart/form-data atau JSON
    if (event.req.headers["content-type"]?.includes("multipart/form-data")) {
        // Gunakan FormData
        body = await readMultipartFormData(event);
        headers = {
            Authorization: `Token ${authToken}`,
        };
    } else {
        // Gunakan JSON
        body = await readBody(event);
        headers = {
            Authorization: `Token ${authToken}`,
            "Content-Type": "application/json",
        };
    }

    try {
        return await $fetch(`/api/user/todo/${todoId}/`, {
            baseURL,
            method: "PATCH",
            headers,
            body,
        });
    } catch (error) {
        console.error("Gagal memperbarui data ke backend:", error);
        throw error;
    }
});
