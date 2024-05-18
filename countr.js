const div=document.createElement("div")
const body=document.getElementsByTagName("body");
body[0].appendChild(div);
let num=0;
const input=document.createElement("p");
div.appendChild(input);
const btn1=document.createElement("button");
const btn2=document.createElement("button");
let buttons=document.getElementsByTagName("button")
div.appendChild(btn1)
div.appendChild(btn2)
input.textContent=0
buttons[0].textContent="increase"
buttons[1].textContent="decrease"
buttons[0].addEventListener("click",()=>{
op(++num)
})
buttons[1].addEventListener("click",()=>{
    let dec=--num;
    if(dec>=0){
        op(dec)
    }
    else{
        alert("zero tak pahuch gya hai ")
    }
})
function op(item){
    input.textContent=item
}

