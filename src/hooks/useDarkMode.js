import { useLocalStorage } from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('key', initialValue)

    return ([someValue, setSomeValue])
}

export default useDarkMode