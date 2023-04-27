export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discoutPrcentage = (discount / originalPrice) * 100;

  return discoutPrcentage.toFixed(2);
};
