import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8c07433187554b6f9e5442a4868a847e",
    },
});
