import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "5a706e77c0936b75e1e79ab3efb7b799",
        langauge: "ko-KR",
    },
});

export default instance;