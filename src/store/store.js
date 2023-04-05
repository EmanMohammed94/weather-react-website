import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './WeatherSlice'
import NewsSlice from './NewsSlice';

export const store= configureStore({
  reducer: {
   weatherInfo: weatherSlice,
   NewsInfo:NewsSlice
  },
});
export default store;
