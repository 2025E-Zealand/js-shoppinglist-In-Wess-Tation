//Write your Javascript code here
console.log("Shoppinglist")

function findNode(id, type) {
    let node = document.getElementById(id);
    node.style.color = "green";
    node.style.fontSize = "24px";
    node.style.fontWeight = "bold";
    node.style.textDecoration = "underline";
    node.style.backgroundColor = "lightgray";


   
    return node;
}

function addNode(item, type) {
    let node = document.getElementById("list");
    let newNode = document.createElement(type);
    newNode.innerText = item;
    newNode.style.color = "yellow"; 
    node.appendChild(newNode);

    return node; 
}

function deleteNode(id) {
    let node = document.getElementById(id);
    node.remove();

    return node;
}

function editNode(id) {
    let node = document.getElementById(id);
    node.textContent = "I am an edited node";

    return node;
}

function listCounter() {
    let listItems = document.querySelectorAll("li");
    console.log("Number of list items: " + listItems.length);

    return listItems.length;
}




//find node
let newNode = findNode("list", "li");
console.log("Found node is: ");
console.log(newNode);

//add node
let addedNode = addNode("Peanuts", "list");
console.log("Added node is: ");
console.log(addedNode);

let addedNodeTwo = addNode("Bacon", "list");
console.log("Added node is: ");
console.log(addedNodeTwo);

//delete node
let deletedNode = deleteNode("0", "li");
console.log("Deleted node is: ");
console.log(deletedNode);

//edit node
let editedNode = editNode("1", "li");
console.log("Edited node is: ");
console.log(editedNode);

//list counter
let listCount = listCounter();
console.log("List count is: " + listCount);