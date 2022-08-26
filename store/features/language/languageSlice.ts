import { createSlice } from "@reduxjs/toolkit";

export interface languageState {
    language: {
        label: string
        value: string
    }
}

const initialState : languageState = {
    language: {
        label: 'EN',
        value: 'en'
    }
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state,payload) => {
            state.language = payload.payload
        }
    }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer