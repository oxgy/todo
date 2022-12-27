let addToDoButton = document.getElementById('addToDo')
let listContainer = document.getElementById('listContainer')
let toDoText = document.getElementById('toDoText')
let clearToDoButton =document.getElementById('clearToDo')
var input = document.getElementById("toDoText");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addToDo").click();
}
});
addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph')
    listContainer.appendChild(paragraph);
    paragraph.innerHTML = toDoText.value;
    toDoText.value = ''
    
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',function(){
        listContainer.removeChild(paragraph)
    })
    clearToDoButton.addEventListener('click', function(){
        paragraph.style.display = 'none';
    })
    
})

