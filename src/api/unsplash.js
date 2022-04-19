import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dYTiqRh-Oo1xHZHYJxjDxmTfdSoYCsRGUgS_Ib-n74Q",
  },
});
