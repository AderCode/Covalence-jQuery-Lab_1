let button = document.createElement('button');
let btnText = document.createTextNode('Great Job! This Button is Here!');
button.appendChild(btnText);
document.body.appendChild(button);

button.addEventListener("click", function() {
    alert("Great Job! The Listener Works!");
});

