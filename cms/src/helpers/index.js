import getToken from "../config/config";

const dateFormat = (date) => {
  try {
    date = new Date(date).toDateString();
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

const getIdFromToken = () => {
  const tokenID = JSON.parse(atob(getToken().split(" ")[1].split(".")[1]));
  return Number(tokenID.id);
};

export { dateFormat, priceFormat, getIdFromToken, dateFormatWithHour };
