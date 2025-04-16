const axios = require("axios");

const testAxios = async () => {
  const response = await axios({
    // sama kaya fetch lebih gampang dipake
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    responseType: "application/json",
  });

  console.log(response.data);
};
