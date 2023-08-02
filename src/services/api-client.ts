import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5f84785130f241209c2cec6033fc9c87",
  },
});
