
var input = document.getElementById("inp");
var text = document.querySelector(".text");

function add(){
    if(input.value === ""){
        alert(" Enter Your Task")
    }else{
       var newELEMENT = document.createElement("ul");
        newELEMENT.innerHTML = `${input.value} <i class = "fa fa-trash"><i>`;
        text.appendChild(newELEMENT)
        input.value ="";
        newELEMENT.querySelector('i').addEventListener('click' , remove);
        function remove(){
            newELEMENT.remove()
        }
    }

}






