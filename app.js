let add = document.getElementsByTagName('button')[0]
let update = document.getElementsByTagName('button')[1]
const input = document.querySelector('input')
let value;
function Add() {
    const tasks = document.querySelector('#tasks')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const span = document.createElement('span')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    deleteBtn.addEventListener('click', deleteButton)
    editBtn.addEventListener('click', editButton)
    if (input.value == 0) {
        alert('Please Enter a Task')
    }
    else {
        div1.className = 'task'
        span.className = 'taskname'
        span.innerHTML = input.value
        div1.appendChild(span)
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.className = 'delete'
        editBtn.innerHTML = 'Edit'
        editBtn.className = 'delete'
        div2.appendChild(deleteBtn)
        div2.appendChild(editBtn)
        div1.appendChild(div2)
        tasks.appendChild(div1)

    }
    input.value = ''


}
const deleteButton = (e) => {
    const event = e.target
    const p = event.parentElement
    const a = p.parentElement
    a.remove()
}
const editButton = (e) => {
    const event = e.target
    const p = event.parentElement
    const a = p.previousSibling
    input.value = a.innerHTML
    input.focus()
    add.style.display = 'none'
    update.style.display = 'block'
    value = a;
}
const Update = () => {
    if (input.value == 0) {
        alert('Please Enter a Task')
        return;
    }
    add.style.display = 'block'
    update.style.display = 'none'
    value.innerHTML = input.value
    input.value = ''
}