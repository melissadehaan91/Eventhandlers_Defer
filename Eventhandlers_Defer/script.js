let btn = document.getElementById('mybutton');

btn.addEventListener("click", function(){
    alert("button clicked");
});


function toggleColor(){
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle ('red-background');
}
let btn2 = document.getElementById('button2');
btn2.addEventListener("click", toggleColor);

