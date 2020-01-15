import axios from "axios";
//import qs from "qs";

export default {
  getList() {
    // page=1&per_page=3
    return axios.get(`https://api.github.com/repos/pengjielee/blog/issues`);
  },
  getDetail(issue_number) {
    return axios.get(
      `https://api.github.com/repos/pengjielee/blog/issues/${issue_number}`
    );
  }
};
