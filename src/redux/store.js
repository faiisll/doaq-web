import {configureStore} from '@reduxjs/toolkit'
import navbarSlice from '../components/navbar/navbarSlice'
import categorySlice from '../pages/category/categorySlice'
import homeSlice from '../pages/home/homeSlice'
import doaSlice from '../pages/doa/doaSlice'
import feedbackSlice from '../pages/feedback/feedbackSlice'



export default configureStore({
    reducer: {
        navbar: navbarSlice,
        home: homeSlice,
        category: categorySlice,
        doa: doaSlice,
        feedback: feedbackSlice
    }
})