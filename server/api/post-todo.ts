import { defineEventHandler, getCookie, readBody } from "h3";
import { $fetch } from "ohmyfetch";

export default defineEventHandler(async (event) => {
    const authToken = getCookie(event, "authToken");
    if (!authToken) {
        throw new Error("Auth token tidak ditemukan");
    }

    const baseURL = useRuntimeConfig().public.baseURL;
    const body = await readBody(event); // Menggunakan JSON

    try {
        return await $fetch("/api/user/todo/", {
            baseURL,
            method: "POST",
            headers: {
                Authorization: `Token ${authToken}`,
                "Content-Type": "application/json",
            },
            body, // Kirim JSON ke backend
        });
    } catch (error) {
        console.error("Gagal mengirim data ke backend:", error);
        throw error;
    }
});
