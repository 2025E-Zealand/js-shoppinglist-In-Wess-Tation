//Write your Javascript code here
console.log("Shoppinglist")

function findNode(id, type) {
    let node = document.getElementById(id);
    node.style.color = "green";
    node.style.fontSize = "24px";
    node.style.fontWeight = "bold";
    node.style.textDecoration = "underline";
    node.style.backgroundColor = "lightgray";


    let newNode = document.createElement(type)
    newNode.innerText = "I am a new node";
    newNode.style.color = "yellow"; 
    node.appendChild(newNode);
   
    return node;
}

function deleteNode(id, type) {
    let node = document.getElementById(id);
    node.remove();
    return node;
}

function editNode(id, type) {
    let node = document.getElementById(id);
    node.textContent = "I am an edited node";
    return node;
}





let newNode = findNode("list", "li");
console.log("New node is: ");
console.log(newNode);

let deletedNode = deleteNode("0", "li");
console.log("Deleted node is: ");
console.log(deletedNode);

let editedNode = editNode("1", "li");
console.log("Edited node is: ");
console.log(editedNode);