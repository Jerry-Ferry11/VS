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
        editTodoItem(li);       
    });

};

function editTodoItem(li) {
    const span = li.querySelector('span');
    const todoText = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = todoText;
    li.insertBefore(input, span);
    li.removeChild(span);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    li.insertBefore(saveBtn, li.querySelector('.delete-btn'));
    li.removeChild(li.querySelector('.edit-btn'));

    saveBtn.addEventListener('click', function() {
        const newTodoText = input.value.trim();
        if (newTodoText !== '') {
            span.textContent = newTodoText;
            li.insertBefore(span, input);
            li.removeChild(input);

            const newEditBtn = document.createElement('button');
            newEditBtn.textContent = 'Edit';
            newEditBtn.className = 'edit-btn';
            li.insertBefore(newEditBtn, li.querySelector('.delete-btn'));
            li.removeChild(saveBtn);

            newEditBtn.addEventListener('click', function() {
                editTodoItem(li);
            });
        }
    });
}