import axios from "axios";

const baseUrl = "https://api.github.com/repos/pengjielee/test";

const token = "4f4216d2189649324bfc5e3c4551900d54ec2577";

const config = {
  headers: {
    Authorization: `token ${token}`
  }
};

export default {
  getList(page, size = 10, direction = "desc") {
    return axios.get(
      `${baseUrl}/issues?page=${page}&per_page=${size}&direction=${direction}`,
      config
    );
  },
  getDetail(number) {
    return axios.get(`${baseUrl}/issues/${number}`, config);
  },
  addNote(data) {
    return axios.post(`${baseUrl}/issues`, data, config);
  },
  editNote(number, data) {
    return axios.patch(`${baseUrl}/issues/${number}`, data, config);
  }
};
