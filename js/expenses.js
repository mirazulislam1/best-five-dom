// calculate first button

document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerExpenses = getInputFieldValueById('player-input');
    const playerNumber = getTextElementValueById ('add-player')
    const totalExpenses = getTextElementValueById('expenses-total');
    const totalPlayerExpenses = playerExpenses * playerNumber;
    setTextElementById('expenses-total', totalPlayerExpenses);
})

// calculate secend button

document.getElementById('btn-totalCalculate').addEventListener('click',function(){
    const totalExpenses = getTextElementValueById('expenses-total');
    const managerExpenses = getInputFieldValueById('manager-input');
    const coachExpenses = getInputFieldValueById('coach-input');
    const finalTotal  = getTextElementValueById('final-total');
    const finalTotalExpenses = totalExpenses + managerExpenses + coachExpenses;
    setTextElementById('final-total', finalTotalExpenses);

})