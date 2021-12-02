let students=[]

function renderTable(fName,lName,id) {
    const item = `<tr>
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${id}</td>
            </tr>`;
    const position = "beforeend";
    table.insertAdjacentHTML(position, item);
}
function add_a_student (student){
    const fNameInput=document.getElementById('fName').value
    const lNameInput=document.getElementById('lName').value
    const idInput=document.getElementById('id').value
    renderTable(fNameInput,lNameInput,idInput)
    students.push({
        FirstName:fNameInput,
        LastName:lNameInput,
        id:idInput,
    })
}
function remove_a_student(id){
    console.log(students)
    const idInput=document.getElementById('id').value
    students=students.filter((value)=>value.id !== idInput)
    console.log(students)
    add_a_student()
    /// فیلتر درست کار میکنه اما نمیفهمم چرا به لیست اعمال نمیشه؟؟؟
}
function update_a_student(id,newStudent){
    const idInput=document.getElementById('id').value
    students=students.map(student=>student.id===idInput ? newStudent : student)
    console.log(students)
    add_a_student()
    //روی newStudent : student ارور دارد
}
// function renderTable(){
//     let table=document.getElementsByTagName('table')
//     let th=document.getElementsByTagName('th')
//     th.innerHTML=''
//     students.forEach(student=>{
//        th.appendChild(`<tr><td>${student.fName}</td><td>${student.lName}</td><td>${student.id}</td></tr>`)
//     })
// }