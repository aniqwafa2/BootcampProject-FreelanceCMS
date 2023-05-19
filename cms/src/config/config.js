const baseUrl = "http://localhost:3000";
const imageUrl = `${baseUrl}/images`;
const fileUrl = `${baseUrl}/files`;
const apiUrl = `${baseUrl}/api`;

const getToken = () => {
  return localStorage.getItem("access_token");
};

export default getToken;
export { baseUrl, imageUrl, fileUrl, apiUrl };