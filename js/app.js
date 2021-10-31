//Classes

class Budget {
    constructor(budget) {
        this.budget = Number (budget);
        this.budgetLeft = this.budget;
    }
}

//Everything related to HTML
class HTML{

        //Insert the budget when the user submits it
        insertBudget(amount) {
            //Insert to the HTML
            budgetTotal.innerHTML = `${amount}`;
            budgetLeft.innerHTML = `${amount}`;
        }
}


//Variables
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');

let budget, userBudget;

//Instanciate the HTML Class
const html = new HTML();

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
        } else {
            //Budget is valid then intanciate budget class
            budget = new Budget(userBudget);
            
            //Instanciate the HTML Class
            html.insertBudget(budget.budget);
        }
            
    });

    //When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}
