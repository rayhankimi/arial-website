import { defineEventHandler, getCookie } from "h3";
import { $fetch } from "ohmyfetch";

export default defineEventHandler(async (event) => {
    const authToken = getCookie(event, "authToken");
    if (!authToken) {
        throw new Error("Auth token tidak ditemukan");
    }

    const baseURL = useRuntimeConfig().public.baseURL;

    try {
        return await $fetch("/api/user/todo/", {
            baseURL,
            headers: {
                Authorization: `Token ${authToken}`,
            },
        });
    } catch (error) {
        console.error("Gagal fetch data dari backend:", error);
        throw error;
    }
});
