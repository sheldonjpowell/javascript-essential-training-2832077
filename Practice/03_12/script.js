/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import waterBottle from "./Waterbottle.js"

 const bottleMeCrazy = new waterBottle (
    "Bottle Me Crazy",
    2,
    40,
    true
);


console.log(bottleMeCrazy)
console.log(bottleMeCrazy.straw)