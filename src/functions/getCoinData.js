import axios from "axios";
export const getCoinData = (id, setError) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
      if (setError) {
        setError(true);
      }
    });
  return myData;
};
