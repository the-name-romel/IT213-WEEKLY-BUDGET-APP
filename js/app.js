//Classes


//Variables
const addExpenseForm = document.querySelector('#add-expense');

let budget, userBudget;

//EventListeners
eventListeners();
function eventListeners() {

    //AppInit
    document.addEventListener('DOMContentLoaded', function() {
        //Ask the visitor the weekly budget
        userBudget = prompt('What\s your budget for this week? ');
        //Validate the user budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        }
    });

    //When a new expense is added
    addExpenseForm.eventListeners('submit', function(e) {
        e.preventDefault();
    });
}
