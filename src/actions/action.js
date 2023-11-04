import axios from 'axios'

export const allProductsCategory = (data) => {
    const url = `${process.env.REACT_APP_BASE_URL}/get-all-products-category`;
    console.log(url)
    return axios.get(url, data).then((res) => {
        if (res.data.status) {
            return res.data;
        }else{
             return res.data
        }
    })
};
