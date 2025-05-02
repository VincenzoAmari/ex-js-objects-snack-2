const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); // ?  { name: "Double Cheese Burger", weight: 500 };
console.log(secondBurger.name); // ?  { name: "Double Cheese Burger", weight: 500 };
