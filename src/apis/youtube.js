import axios from "axios";

const KEY = "AIzaSyC07aVO0rLQVfwYXOP2BNNoYWZJlshCJRI";
const baseURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: baseURL,
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
