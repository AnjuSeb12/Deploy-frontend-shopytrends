import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seller:null,
    token:null,
    isAuthenticated:false
}
const sellerAuthSlice=createSlice({
    name:"sellerAuthSlice",
    initialState,
    reducers:{
        authSellerSuccess:(state,actions) =>
        {
            console.log("user....",actions.payload)
            state.seller=actions.payload.seller;
            state.token=actions.payload.token;
          
            state.isAuthenticated=true;

        },
        sellerLogout:(state,actions) =>
        {
          
            state.seller=null;
            state.token=null;
            state.isAuthenticated=false;
        }
        
    }
}); 
export const {authSellerSuccess,sellerLogout}=sellerAuthSlice.actions;
export default sellerAuthSlice.reducer;
