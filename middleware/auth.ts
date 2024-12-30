// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const authTokenCookie = useCookie('authToken');

    if (!authTokenCookie.value) {
        return navigateTo('/login');
    }
});
