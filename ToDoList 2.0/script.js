const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        console.log('Edit button clicked for:', todoText);
    });

}
