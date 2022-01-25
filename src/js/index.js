class NumberConverter {
    constructor(){
        this._number = "";
    }

    get number() {
        return this._number;
    }

    set convertNumberToString(number) {
        this._number = "";
        const numberArray = number.toString().split("");
        
        const classifyNumber  = (number) => {
            let stringNumber = "";
            const list = [
                {1: "One"},
                {2: "Two"},
                {3: "Three"},
                {4: "Four"},
                {5: "Five"},
                {6: "Six"},
                {7: "Seven"},
                {8: "Eight"},
                {9: "Nine"},       
            ];

            list.forEach((unit)=>{
                if(unit[number]){
                    stringNumber = unit[number];
                }
            });
            return stringNumber;
        };

        const classifyNumberPosition = (numLength) => {

            const list = [
                // {20: "Twenty"},
                // {30: "Thirty"},
                // {40: "Forty"},
                // {50: "Fifty"},
                // {60: "Sixty"},
                // {70: "Seventy"},
                // {80: "Eighty"},
                // {90: "Ninety"}, 
                {100: "Hundred"},
                {1000: "Thousand"},
                {1000000: "Million"},
            ];
            
            let res = "";
            list.find((numClass)=>{
                const [key, valueString] = Object.entries(numClass)[0];
                const classifierLength = key.toString().length;
                if(numLength === classifierLength){
                    res = valueString;
                    return valueString;
                }
            });
            return res;
        };

        numberArray.forEach((number, index, array)=>{
            const pos = array.length - index;
            this._number += ` ${classifyNumber(number)} ${classifyNumberPosition(pos)}`;
        });
    }

    updateView() {
        const inputNumber = document.querySelector("#converter__input");
        const resultView = document.querySelector("#converter__result");

        inputNumber.addEventListener("keyup", (event)=>{
            const currentNumber = event.target.value;
            this.convertNumberToString = currentNumber;
            resultView.innerText = this._number;
        });
        resultView.innerText = this._number;
    }
}

const numberConverter = new NumberConverter();

document.addEventListener("DOMContentLoaded", ()=>{
    numberConverter.updateView();
});