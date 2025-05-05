// Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

// console.log(hamburger.name); // ?  { name: "Double Cheese Burger", weight: 500 };
// console.log(secondBurger.name); // ?  { name: "Double Cheese Burger", weight: 500 };

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?   1

//////////////////////////////////////////////////////////////////////////////////

// Code Question 2

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// console.log(hamburger.ingredients[0]); // ?{ name: "Cheese Burger", weight: 250,ingredients: ["Salad", "Meat", "Bread", "Tomato"]
// console.log(secondBurger.ingredients[0]); // ?{ name: "Cheese Burger", weight: 250,ingredients: ["Salad", "Meat", "Bread", "Tomato"]

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?   2

//////////////////////////////////////////////////////////////////////////////////

// Code Question 3

// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?  3  risposta dopo la correzione 9

//////////////////////////////////////////////////////////////////////////////////

// Code Question 4

// const chef = {
//   name: "Chef Hyur",
//   age: 29,
//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",
//   address: {
//     street: "Main Street",
//     number: 123,
//   },
//   openingDate: new Date(2025, 3, 11),
//   isOpen: false,
// };

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?   per questo utilizzerei lo spread perchè mi crea una copia e copia anche la funzione presente dentro l oggetto

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?  per questo utilizzerei uno structuredClone per via della presenza di oggetti complessi

//////////////////////////////////////////////////////////////////////////////////

// Code Question 5 (Bonus)

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };

// const newRestaurant = { ...hamburger.maker.restaurant };
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = { ...hamburger };
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

// console.log(hamburger.maker.name); // ? Chef Hyur
// console.log(secondBurger.maker.name); // ? Chef Hyur
// console.log(hamburger.maker.restaurant.name); // ? Hyur's II
// console.log(secondBurger.maker.restaurant.name); // ? Hyur's II

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 5

//////////////////////////////////////////////////////////////////////////////////

//Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//allora questo è un caso particolare perchè con tutti i metodi perderemmo qualcosa, con quello superficiale (...chef) avemmo la funzione ma perderemmo gli annidamenti
// con lo structureClone avremmo gli annidamenti ma perderemmo la funzione, se dobbiamo optare per le 2 scelierei la seconda, meglio rifare solo la funzione
// informandomi ho visto che cè un modo con una libreria  esterna chiamata lodash per fare un clone deep e avere sia funzioni che annidamenti quindi la scelta migliore
