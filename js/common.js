function getInputFieldValueById(inputId){
    const getInputFieldValueById = document.getElementById(inputId);
    const inputFieldValueString = getInputFieldValueById.value;
    const inputValue = parseFloat(inputFieldValueString);
    return inputValue;
}
function getTextElementValueById(elementId){
    const textValueById = document.getElementById(elementId);
    const textValueByIdString = textValueById.innerText;
    const textValue = parseFloat(textValueByIdString);
    return textValue;
}
function setTextElementById(elementId, newValue){
    const textElementValue = document.getElementById(elementId);
    textElementValue.innerText = newValue;

}