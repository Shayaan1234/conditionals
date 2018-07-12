// Basic If/Elsecls
let username = process.argv[2];

if (username !== undefined){
     console.log("Hello, " + username); // or (`Hello, ${username}`)
}
else{
     console.log ("You must provide a username");
 }
  
// If/Else If/Else
let health = 100
let money = 100 
let item = process.argv[3]
let choice = process.argv[4]
let message = process.argv[5]
 
if (item === "jacket"){ 
    money = money - 40
    health = health + 20
    console.log("You bought a jacket.")
    console.log(`You have ${money} dollars left.`)
     } 
else if (item === "candy"){
    money = money - 10
    console.log("You bought candy.")
    console.log(`You have ${money} dollars left.`)
     }
else if (item === "paint"){
    money = money - 30
    console.log("You bought paint.")
    console.log(`You have ${money} dollars left.`)
     }
else if (item === "hammer"){
    money = money - 70
    console.log("You bought a hammer.")
    console.log(`You have ${money} dollars left.`)
     }
else
    console.log ("You bought nothing.")

//Boolean Operators
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");


const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 


if (choice === undefined ){
console.log("You shut down due to inactivity and get robbed of all your money");
money=0
}

else if (choice !== "run" && randomPerson === "Felipe"){
console.log("The protesters attack you...")
     if (item === "jacket"){
    console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket")
}  else
    console.log("...but Felipe, a fellow android shows up to help you escape them");
    health -= 50

}

else if (choice === "run" && randomPerson === "John") {
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
    if (item === "hammer" || item === "jacket" )   {
    console.log("...and holds you for questioning for suspicious activity");
    money = 0;
    }    
    else 
    console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");
}

else
    if (item === "paint") { 
        console.log("You boldy protest by painting a pro-android message...")
        if (message !== undefined){
            console.log(`..."${message.toUpperCase()}""`)
        }
        else 
        console.log(`..."WE ARE ALIVE"`);
    }
    else 
    console.log(`Nothing interesting happens, but at least you got that ${item}`);

//Scope
let score = 0
score = money + health

if (choice !== undefined){
score+=10
}

if (message !== undefined){
score+= 10    
}

console.log("The end");
console.log(`Score: ${score}`);

