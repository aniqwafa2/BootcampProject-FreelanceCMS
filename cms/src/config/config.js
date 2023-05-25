const ENV = process.env.REACT_APP_ENV || "production";

let baseUrl;
if (ENV === "production") {
  baseUrl = "https://freelance-api.cyclic.app";
} else {
  baseUrl = "http://localhost:3000";
}

const imageUrl = `${baseUrl}/images`;
const fileUrl = `${baseUrl}/files`;
const apiUrl = `${baseUrl}/api`;

export { baseUrl, imageUrl, fileUrl, apiUrl };
