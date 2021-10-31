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

        //Displays a Message Correct or Invalid
        printMessage(message, className) {
            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('text-center', 'alert', className);
            messageWrapper.appendChild(document.createTextNode(message));

            //Insert into HTML
            document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
            
            //Clear the Error
            setTimeout(function() {
                document.querySelector('.primary .alert').remove();
                //addExpenseForm.reset();
            }, 3000); 
        }
        //Displays the expenses from the form into the list
        addExpenseToList(name, amount) {
            const expensesList = document.querySelector('#expenses ul');

            //Create li
            const li = document.createElement('li');
            li.className ="list-group-item d-flex justify-content-between align-items-center";
        
            //Create the template
            li.innerHTML = `
                ${name}
                <span class="badge badge-primary badge-pill">$ ${amount}</span>
            `;

            //Insert into HTML
            expensesList.appendChild(li);
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
        //Read the input values 
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '') {
            html.printMessage('There was an error, all the fields are mandatory', 
            'alert-danger');
        } else {
            //Add the expenses into the list
            html.addExpenseToList(expenseName, amount);

        }
    });
}
