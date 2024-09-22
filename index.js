const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){

    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareInput = parseFloat(document.getElementById('software').value);
    const coursesInput = parseFloat(document.getElementById('courses').value);
    const internetInput = parseFloat(document.getElementById('internet').value);
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    const results = document.getElementById('results');

    if(incomeInput <= 0 || isNaN(incomeInput)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    if(softwareInput <= 0 || isNaN(softwareInput)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    if(coursesInput <= 0 || isNaN(coursesInput)){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    if(internetInput <= 0 || isNaN(internetInput)){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }
    
    const newAmount = softwareInput + coursesInput + internetInput;
    const finalAmount = incomeInput - newAmount;

    if(newAmount > incomeInput){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    totalExpenses.innerText = newAmount.toFixed(2);
    balance.innerText = finalAmount.toFixed(2);

    results.classList.remove('hidden');

    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-1-2 border-indigo-500"
    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">income: ${incomeInput.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expense: ${newAmount.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance: ${finalAmount.toFixed(2)}</p>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)
})

const calculateSavings = document.getElementById('calculate-savings');
calculateSavings.addEventListener('click', function(){

    const savings = parseFloat(document.getElementById('savings').value);
    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareInput = parseFloat(document.getElementById('software').value);
    const coursesInput = parseFloat(document.getElementById('courses').value);
    const internetInput = parseFloat(document.getElementById('internet').value);

    const newAmount = softwareInput + coursesInput + internetInput;
    const finalAmount = incomeInput - newAmount;

    const savingsAmount = (savings * finalAmount) / 100;
    const remainingBalance = finalAmount - savingsAmount;

    const savingsAmountInput = document.getElementById('savings-amount');
    savingsAmountInput.innerText = savingsAmount;

    const remainingBalanceInput = document.getElementById('remaining-balance');
    remainingBalanceInput.innerText = remainingBalance.toFixed(2);
    
})

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.add('text-gray-600');

    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.add('hidden');

    const results = document.getElementById('results');
    results.classList.remove('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
})

assistantTab.addEventListener('click', function(){
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.remove('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');
})