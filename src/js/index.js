class NumberConverter {
    constructor(number){
        this._number = number;
    }

    get number() {
        return this._number;
    }

    set convertNumberToString(number) {
        
        const unitDecimal  = (number) => {
            let result = "";
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
                {10: "Ten"},
                {11: "Eleven"},
                {12: "Twelve"},
                {13: "Thirteen"},
                {14: "Fourteen"},
                {15: "Fifteen"},
                {16: "Sixteen"},
                {17: "Seventeen"},
                {18: "Eighteen"},
                {19: "Nineteen"},           
            ];

            list.forEach((unit)=>{
                if(unit[number]){
                    result = unit[number];
                }
            });
            return result;
        };

        const composedNumbers = (number) => {
            let result = "";

            const list = [
                {20: "Twenty"},
                {30: "Thirty"},
                {40: "Forty"},
                {50: "Fifty"},
                {60: "Sixty"},
                {70: "Seventy"},
                {80: "Eighty"},
                {90: "Ninety"}, 
                {100: "Hundred"},
                {1000: "Thousand"},
                {1000000: "Million"},
            ];

            list.forEach((decimal)=>{
                const [key, value] = Object.entries(decimal)[0];
                const composedLength = key.toString().length;
                const numberLength = number.toString().length;
                
                if(composedLength === numberLength){
                    const unit_decimal = unitDecimal(key[0]);
                    console.log(key, value, number, composedLength, numberLength);
                    result += `${unit_decimal} ${value}`;
                }
            });
            return result;
        };


        if(number <= 19){
            this._number = unitDecimal(number);
        } else {
            this._number = composedNumbers(number);
        }
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

const numberConverter = new NumberConverter(0);


document.addEventListener("DOMContentLoaded", ()=>{
    numberConverter.updateView();
});