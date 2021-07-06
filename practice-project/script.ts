const input = document.querySelector('#user-input') as HTMLInputElement
const button = document.querySelector('#add-button')
const list = document.querySelector("#todo-list")

button.addEventListener("click", ()=>{
    const todo = document.createElement('li')
    todo.innerHTML = `${input.value} <button class="delete">X</button>`
    list.appendChild(todo)
    input.value = ""
})
    
