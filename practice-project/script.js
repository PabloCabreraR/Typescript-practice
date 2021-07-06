var input = document.querySelector('#user-input');
var button = document.querySelector('#add-button');
var list = document.querySelector("#todo-list");
button.addEventListener("click", function () {
    var todo = document.createElement('li');
    todo.innerHTML = input.value + " <button class=\"delete\">X<button>";
    list.appendChild(todo);
    input.value = "";
});
