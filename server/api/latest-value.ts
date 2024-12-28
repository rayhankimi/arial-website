export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    return await $fetch('/api/user/device/1/latest-value', {
        baseURL: config.public.baseURL,
        headers: {
            Authorization: `Token ${config.apiSecret}`,
        },
    });
});