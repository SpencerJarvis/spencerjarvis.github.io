const salaries = [];
const persons = [];

function addSalary()
{
    /**Connects dropdown to the menu*/
    var dropdown = document.getElementById("select_employees");

    /**Salary User Inputs */
    var userinput = prompt("What is the employee's salary? ");

    /**If user enters a $ remove it */
    var newinput = userinput.replace('$','')

    /**Convert Salart Input into String */
    var salary = parseInt(newinput);

    /**Employee Name input */
    var employee = dropdown.options[dropdown.selectedIndex].text
   
    
    /**Updates table if a new salary is entered for the employee  */
    for (var i = 0; i < persons.length; i++)
    {
        if (persons[i] == employee)
        {
            salaries[i] = salary
            return;
        }
    }

    /**Adds inputs to both Arrays if the Employee has never been entered*/
    salaries.push(salary)
    persons.push(employee)

}

function displayResult()
{
    /**Connects output to the DIV */
    var output = document.getElementById("results");

    /**Starting Variables */
    var total = 0
    var average = 0
    var numberOfEmployees = salaries.length
    var largest = salaries[0]

    /**Find Average */
    for (var i = 0; i < numberOfEmployees; i++)
    {
        total = total + salaries[i]
    }

    average = total/numberOfEmployees;

    /**Find Largest */
    for (var i = 0; i < numberOfEmployees; i++)
    {
        if (largest < salaries[i])
        {
            largest = salaries[i]
        }
    }

    /**Returning the Values */
    if (salaries.length > 0)
    {
        output.innerHTML = "The average salary is: $" + average + ". The highest salary is: $" + largest + ".";
    }
    /**If user did not input any values into the arrays */
    else
    {
        output.innerHTML = "Please input a salary for at least 1 employee."
    }
    
}

function displaySalary()
{
    /**Connects Table to the HTML*/
    var table = document.getElementById("employeeTable");

    /**Clears Row each time button is clicked to prevent repeat */
    for (var i = 1; i < table.rows.length;)
    {
        table.deleteRow(i);
    }


    /**Adds in the User entered data */
    for (let i = 0; i < salaries.length; i++)
    {
        
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.innerHTML = persons[i];
        cell2.innerHTML = "$" + salaries[i];
    }
}