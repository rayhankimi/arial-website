export default defineEventHandler(async (event) => {
    return await $fetch('/api/user/device/1/latest-value', {
        baseURL: useRuntimeConfig().public.baseURL,
    });
});