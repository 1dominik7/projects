import cartReducer from './cartReducer'
import {configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import favReducer from './favReducer'


const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)
const persistedFavReducer = persistReducer(persistConfig, favReducer)


export const store = configureStore({
    reducer: {
        cart: persistedReducer,
        favorite: persistedFavReducer,
    },
    

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

export let persistor = persistStore(store)


export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.user.username,
            jwt: data.jwt,
           
        })
    )
}

export const userData = () => {
    const stringifiendUser = localStorage.getItem('user') || '""'
    return JSON.parse(stringifiendUser || {})
}


export const Protector = () => {
    const navigate = useNavigate()

    const { jwt } = userData()
    
    useEffect(() => {
        if (!jwt) {
           navigate('/login')
       } 
    },[navigate, jwt])
} 