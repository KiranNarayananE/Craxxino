import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE =  {
    accounts : [],
    count :0
 }

const accountSlice = createSlice({
    name: 'accounts',
    initialState:INITIAL_STATE,
    reducers: {
        addAccount: (state, action) => {
            state.accounts.unshift(action.payload),
            state.count += 1
        }
    }
})

export const { addAccount } = accountSlice.actions;
export default accountSlice.reducer;