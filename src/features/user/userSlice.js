import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

const userSlice = createSlice({
    name: "user",

    initialState,

    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },

        loginUser: (state, action) => {
            state.users = state.users.map((user) => ({
                ...user,
                isLoggedIn: user.email === action.payload,
            }));
        },

        logoutUser: (state) => {
            state.users = state.users.map((user) => ({
                ...user,
                isLoggedIn: false,
            }));
        },

        addUser: (state, action) => {
            state.users.push(action.payload);
        },
    },
});

export const {
    setUsers,
    loginUser,
    logoutUser,
    addUser,
} = userSlice.actions;

export default userSlice.reducer;