import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { colors, company, featured, image: img, name, price },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, colors, company, featured, image, name, price };
  });
  setStorageItem("store", store);
};

// Find a product in the store
const findProduct = (id) => {
  const product = store.find((product) => product.id === id);
  return product;
};
export { store, setupStore, findProduct };
