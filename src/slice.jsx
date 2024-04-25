import { createSlice } from '@reduxjs/toolkit'


export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    signUpData:{
        fullName:"",
        userName:"",
        emailAddress:"",
        password:""
    },
    loginData:{
        emailAddress:"",
        password:""

    },
    addValue:0

  },
  reducers: {
      setSignUpData: (state, action) => {
        state.signUpData = action.payload
      },
      setLoginData: (state, action) => {
        state.loginData = action.payload
      },
      setaddValue: (state, action) => {
        state.addValue = action.payload
      },
  },
})

export const { setSignUpData,setLoginData,setaddValue } = ecommerceSlice.actions

export default ecommerceSlice.reducer