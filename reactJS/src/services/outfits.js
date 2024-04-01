import axios from "axios";
import { BASE_URL } from "../configs/index.js";

class OutfitDataService {

    async getAllOutfit(page = 1) {
        return await axios.get(`${BASE_URL}/product/outfit?page=${page}`)
    }
    async getOutfitById(Id) {

        return await axios.get(`${BASE_URL}/product/outfit/${Id}`)
    }
    async getOutfitDetails(outfitId){
        return await axios.get(`${BASE_URL}/product/outfit/${outfitId}/outfit-detail`)
    }

}
export default new OutfitDataService();