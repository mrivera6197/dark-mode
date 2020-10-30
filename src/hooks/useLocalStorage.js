import { useState } from 'react'

export const useLocalStorage = (key, iniitalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(iniitalValue))
        return iniitalValue
    })

    const setValue = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}