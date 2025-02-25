const inputValue = document.querySelector('.inputValue');
const lists = document.querySelector('.lists');
console.log(lists)
console.log(inputValue);

function addTask() {
    // console.log(inputValue.value.length)
    if (inputValue.value.length === 0) return alert("Hãy điền công việc của bạn!")
    const li = document.createElement('li');
    li.innerHTML = `${inputValue.value} <button onclick="deleteTask(this)">Delete</button>`;
    lists.appendChild(li);
    inputValue.value = '';
}
function deleteTask(button) {
    const li = button.parentElement;
    console.log(li)
    li.remove();
}