// Object in JS
const myOBJ = {
    name: 'ABC',
    age: 20,
    address: "Lalitpur",
    'college': 'nce'
};

console.log(myOBJ.address);
console.log(myOBJ.name);
console.log(myOBJ['college']);

const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const todoList = document.getElementById("todoList");
// const displayName = document.getElementById("displayName");

submitBtn.onclick = function () {
    const inputValue = nameInput.value;
    if (!inputValue.trim()) {
        alert("Please insert a valid name");
    } else {
        // displayName.textContent = `Hello ${inputValue}` 
        const list = document.createElement("li");
        list.textContent = inputValue;
        todoList.appendChild(list);
        nameInput.value = "";
    }
};

// Adding the function to trigger button click on Enter key press
nameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.click();
    }
});
