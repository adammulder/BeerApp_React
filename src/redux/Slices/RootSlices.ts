import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        type: 'Type',
        abv: "ABV",
        ibu: "IBU",
    },
    reducers:{
        //action is submitted elsewhere -written to state.name
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseType: (state, action) => {state.type = action.payload},
        chooseABV: (state, action) => {state.abv = action.payload},
        chooseIBU: (state, action) => {state.ibu = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseType, chooseABV, chooseIBU } = rootSlice.actions