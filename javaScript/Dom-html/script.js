let rIndex, table = document.getElementById('table')

// check the empty input
function checkEmptyInput() {
    let isEmpty = false
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value
    let id = document.getElementById('id').value

    if (fName === '' || lName === '' || id === '') {
        alert('Input Cannot Be Empty')
        isEmpty = true;
    }
return isEmpty
}

//add Row
function addHtmlTableRow() {
    if (!checkEmptyInput()) {
        let newRow = table.insertRow(table.length)
        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        let fName = document.getElementById('fName').value
        let lName = document.getElementById('lName').value
        let id = document.getElementById('id').value
        cell1.innerHTML = fName
        cell2.innerHTML = lName;
        cell3.innerHTML = id;

        selectedRowToInput()
    }
}

function selectedRowToInput() {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById('fName').value = this.cells[0].innerHTML;
            document.getElementById('lName').value = this.cells[1].innerHTML;
            document.getElementById('id').value = this.cells[2].innerHTML;
        }
    }
}

selectedRowToInput()

function editHtmlTableSelectedRow() {
    if (!checkEmptyInput()){
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value
    let id = document.getElementById('id').value
    table.rows[rIndex].cells[0].innerHTML = fName;
    table.rows[rIndex].cells[1].innerHTML = lName;
    table.rows[rIndex].cells[2].innerHTML = id;
}}

function removeSelectedRow() {
    table.deleteRow(rIndex)

    document.getElementById('fName').value = ''
    document.getElementById('lName').value = ''
    document.getElementById('id').value = ''

}
