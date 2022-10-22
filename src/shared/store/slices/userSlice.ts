import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: null
    },
    reducers: {
        setUserAction: (state, action) => {
            state.info = action.payload;
        },
    },
});
export const {setUserAction} = userSlice.actions;
export default userSlice.reducer;
