import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  newsInfoList: [],
  
  isLoading: false,
  error: null,
}

export const getNewsInfo = createAsyncThunk(
  'NewsInfo/getNewsInfo',
  async () => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ecc9c3d0b739403f906f6f22101029f4`)
    const data = await res.data.articles
 
    return data
  }
)

export const NewsSlice = createSlice({
  name: 'NewsInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsInfo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getNewsInfo.fulfilled, (state, action) => {
      state.isLoading = false
      state.newsInfoList = action.payload
    })
    builder.addCase(getNewsInfo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})
export default NewsSlice.reducer