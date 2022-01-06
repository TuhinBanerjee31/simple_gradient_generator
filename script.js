// VARIABLE DECLARATION
var result= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("set");

// TAKING OUT COLOR INPUT VALUE & RETURNING AS RESULT
function userColorData()
{
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    result.textContent = body.style.background + ";";
};

// FUNCTION CALLING
color1.addEventListener("input", userColorData);
color2.addEventListener("input",userColorData);