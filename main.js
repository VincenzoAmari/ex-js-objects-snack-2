// Code Question 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?  { name: "Double Cheese Burger", weight: 500 };
// console.log(secondBurger.name); // ?  { name: "Double Cheese Burger", weight: 500 };

// Code Question 2

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?{ name: "Cheese Burger", weight: 250,ingredients: ["Salad", "Meat", "Bread", "Tomato"]

console.log(secondBurger.ingredients[0]); // ?{ name: "Cheese Burger", weight: 250,ingredients: ["Salad", "Meat", "Bread", "Tomato"]
