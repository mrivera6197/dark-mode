import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('key', initialValue)

    return [darkMode, setDarkMode]
}