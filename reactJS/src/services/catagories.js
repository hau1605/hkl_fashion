import axios from 'axios';
import { BASE_URL } from "../configs/index.js";

class CatagoryDataService {
    getAll() {
        return axios.get(`${BASE_URL}/category`);
    }
    getAllDetail(typeId) {
        return axios.get(`${BASE_URL}/category/${typeId}/category-detail`);
    }
    getCataDetailById(detailId) {
        return axios.get(`${BASE_URL}/category-detail/${detailId}`);
    }
    getAllCataDetail() {
        return axios.get(`${BASE_URL}/product/category-detail`);
    }
}
export default new CatagoryDataService();