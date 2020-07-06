import request from "./request";

export default function getCityData() {
  return request({
    url: "/mock/city.json",
  });
}
