const dateFormat = (date) => {
  try {
    date = new Date(date).toDateString();
    return date;
  } catch (error) {}
};

export default dateFormat;
