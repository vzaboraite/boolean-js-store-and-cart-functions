const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450,
      },
      price: 600,
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20,
      },
      price: 1000,
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0,
      },
      price: 1400,
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100,
      },
      price: 600,
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300,
      },
      price: 600,
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80,
      },
      price: 2400,
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200,
      },
      price: 1800,
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15,
      },
      price: 2300,
    },
  ],
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES
// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products) {
  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    // get product object from producs[]
    const product = products[i];
    // get the product price
    const price = product.price;

    if (price >= 1000) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

// Example of what it should look like:
const expensiveProducts = filterExpensiveProducts(store.products);

console.log("expensiveProducts: ", expensiveProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

function filterCheapProducts(products) {
  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price < 1000) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const cheapProducts = filterCheapProducts(store.products);

console.log("cheapProducts: ", cheapProducts);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery

function filterProductsThatNeedToBeReceived(products) {
  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const incomingDelivery = product.stock.incomingDelivery;

    if (incomingDelivery) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const productsThatNeedToBeReceived = filterProductsThatNeedToBeReceived(
  store.products
);
console.log("productsThatNeedToBeReceived: ", productsThatNeedToBeReceived);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock

function filterOutOfStockProducts(products) {
  const filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const quantity = product.stock.quantity;

    if (quantity === 0) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const outOfStockProducts = filterOutOfStockProducts(store.products);
console.log("outOfStockProducts: ", outOfStockProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

function filterProductsThatNeedToBeOrdered(products) {
  const filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (
      product.stock.quantity < 100 &&
      product.stock.incomingDelivery === false
    ) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const productsThatNeedToBeOrdered = filterProductsThatNeedToBeOrdered(
  store.products
);
console.log("productsThatNeedToBeOrdered: ", productsThatNeedToBeOrdered);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

// DONE: refactor function; filterByType
function filterByType(products, targetType) {
  const filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const type = product.type;

    if (type === targetType) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const tablets = filterByType(store.products, "tablet");
console.log("tablets: ", tablets);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// function filterComputers(products) {
//   const filteredProducts = [];

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const type = product.type;

//     if (type === "computer") {
//       filteredProducts.push(product);
//     }
//   }
//   return filteredProducts;
// }

const computers = filterByType(store.products, "computer");
console.log("computers: ", computers);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

// challenge: to make reusable function (done on the session)
function findProduct(products, productToFind) {
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.name === productToFind) {
      foundProduct = product;
    }
  }
  return foundProduct;
}

const iMac = findProduct(store.products, "iMac");
console.log("iMac: ", iMac);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

function findIPhone12(products) {
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.name === "iPhone 12") {
      foundProduct = product;
    }
  }
  return foundProduct;
}

const iPhone12 = findIPhone12(store.products);
console.log("iPhone12: ", iPhone12);

// const iPhone12 = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad mini"

function findIPadMini(products) {
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.name === "iPad mini") {
      foundProduct = product;
    }
  }
  return foundProduct;
}

const iPadMini = findIPadMini(store.products);
console.log("iPadMini: ", iPadMini);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// function filterUniqueProductTypes(products) {
//   const filteredProducts = [];

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const type = product.type;

//     /* for loop to check if the product type exists */
//     // let typeExists = false;

//     // for (let j = 0; j < filteredProducts.length; j++) {
//     //   if (filteredProducts[j] === type) {
//     //     typeExists = true;
//     //   }
//     // }

//     // if (!typeExists) {
//     //   filteredProducts.push(type);
//     // }
//   }
//   return filteredProducts;
// }

// DONE: use an object, google search dictionaries js
function filterUniqueProductTypes(products) {
  let dictionrayOfTypes = {};

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const type = product.type;

    /* conditional statement to set the dictionaryOfTypes{} 
    keys of "mobile", "computer", "tablet" and asign the 
    boolean values for them. These object keys will represent 
    unique product types.*/
    if (type === "mobile") {
      dictionrayOfTypes.mobile = true;
    } else if (type === "computer") {
      dictionrayOfTypes.computer = true;
    } else if (type === "tablet") {
      dictionrayOfTypes.tablet = true;
    }
  }

  const uniqueTypes = Object.keys(dictionrayOfTypes);

  return uniqueTypes;
}

const productTypes = filterUniqueProductTypes(store.products);
console.log("productTypes: ", productTypes);

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400,
    },
    quantity: 4,
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600,
    },
    quantity: 2,
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800,
    },
    quantity: 2,
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300,
    },
    quantity: 2,
  },
];

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart

function countTotalPrice(items) {
  let cartTotalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const price = item.product.price;
    const quantity = item.quantity;
    cartTotalPrice += price * quantity;
  }
  return cartTotalPrice;
}

const totalPrice = countTotalPrice(cart);
console.log("totalPrice: ", totalPrice);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

function countItems(items) {
  let itemCount = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = items[i];
    const quantity = item.quantity;
    itemCount += quantity;
  }
  return itemCount;
}

const quantityOfItemsInCart = countItems(cart);
console.log("quantityOfItemsInCart: ", quantityOfItemsInCart);

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"

function createReceiptRow(item) {
  const type = item.product.type;
  const typeFirstCapital = type.charAt(0).toUpperCase() + type.slice(1);
  const price = item.product.price;
  const quantity = item.quantity;
  const totalPrice = price * quantity;

  let itemInformation = `${item.product.name} | ${typeFirstCapital} - £${price} x ${quantity} || £${totalPrice}`;

  return itemInformation;
}
const recieptRow = createReceiptRow(cart[0]);
console.log("recieptRow: ", recieptRow);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the various rows on the reciept
// TIP: Re-use the above function for "receiptRow"

function printReceiptMessage(items) {
  let receipt = `***Your items receipt***\n\n`;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    receipt += `${createReceiptRow(item)}\n`;
  }
  return `${receipt}\n\n***TOTAL: £${countTotalPrice(cart)}***`;
}

const receiptMessage = printReceiptMessage(cart);

console.log(receiptMessage);

/* DONE: find all in stock items (challenge.js) that need to be 
ordered in all stores. return an object of the 
store and [] of items; reuse function*/

function filterProductsInStoresThatNeedToBeOrdered(array, targetLocation) {
  let storeFromTargetLocation = {};

  for (let i = 0; i < array.length; i++) {
    const store = array[i];
    const location = store.location;
    const products = store.products;

    if (location === targetLocation) {
      storeFromTargetLocation.location = targetLocation;
      storeFromTargetLocation.products =
        filterProductsThatNeedToBeOrdered(products);
    }
  }

  return storeFromTargetLocation;
}

const productsToOrderInLondon = filterProductsInStoresThatNeedToBeOrdered(
  stores,
  "London"
);

console.log("productsToOrderInLondon: ", productsToOrderInLondon);

const productsToOrderInBristol = filterProductsInStoresThatNeedToBeOrdered(
  stores,
  "Bristol"
);

console.log("productsToOrderInBristol: ", productsToOrderInBristol);

const productsToOrderInManchester = filterProductsInStoresThatNeedToBeOrdered(
  stores,
  "Manchester"
);

console.log("productsToOrderInManchester: ", productsToOrderInManchester);
