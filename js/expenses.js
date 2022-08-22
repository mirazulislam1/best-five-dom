document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerExpenses = getInputFieldValueById('player-input');
    const totalPlayerExpenses = arry.length * playerExpenses;
    const totalExpenses = getTextElementValueById('expenses-total');
    setTextElementById('expenses-total', totalPlayerExpenses);
})

document.getElementById('btn-totalCalculate').addEventListener('click',function(){
    const playerExpenses = getInputFieldValueById('player-input');
    const totalPlayerExpenses = arry.length * playerExpenses;

    const managerExpenses = getInputFieldValueById('manager-input');
    const coachExpenses = getInputFieldValueById('coach-input');
    const finalTotalExpenses = totalPlayerExpenses + managerExpenses + coachExpenses;
    const finalTotal  = getTextElementValueById('final-total');
    setTextElementById('final-total', finalTotalExpenses);

})