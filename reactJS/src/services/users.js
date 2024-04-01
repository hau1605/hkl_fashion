import axios from 'axios';
import { BASE_URL } from "../configs/index.js";

class UserDataService {
    async getAllUser() {
        return await axios.get(`${BASE_URL}/admin/user/show`)
    }
    async getUserById(userId) {
        return await axios.get(`${BASE_URL}/user/${userId}`)
    }
    async createUser(data) {
        return await axios.post(`${BASE_URL}/user/register`,data)
    }
    async editUser(userId, data) {
        return await axios.put(`${BASE_URL}/admin/user/edit/${userId}`, data)
    }
    async deleteUser(userId) {
        return await axios.delete(`${BASE_URL}/admin/user/delete/${userId}`)
    }
    async createComment(productId, userId, data){
        return await axios.post(`${BASE_URL}/user/${userId}/product/${productId}/comment`, data)
    }
    async deleteComment(userId, commentId){
        return await axios.delete(`${BASE_URL}/user/${userId}/comment/${commentId}/delete`)
    }
    async getOrdersByUser(userId){
        return await axios.get(`${BASE_URL}/user/${userId}/order`)
    }
}

export default new UserDataService();
