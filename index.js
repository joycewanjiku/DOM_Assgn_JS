// Change document background color to silver
document.body.style.backgroundColor= "silver";


// Change the font color for h1 title tag to green
document.getElementById('title').style.color = "green";

// // Change the font case for h3 title tags to uppercase


// let h3 = document.getElementById("h3");
// h3.innerHTML = h3.innerHTML.toUpperCase();
// document.getElementById("h3").style.textTransform = "toUppercase";


document.getElementById('fruits').style.textTransform='uppercase'
document.getElementById("vegetables").style.textTransform="uppercase"

// Add one more fruit to the fruits list
let li =document.createElement('li');
li.innerHTML="Oranges";
document.createElement('li');
document.getElementById('fruList').appendChild(li);


// // Add one more vegetable to the vegetables list
let list =document.createElement('li');
list.innerHTML="Spinach";
document.createElement('li');
document.getElementById('vegList').appendChild(list);




