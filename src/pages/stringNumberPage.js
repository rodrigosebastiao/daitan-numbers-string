import "../components/stringNumber/stringNumber.scss";
import StringNumber from "../components/stringNumber/stringNumber";


function updateView() {
    const inputNumber = document.querySelector("#converter__input");
    const resultView = document.querySelector("#converter__result");

    const currentNumber = new StringNumber(0);
    resultView.innerText = currentNumber.numberToString;

    inputNumber.addEventListener("keyup", (event)=>{
        const currentNumber = new StringNumber(event.target.value);
        resultView.innerText = currentNumber.numberToString;
    });
}


document.addEventListener("DOMContentLoaded", ()=>{
    updateView();
});