// Change document background color to silver
document.body.style.backgroundColor= "silver";


// Change the font color for h1 title tag to green
document.getElementById('title').style.color = "green";

// // Change the font case for h3 title tags to uppercase


// let h3 = document.getElementById("h3");
// h3.innerHTML = h3.innerHTML.toUpperCase();
// document.getElementById("h3").style.textTransform = "toUppercase";

let h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].style.textTransform = "uppercase";
}

// Add one more fruit to the fruits list
let h1 =document.creatElement('h1');
h3.innerHTML="Oranges";
document,creatElement('h1');
document.getElementById('container').appendChild(h1);


// // Add one more vegetable to the vegetables list
// let vegetablesList = document.getElementById("vegetables");
// let  newVegetable = document.createElement("li");
// newVegetable.appendChild(document.createTextNode("Broccoli"));
// vegetablesList.appendChild(newVegetable);


