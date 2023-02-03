import {configureStore} from '@reduxjs/toolkit'

import dataReducer from '../features/CounterSlice'

const store = configureStore({
    reducer:{
        dataKey: dataReducer
    }
});

export default store;

