//Alright, so let's picture functions as houses on a street.  
// And on this street there's a house that will make you a smoothie if you bring them fruit to make it from.

function houseThatMakesSmoothies(fruit1, fruit2){
    return(`A full cup of ${fruit1} and ${fruit2} smoothie`)
}
// so let's give them some ingredients so that we can get a smoothie
// AKA invoke the function and give it some arguments

let smoothie = houseThatMakesSmoothies("pineapple", "lemon")

//there is also a house that will make burgers if you bring them the ingredients

function houseThatMakesBurgers(patty, topping){
    console.log(`A burger with a ${patty} patty and ${topping}`)
}

// so let's give them some ingredients, too, because a burger would be nice
let burger = houseThatMakesBurgers("portobello mushroom", "swiss cheese")

//great!
//now let's check if we got our food back

console.log("Did I get my smoothie?")
console.log(smoothie)
console.log("Did I get my burger")
console.log(burger)

//if you run the code, you get this:
/*
A burger with a portobello mushroom patty and swiss cheese
Did I get my smoothie?
A full cup of pineapple and lemon smoothie
Did I get my burger
undefined
*/
//What does this mean?
//It means that we got our smoothie, because that function returns instead of just console.logging.
//However, we did not get the burger
//They showed us the burger through the window, so we saw the burger, but they never opened the door to give us the burger
//We have no burger
//That's where the "undefined" is coming from

//To sum up:
// console.log just shows you what's happening, it's the cooks holding the burger up to the window and pointing to it, so we can see the burger, but then closing the blinds and walking away
// return means the smoothie place opens the door holding the blender, and they pour that smoothie into whatever cup we showed up with

//'cup' is a metaphor for the variable we stored the return value in
