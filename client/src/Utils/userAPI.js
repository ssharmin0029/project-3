import axios from "axios";

export default {
  userSearch: function () {
    return axios.get("/api/users");
  },
  userPost: function (data) {
    return axios.post("/api/users/", data);
  },
  getNews: function (search) {
    let url =
      process.env.NODE_ENV === "production"
        ? `https://api.mediastack.com/v1/news?access_key=182ea42f471928be3330ec7855b23b42&keywords=${search}&countries=us,gb`
        : `http://api.mediastack.com/v1/news?access_key=182ea42f471928be3330ec7855b23b42&keywords=${search}&countries=us,gb`;
    return axios.get(url);
  },
  getStaticNews: function () {
    let url =
      process.env.NODE_ENV === "production"
        ? `https://api.mediastack.com/v1/news?access_key=182ea42f471928be3330ec7855b23b42&keywords=cryptocurrency&countries=us,gb`
        : `http://api.mediastack.com/v1/news?access_key=182ea42f471928be3330ec7855b23b42&keywords=cryptocurrency&countries=us,gb`;
    return axios.get(url);
  },
};
