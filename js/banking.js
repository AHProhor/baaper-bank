// console.log('Welcome to my baaper bank');

function getInputValue(userInput){
    const userInputField = document.getElementById(userInput) ;
    const userAmountText = userInputField.value;
    const userCurrentAmount = parseFloat(userAmountText);

    // clear deposite field 
    userInputField.value = '';
    return userCurrentAmount;
}


function userAccountBalance(totalFieldId,amount){
        const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getBalance(){
    const accountBalance = document.getElementById('balance-total');
    const balanceTotalText = accountBalance.innerText;
    const previousAccountBalance = parseFloat(balanceTotalText);
    return previousAccountBalance;
}


function updateBalance(depositeCurrentAmount, isAdd){
    const accountBalance = document.getElementById('balance-total');
    const previousAccountBalance = getBalance();

    if(isAdd == true){
        const currentAccountBalance = previousAccountBalance + depositeCurrentAmount;
    accountBalance.innerText = currentAccountBalance;
    }
    else{
        const currentAccountBalance = previousAccountBalance - depositeCurrentAmount;
    accountBalance.innerText = currentAccountBalance;
    }

}

document.getElementById('deposit-button').addEventListener('click', function(){
    // deposite amount

    const depositeCurrentAmount = getInputValue('deposit-input')
    if(depositeCurrentAmount >0){
        userAccountBalance('deposit-total',depositeCurrentAmount);
    // Total account Balance section 
    updateBalance(depositeCurrentAmount, true);
    } 
});     

// handel withdraw Button   

document.getElementById('withdraw-button').addEventListener('click',function(){
    // with draw amount
    const currentWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getBalance();
    if(currentWithdrawAmount>0 && currentWithdrawAmount < currentBalance){
        userAccountBalance('withdraw-total', currentWithdrawAmount);

        // update Account Balance 
        updateBalance(currentWithdrawAmount, false);
    }
});