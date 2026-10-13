// This function calculates the monthly payments, total interest, and total mortgage amount based on the loan amount, term in years, and interest rate.
function calculateMonthlyPayments(loanAmount, termYears, interestRate) {
    let monthlyPayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2);
    let totalInterest = (monthlyPayment * termYears * 12) - loanAmount;

    let totalMortgageAmount = loanAmount + totalInterest;
    
    document.getElementById("calculatorResult").innerHTML = 
        "<strong>Mortgage Term: </strong>" + termYears + " years" + "<br>";
    document.getElementById("calculatorResult").innerHTML += 
        "<strong>Mortgage Interest Rate: </strong>" + (interestRate * 100) + "%<br>";
    document.getElementById("calculatorResult").innerHTML += 
        "<strong>Mortgage Amount: </strong>$" + totalMortgageAmount.toFixed(2) + "<br>"; // I feel like asking for this might've been a typo in the instructions, but I included it just in case.
    document.getElementById("calculatorResult").innerHTML += 
        "<strong>Total Interest Amount: </strong>$" + totalInterest.toFixed(2) + "<br>";
    document.getElementById("calculatorResult").innerHTML += 
        "<strong>Total Mortgage Amount: </strong>$" + totalMortgageAmount.toFixed(2) + "<br><br>";

    let remainingBalance = totalMortgageAmount;
    let month = 1;
    while (remainingBalance > 0) {
        document.getElementById("calculatorResult").innerHTML +=
            "<strong>Month " + month + ": </strong><br>";
        document.getElementById("calculatorResult").innerHTML +=
            "Monthly Payment: $" + monthlyPayment + "<br>";
        remainingBalance -= monthlyPayment;
        document.getElementById("calculatorResult").innerHTML +=
            "Remaining Balance: $" + (remainingBalance > 0 ? remainingBalance.toFixed(2) : "0.00") + "<br>";
        month++;
    }
    document.getElementById("calculatorResult").innerHTML +=
        "<br><strong>This is the Ending Amortization Calculator...</strong><br>";
};

// Event listener for the button click
document.getElementById("Button1").addEventListener('click', () => {
	let loanAmount = Number(prompt("Enter the loan amount: "));
    let termYears = Number(prompt("Enter the loan term in years: "));
    let interestRate = 0.0575;

    if (termYears == 15 || termYears == 30) {
        calculateMonthlyPayments(loanAmount, termYears, interestRate);
    } else {
        alert("Please enter a valid loan term (15 or 30 years).");
    }

});