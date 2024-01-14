export const KEY_ACCESS_TOKEN = "access_token";

export function getItem(key, value) {
    return localStorage.getItem(key, value);
}

export function setItem(key, value) {
    return localStorage.setItem(key, value);
}

export function removeItem(key, value) {
    return localStorage.removeItem(key, value);
}