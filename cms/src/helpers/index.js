const dateFormat = (date) => {
  try {
    date = new Date(date);
    const option = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(undefined, option);
  } catch (error) {}
};

const dateFormatforInput = (date) => {
  try {
    date = new Date(date).toISOString().split("T")[0];
    return date;
  } catch (error) {}
};

const dateFormatWithHour = (date) => {
  try {
    const minutes = new Date(date).getMinutes();
    const hours = new Date(date).getHours();
    date = `${hours}:${`${minutes < 10 ? "0" : ""}${minutes}`}`;

    return date;
  } catch (error) {}
};

const priceFormat = (price) => {
  try {
    return price.toLocaleString();
  } catch (error) {}
};

const getToken = () => {
  return localStorage.getItem("access_token");
};

const getIdFromToken = () => {
  const tokenID = JSON.parse(atob(getToken().split(" ")[1].split(".")[1]));
  return Number(tokenID.id);
};

const isTokenExpired = () => {
  try {
    const TokenExp = JSON.parse(atob(getToken().split(" ")[1].split(".")[1]));
    const dateNow = Math.floor(Date.now() / 1000);
    return TokenExp.exp < dateNow;
  } catch (error) {
    return null;
  }
};

export {
  dateFormat,
  priceFormat,
  getIdFromToken,
  dateFormatWithHour,
  dateFormatforInput,
  isTokenExpired,
  getToken,
};
