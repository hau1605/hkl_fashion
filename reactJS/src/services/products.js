import axios from 'axios';
import { BASE_URL } from '../configs/index.js';

class ProductDataService {
  async getAllProductByTypeId(typeID) {
    return await axios.get(`${BASE_URL}/product/category/${typeID}`);
  }
  async getProductsByTypeDetailId(typeDetailID) {
    return await axios.get(`${BASE_URL}/product/category-detail/${typeDetailID}`);
  }
  async getAllProducts(price = 0, category = ``, page = 1) {
    return await axios.get(`${BASE_URL}/product?price=${price}&page=${page}&${category}`);
  }
  async getProductById(productID) {
    return await axios.get(`${BASE_URL}/product/${productID}`);
  }
  async getProductDetail(productID) {
    return await axios.get(`${BASE_URL}/product/${productID}/product-detail`);
  }
  async deleteProductDetail(productDetailID) {
    return await axios.delete(`${BASE_URL}/admin/product-detail/delete/${productDetailID}`);
  }
  async getProductDiscount() {
    return await axios.get(`${BASE_URL}/product/discount`);
  }
  async getProductsFromSearch(search) {
    return await axios.get(`${BASE_URL}/search?name=${search}`);
  }
  async getProductNew() {
    return await axios.get(`${BASE_URL}/product/new`);
  }
  async getProductTopSelling() {
    return await axios.get(`${BASE_URL}/product/top-selling`);
  }
  async adminGetProducts() {
    return await axios.get(`${BASE_URL}/admin/product`);
  }
  async createProducts(data) {
    return await axios.post(`${BASE_URL}/admin/product/store`, data);
  }
  async editProduct(productId, data) {
    return await axios.put(`${BASE_URL}/admin/product/edit/${productId}`, data);
  }
  async deleteProduct(productId) {
    return await axios.delete(`${BASE_URL}/admin/product/delete/${productId}`);
  }
  async createDetailProduct(data) {
    return await axios.post(`${BASE_URL}/admin/product-detail/store`, data );
  }
  async getCommentsByProductId(productId) {
    return await axios.get(`${BASE_URL}/product/${productId}/comment`);
  }
  async getCommentCountAndAvgRating(productId) {
    return await axios.get(`${BASE_URL}/product/${productId}/count-and-starrating-comment`);
  }
  async getAllFavoriteProduct(email) {
    return await axios.get(`${BASE_URL}/${email}/favorite-product`);
  }

  async getFavoriteProductById(email, productId) {
    return await axios.get(`${BASE_URL}/${email}/favorite-product/${productId}`);
  }

  async addFavoriteProduct(data) {
    return await axios.post(`${BASE_URL}/favorite-product/add`, data);
  }

  async deleteFavoriteProduct(data) {
    return await axios.post(`${BASE_URL}/favorite-product/delete`, data);
  }
}
export default new ProductDataService();
