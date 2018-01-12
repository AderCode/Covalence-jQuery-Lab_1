// Create button that creates an alert with a nice message
let btn = document.createElement("button");
let btnText = document.createTextNode("Great Job! This Button is Here!");
btn.appendChild(btnText);
document.body.prepend(btn);

btn.addEventListener("click", function() {
  alert("Great Job! The Listener Works!");
});

// Create alert with text equal to the value input by user
let btnTwo = document.getElementById("btn2");

btnTwo.addEventListener("click", function() {
  let textBoxValue = document.getElementById("text-box").value;
  alert(textBoxValue);
});

// Change div color on hover, change back when not over
let divHover = document.getElementById("divHover");

divHover.addEventListener("mouseover", function() {
  divHover.style.backgroundColor = "yellow";
});

divHover.addEventListener("mouseout", function() {
  divHover.style.backgroundColor = "black";
});

// Make a paragraph change random colors when clicked
let randomColorPara = document.getElementById("RandomColorP");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColorPara.addEventListener("click", function() {
  randomColorPara.style.color = getRandomColor();
});

// Add a div and button that when clicked inserts a span containing your name into the div
btnThree = document.createElement("button");
btnThreeText = document.createTextNode("Create a Name Span");
divEmpty = document.createElement("div");
btnThree.appendChild(btnThreeText);
document.body.appendChild(btnThree);
document.body.appendChild(divEmpty);

btnThree.addEventListener("click", function() {
  let span = document.createElement("span");
  let myName = document.createTextNode("Matthew Aderhold");
  span.appendChild(myName);
  divEmpty.appendChild(span);
});

// When a specified button is clicked it adds the next friend in an array to the list on the page
let friends = [
  "Tom",
  "Dick",
  "Harry",
  "Larry",
  "Curly",
  "Moe",
  "Suzy",
  "Sarah",
  "Farrack",
  "Judas"
];
let btnFour = document.getElementById("addFriendsBtn");
let friendsList = document.getElementById("friends");
let i = 0;

btnFour.addEventListener("click", function() {
  if (i < friends.length) {
    let li = document.createElement("li");
    let friendToAdd = friends[i];
    let friend = document.createTextNode(friendToAdd);
    li.appendChild(friend);
    friendsList.appendChild(li);
    i++;
  } else {
      alert("You ran out of friends, sorry!")
  }
});
