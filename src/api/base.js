import axios from "axios";

const apiV1 = axios.create({
    baseURL: "https://api-ali.digital-menu.backends.dev/api/food"
})

export default apiV1