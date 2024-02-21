import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "100fc9b2db60461c8f17d158af4c0fa6",
  },
});
