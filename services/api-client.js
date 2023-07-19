import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bd1e982339d4759b3cc5dd0a14a6486",
  },
});
