import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};

export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};
export const filterCate = (id) => {
    const url = `/products?catePostId=${id}`;
    return instance.get(url);
};
export const Search = (keyword) => {
    const url = `/products?title_like=${keyword}`;
    return instance.get(url);
};