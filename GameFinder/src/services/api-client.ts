import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9ba1702047944a6592c5ff9e2f8e01e5"
    }

})