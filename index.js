import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://realtime-database-1b8b6-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const shoppingListInDB = ref(database,"shoppingList")

const inputFieldEl = document.getElementById("input-field");
const addBtn = document.getElementById("add-button");
const shoppingListEl = document.getElementById


addBtn.addEventListener("click",()=>{
    let inputValue = inputFieldEl.value

    push(shoppingListInDB,inputValue)
    clearInputFieldEl();
    appendItemToShoppingListEl(inputValue);
})

function clearInputFieldEl(){
    inputFieldEl.value = "";
}

function appendItemToShoppingListEl(itemValue){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
