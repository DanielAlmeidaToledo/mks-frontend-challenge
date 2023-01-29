import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('/', async () => {
    const response = await axios.get(
        'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=price&orderBy=DESC'
    )

    return response.data
})
