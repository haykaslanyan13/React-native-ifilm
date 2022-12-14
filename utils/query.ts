const query = (params: Record<string | number, any>): string => {
    const queryStr = Object.keys(params).reduce((acc: string, key: string) => {
        acc += `${key}=${params[key]}&`
        return acc
    }, "")
    return queryStr.substr(0, queryStr.length - 1)
}


export const stringifyURL = (url: string, params: Record<string | number, any>): string => {
    return url + '?' + query(params)
}