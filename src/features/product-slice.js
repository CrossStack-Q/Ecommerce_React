import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetAllProducts =  createAsyncThunk('products/fetchAll' , async()=> {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    return await response;
})


// async function fetAllProducts() {
//     // const response = await fetch("https://fakestoreapi.com/products").then(
//     //   (response) => response.json()
//     // );
//     setProducts(response);
//   }

const productSlice = createSlice({
    name:"product",
    initialState: {
        value: [],
        loading:false
    },
    extraReducers:(buider)=>{
        buider.addCase(fetAllProducts.pending, (state)=> {
            state.loading = true;
        } ) ;
        buider.addCase(fetAllProducts.fulfilled, (state,action)=> {
            state.value = action.payload;
            state.loading = false;
        } )



    }
})



export default productSlice.reducer;
