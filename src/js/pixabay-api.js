
import axios from "axios";

const url = "https://pixabay.com/api/";
const key = "51422808-09cfa7462dc66736a72b15f6d";

export const getImagesByQuery = async (query, page = 1) => {
    const res = await axios(url, {
        params: {
            key,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15,
        }
    });
    return {
        hits: res.data.hits,
        totalHits: res.data.totalHits
    };
        
};