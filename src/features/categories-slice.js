import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetAllCategories =  createAsyncThunk('categories/fetchAll' , async()=> {
    const response = await fetch("https://fakestoreapi.com/products/categories").then(
      (response) => response.json()
    );
    return await response;
})


const categoriesSlice = createSlice({
    name:"product",
    initialState: {
        value: [],
        loading:false
    },
    extraReducers:(buider)=>{
        buider.addCase(fetAllCategories.pending, (state)=> {
            state.loading = true;
        } ) ;
        buider.addCase(fetAllCategories.fulfilled, (state,action)=> {
            state.value = action.payload;
            state.loading = false;
        } )



    }
})



export default categoriesSlice.reducer;
