const inputbox=document.getElementById("inputbox")
const listcontainer=document.getElementById("listcontainer")

const addtaskbutton=document.getElementById("addtask");
addtaskbutton.addEventListener("click",addtask);
function addtask(){
    if(inputbox.value==''){
        alert("You must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
    }
    inputbox.value='';
    savedata();
     
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("firsttask");
        savedata();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}