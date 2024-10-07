// 1) Remove the 'main#main' node
const mainNode = document.getElementById("main");
mainNode.remove();

// 2) Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement("h1");

// 3) Set the id of 'newHeader' to 'victory'
newHeader.id = "victory";

// 4) Set the text content of 'newHeader' to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the new header to the body (or any other desired parent element)
document.body.appendChild(newHeader);
