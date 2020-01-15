import axios from "axios";
import qs from "qs";

export default {
  getList() {
    // page=1&per_page=3
    return axios.get(`https://api.github.com/repos/pengjielee/test/issues`);
  },
  getDetail(number) {
    return axios.get(
      `https://api.github.com/repos/pengjielee/test/issues/${number}`
    );
  },
  addNote(data) {
    return axios.post(
      `https://api.github.com/repos/pengjielee/test/issues`,
      qs.stringify(data)
    );
  },
  editNote(number, data) {
    console.log(data);
    return axios.patch(
      `https://api.github.com/repos/pengjielee/test/issues/${number}`,
      data,
      {
        headers: {
          Authorization: "token 4f4216d2189649324bfc5e3c4551900d54ec2577"
        }
      }
    );
  }
};
