let xp = 0;
let health = 100;
let gold = 50; 
let currentWeaponIndex = 0;
let fighting;
let inventory = ["stick"];
let MonsterHealth;
const weapons= [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50

    },
    {
        name: "sword",
        power: 100
    }

];




const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
},
{
    name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
},
{
   name: "cave",
   "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
   "button functions": [fightSlime, fightBeast, goTown],
   text: "You enter the cave. You see some monsters."
}





];


const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const text = document.querySelector('#text')
const monsterStats = document.querySelector('#monsterStats')
const monsterName = document.querySelector('#monsterName')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const xpText = document.querySelector('#xpText')
const monsterHealthText = document.querySelector('#monsterHealth')

//initialising objects
/*
const cat ={
name: "Whiskers",
"Number of legs": 4    

}

 console.log(cat["Number of legs"])
 */

// initialize buttons

function goTown(){
    update(locations[0]);// access one of the objects in the array

    /*
    button1.innerText = "Go to store"
    button2.innerText = "Go to cave"
    button3.innerText = "Fight dragon"
    text.innerText = "You are in the town square. You see a sign that says \"Store\"."
    //text.innerText = "You enter the store.";

    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    */
}


function goStore(){
    update(locations[1]);
    /*
    button1.innerText = "Buy 10 health (10 gold)"
    button2.innerText = "Buy weapon (30 gold)"
    button3.innerText = "Go to town square"
    text.innerText = "You enter the store."

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    */
}

function update(locations){
    button1.innerText = location["button text"][0]
    button2.innerText = location["button text"][1]
    button3.innerText = location["button text"][2]
    text.innerText = location.text
    //text.innerText = "You enter the store.";

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}
   // button2.onclick = goCave;
   // button3.onclick = fightDragon;





function goCave(){
    update(locations[2])
    //button2.innerText = "Buy weapon (30 gold)"
}

function fightDragon(){
   // button3.innerText = "Go to town square"
}

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function buyHealth(){
    if(gold >= 10){
   gold  -= 10;
   health += 10;
   goldText.innerText = gold;
   healthText.innerText = health;
} else {
    text.innerText = "You do not have enough gold to buy health."
}

}

function buyWeapon(){
    if(gold >= 30){
        gold -= 30;
        currentWeaponIndex ++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeaponIndex].name
        text.innerText = "You now have a " + newWeapon + "."
        inventory.push(newWeapon);

    }

}

function fightSlime(){

}
 
function fightBeast(){

}