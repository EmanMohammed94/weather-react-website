import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './WeatherSlice'
export const store= configureStore({
  reducer: {
   weatherInfo: weatherSlice,
  },
});
export default store;
