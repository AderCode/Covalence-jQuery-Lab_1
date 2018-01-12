let btn = document.createElement("button");
let btnText = document.createTextNode("Great Job! This Button is Here!");
btn.appendChild(btnText);
document.body.prepend(btn);

btn.addEventListener("click", function() {
  alert("Great Job! The Listener Works!");
});

let btnTwo = document.getElementById("btn2");

btnTwo.addEventListener("click", function() {
  let textBoxValue = document.getElementById("text-box").value;
  alert(textBoxValue);
});
