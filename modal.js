var display=document.querySelector("#show");
var off=document.querySelector("#close-modal");
var click_me=document.querySelector("#click");
var on_hover=document.querySelector("#image");
click_me.onclick = function() {
    display.style.display = "block";
};
off.onclick=function () {
    display.style.display="none";
};
on_hover.onclick=function () {
    display.style.display="block"
};
var border= document.querySelector("#yellow");
var optn_one=document.querySelector("#growth");
var optn_two=document.querySelector("#operation");
optn_one.onclick=function () {
    optn_one.style.borderBottom="3px solid yellow";
    optn_one.style.width="300px";
    border.style.display="none";
    optn_one.style.textAlign="center";
    optn_two.style.borderBottom="";
};
optn_two.onclick=function () {
    optn_two.style.borderBottom="3px solid yellow";
    optn_two.style.width="300px";
    border.style.display="none";
    optn_two.style.textAlign="center";
    optn_one.style.borderBottom="";
};
