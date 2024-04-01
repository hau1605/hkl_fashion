import axios from "axios";
import { BASE_URL } from "../configs/index.js";

class BlogDataService {

    async getAllBlog() {

        return await axios.get(`${BASE_URL}/blog`);
    }
    async getBlogById(blogID) {

        return await axios.get(
            `${BASE_URL}/blog/blog-detail/${blogID}`
        );
    }

}
export default new BlogDataService();