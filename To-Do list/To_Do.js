const Task = document.getElementById("Input_fild");
const inner_lists = document.getElementById("Inner_lists");

function add_list(){
    if(Task.value === ""){
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = Task.value;
        inner_lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        }
    Task.value = "";
    saveData();
}

inner_lists.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("chicked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('Data',inner_lists.innerHTML);
}

function showData(){
    inner_lists.innerHTML = localStorage.getItem("Data");
}

showData();
// function hello(){
//     console.log('hello there');
// }

// hello();