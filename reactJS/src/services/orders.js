import axios from 'axios';
import { BASE_URL } from "../configs/index.js";

class OrderDataService {
  async createOrders(data) {
    const res = await axios.post(
      `${BASE_URL}/order/create`,
      data
    );
    return res;
  }
  async createOrderDetail(data) {
    return await axios.post(
      `${BASE_URL}/order/order-detail`,
      data
    );
  }
  async getOrderDetail(orderId) {
    return await axios.get(
      `${BASE_URL}/order/${orderId}/order-detail`
    );
  }
  async getAllOrders() {
    return await axios.get(
      `${BASE_URL}/admin/order/show/`
    );
  }
  async deleteOrder(orderId) {
    return await axios.delete(
      `${BASE_URL}/admin/order/${orderId}/delete`
    );
  }
  async editOrder(orderId, data) {
    return await axios.put(
      `${BASE_URL}/admin/order/${orderId}/change-status`, data
    );
  }
  async getRevenue(year) {
    return await axios.get(
      `http://thawing-hollows-39647.herokuapp.com/admin/revenue?year=${year}`
    );
  }
}
export default new OrderDataService();
