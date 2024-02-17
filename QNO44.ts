// // / QNO:44 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function order(...items: string[]): void {
    console.log(" ordered with:");
    items.forEach(item => console.log("- " + item));
    console.log("have your sandwich and enjoy this!");
}


order("chilli", "souce", "Tomato", "Mayonnaise");
order("mushroom", "Cheese","fresh garlic","onion");
order("Peanut Butter", "Jelly","peppronie","extra cheese");

