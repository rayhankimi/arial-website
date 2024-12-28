export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const apiSecret = config.apiSecret;

    if (!apiSecret) {
        throw createError({
            statusCode: 500,
            message: 'API_SECRET is missing in the runtime config',
        });
    }

    return await $fetch('https://your-backend-api.example.com/data', {
        headers: {
            Authorization: `Token ${apiSecret}`,
        },
    });
});