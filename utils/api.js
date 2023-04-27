import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  // fetch api from url
  const res = await fetch(`${API_URL}${endpoint}`, options);

  // convert response into json
  const data = await res.json();

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "Post",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
