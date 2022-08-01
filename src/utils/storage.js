export const QUERY_KEY = 'query'

export const readQuery = () => {
    return (typeof window !== 'undefined' && localStorage.getItem(QUERY_KEY)) || '';
}

export const storeQuery = (query) => {
    typeof window !== 'undefined' && localStorage.setItem(QUERY_KEY, query)
}