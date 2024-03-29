//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

// Temporary Single Product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (name) => {
  let storageItem = localStorage.getItem(name);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(name));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, value) => {
  return localStorage.setItem(name, JSON.stringify(value));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
