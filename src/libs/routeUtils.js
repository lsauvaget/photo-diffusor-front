export const parseQuery = (locationSearch) => {
    return locationSearch.replace('?', '').split('&').reduce((acc, param) => {
        const [key, value] = param.split('=');
        acc[key] = value;
        return acc;
    }, {});
}
