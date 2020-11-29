import { makeVar } from "@apollo/client";

export const authDataVar = makeVar({
    id: null,
    username: null,
    token: localStorage.getItem('token') || null
});