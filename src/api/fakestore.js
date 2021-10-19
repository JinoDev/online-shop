export const fetchProducts = async (url) => {
    let res = await fetch(url);
    if (res.status === 200) {
        let json = await res.json();
        return Promise.resolve(json)
    } else {

        console.log('error in fetching products')
        return Promise.reject({error: 'fetching products failed'})
    }
}
