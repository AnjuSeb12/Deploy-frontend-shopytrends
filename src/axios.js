import axios from "axios";

const instance=axios.create({
    baseURL:"https://deploy-backend-shopytrends.onrender.com/"
})
export default instance;