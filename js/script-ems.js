// CREATE AN ARRAY OF EMPLOYEES

let employees = [   [00000001, Ash, 0001, Ashgmail.com, Bulbasaur], 
                    [00000002, Misty, 0002, Mistygmail.com, Ivysaur],
                    [00000003, Brock, 0003, Brockgmail.com, Venusaur],
                    [00000004, Tracy, 0004, Tracygmail.com, Charmander],
                    [00000005, May, 0005, Maygmail.com, Charmeleon] ]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS


// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
let form = document.querySelector('form')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table= document.querySelector('tbody')


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
 
let newEmployee = [`${id}`, `${name}` ,`${extension}`, `${email}`, `${department}` ]
 

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
employees.push(newEmployee)

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
    const tblBody = document.createElement("tbody")



    // LOOP THROUGH THE ARRAY OF EMPLOYEES

    
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};