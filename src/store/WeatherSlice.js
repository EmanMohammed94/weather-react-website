import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  WeatherInfoList: [],
  city:"cairo",
  isLoading: false,
  error: null,
}

export const getWeatherInfo = createAsyncThunk(
  'weatherInfo/getWeatherInfo',
  async (city) => {
    const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7549b809e7934c2b8b5180605220106&q=${city}&days=7`)
    const data = await res.data
    return data
  }
)

export const weatherSlice = createSlice({
  name: 'weatherInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherInfo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getWeatherInfo.fulfilled, (state, action) => {
      state.isLoading = false
      state.WeatherInfoList = action.payload
    })
    builder.addCase(getWeatherInfo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})
export default weatherSlice.reducer