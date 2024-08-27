const container = document.querySelector(".container")
const listItems = document.querySelector(".list-items")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const tasks = document.querySelector(".tasks")
btn.addEventListener("click",function () {
   if (input.value.length == 0) {
    alert('Kindly Enter Task Name!!!!')
   } else {
   const li= document.createElement('li')
   tasks.appendChild(li)
//    const deleteBtn= document.createElement('btn')
//    li.appendChild(deleteBtn)
//    deleteBtn.innerHTML ="Delete"
   li.innerHTML = `${input.value} <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>`
                // deleteBtn.remove()
                var current_tasks = document.querySelectorAll(".delete");
                for(var i=0; i<current_tasks.length; i++){
                    current_tasks[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }

   } 
})