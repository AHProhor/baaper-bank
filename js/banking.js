// console.log('Welcome to my baaper bank');


document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositeInput = document.getElementById('deposit-input') ;
    const depositeAmountText = depositeInput.value;
    const depositeCurrentAmount = parseFloat(depositeAmountText);

    // get deposite ammount
    const depositeTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositeTotal.innerText;
    const depositePreviousAmount = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositePreviousAmount + depositeCurrentAmount;

    // Total account Balance section 

    const accountBalance = document.getElementById('balance-total');
    const balanceTotalText = accountBalance.innerText;
    const previousAccountBalance = parseFloat(balanceTotalText);
    const currentAccountBalance = previousAccountBalance + depositeCurrentAmount;
    accountBalance.innerText = currentAccountBalance;

    // clear deposite field 
    depositeInput.value = '';
});

// Withdraw Button work  

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInputValue = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInputValue.value;
    const currentWithdrawAmount = parseFloat(withdrawAmount);
   
    // get withdraw ammount
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTOtalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTOtalText);

    withdrawTotal.innerText = previousWithdrawAmount + currentWithdrawAmount;

    // update Account Balance 
    const balanceTotal = document.getElementById('balance-total');
    const accountBalanceText = balanceTotal.innerText;
    const previousAccountBalance = parseFloat(accountBalanceText);

    const updatedBalance = previousAccountBalance - currentWithdrawAmount;
    balanceTotal.innerText = updatedBalance;


    // clear withdraw field 
    withdrawInputValue.value ='';
});