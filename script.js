const container = document.querySelector(".container");
let clickCount=0;
let boxNo=0;
let arr=[];
let colorChange=(e)=>{
    boxNo++;
   let target= document.getElementById(e.target.id);
   if(target.style.backgroundColor==="blue"){
       target.style.backgroundColor="red";
       clickCount++;
   }else{
    target.style.backgroundColor="blue";
   }
   target.innerText=`Box # ${boxNo}`
   arr.push(e.target.id);
   if(clickCount>2){
    let prevTg= document.getElementById(arr[0]);
    prevTg.style.backgroundColor="blue"
    arr.splice(0,1);
    clickCount=2;
 
 }
 console.log(clickCount)
}


for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let div = document.createElement("button");
        div.setAttribute("id", `${i}${j}`);
        div.setAttribute("class", "sq")
        div.style.height="90px";
        div.style.width="100px";
       div.style.backgroundColor="blue";
        container.appendChild(div)
        div.addEventListener("click", colorChange)
        console.log("running")
    }
}