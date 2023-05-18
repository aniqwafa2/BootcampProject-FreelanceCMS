const priceFormat = (price) => {
  try {
    return price.toLocaleString();
  } catch (error) {}
};

export default priceFormat;
