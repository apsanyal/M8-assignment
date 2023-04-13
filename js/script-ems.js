// CREATE AN ARRAY OF EMPLOYEES

let employees = [Ash, Misty, Brock, Tracy, May]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS


// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
let form = document.querySelector('form')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table= document.querySelector('table')

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
let id = document.getElementById('id').value
let name = document.getElementById('name').value
let extension = document.getElementById('extension').value
let email = document.getElementById('email').value
let department = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

 

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM
form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};