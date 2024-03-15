"use strict";
/////////*****  ASSIGNMENT OF CLASS 6  ******///////
// IN THIS ASSIGNMENT , I'M GIVING EXAMPLES OF OBJECTS , ARRAY OF OBJECTS , NESTED OBJECTS:
// OBJECTS :
let product = {
    name: "Serum",
    brand: "The Ordinary.",
    description: "With 10% pure Niacinamide and 1% Zinc.",
    price: 5999,
    isavailable: true
};
console.log(product); // prints the entire object
// ARRAY OF OBJECTS :
let order = {
    orderId: 699915017,
    customerName: "Laiba Khan",
    items: ["Biryani", "Doner Kabab", "Spring Rolls", "ChickenChowmein", "Kunefe"],
    totalPrice: 3000,
    isrecieved: true
};
console.log(order); // prints the entire array of object.
console.log(order.items[0], "never fails to delight the palate!"); // prints the 0 index item.
// NESTED OBJECTS :
let restaurant = {
    name: "Chaupal",
    menu: ["Vegetable soup", "Thai Noodles", "Grilled Chicken", "Nihari", "Grilled prawns", "Tandoori paratha", "Fried Fish", "20+Salads", "20+Deserts"],
    openingHours: "Opens at 7 PM",
    pricePerPerson: 2500,
    phone: 300716888,
    location: {
        street: "Shahrah-e-Faisal Service Road",
        city: "Karachi",
        country: "Pakistan"
    }
};
console.log(restaurant); //prints the entire nested objects.
//Accessing properties of nested objects:
console.log("I recently visited", restaurant.name);
console.log("Which is located at", restaurant.location.street);
///////*******  And that's a Wrap  ******///////
// In conclusion, your feedback is valueable and I'm here to listen.
