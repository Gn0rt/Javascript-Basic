const inputValue = document.querySelector('.inputValue');
const lists = document.querySelector('.lists');
console.log(lists)
console.log(inputValue);
//1. Lay duoc gia tri cua input
//2. khi nhan add thi se duoc add vao lists. phai co mot the de hien thi task, tao ra mot the li
//3. add li vao lists, ben cnah do se co mot nut delete
//4. delete cong viec

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