export const findIndexOfItem = (cart, id) => {
  return cart.findIndex((el) => el.id === id);
};
