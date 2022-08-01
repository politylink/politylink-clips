export const QUERY_KEY = 'query'
export const FILTER_ID_KEY = 'filter'

export const readLocalQuery = () => {
    return readLocal(QUERY_KEY);
}

export const readLocalFilterId = () => {
    const value = readLocal(FILTER_ID_KEY);
    if (value === '') {
        return 0;
    } else {
        return parseInt(value);
    }
}

export const storeLocalQuery = (value) => {
    storeLocal(QUERY_KEY, value);
}

export const storeLocalFilterId = (value) => {
    storeLocal(FILTER_ID_KEY, value.toString());
}

export const readLocal = (key) => {
    return (typeof window !== 'undefined' && localStorage.getItem(key)) || '';
}

export const storeLocal = (key, value) => {
    typeof window !== 'undefined' && localStorage.setItem(key, value)
}
