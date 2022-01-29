class StringNumber {
    constructor(number){
        this.number = number;
    }

    /*static empty() {
        console.log("started");
        return new numberToString(0);
    } */

    set number(number){
        if(isNaN(Number(number))){
            throw "must be a number";
        }

        const handleUnit = (number) => {
            const unitNumbers = [
                "Zero",
                "One",
                "Two",
                "Three",
                "Four",
                "Five",
                "Six",
                "Seven",
                "Eight",
                "Nine"           
            ];

            const nth = Number(number);
            return unitNumbers[nth];
        }

        const handleSmallDecimals = (number) => {
            const tenToNineteen = [
                "Ten",
                "Eleven",
                "Twelve",
                "Thirteen",
                "Fourteen",
                "Fifteen",
                "Sixteen",
                "Seventeen",
                "Eighteen",
                "Nineteen",
            ];

            const nth = Number(number) % 10;
            return tenToNineteen[nth];
        }

        const handleDecimals = (number) => {
            const decimalNumbers = [
                "empty-0",
                "empty-1",
                "Twenty",
                "Thirty",
                "Forty",
                "Fifty",
                "Sixty",
                "Seventy",
                "Eighty",
                "Ninety",
            ];
    

            let stringResult = "";
            const numInteger = Number(number);
            const nth = Math.floor((Number(number) / 10) );
            
            stringResult = decimalNumbers[nth];

            if(numInteger % 10 > 0){
                const numberArray = number.toString().split("");
                const pos = numberArray.length - 1;
                stringResult += `-${handleUnit(numberArray[pos])}`;
            }
            return stringResult;
        }

        const handleHundreds = (number) => {
            const hundreds = [
                "empty-0",
                "empty-1",
                "Hundred",
                "Thousand",
                "Million",
                "Trillion",
            ];

            let stringResult = "";
            const numInteger = Number(number);
            const nth = Math.floor(Math.log10(numInteger));
            const notation = Math.pow(10, nth);
            const digit = Math.floor(numInteger / notation);

            stringResult = `${handleUnit(digit)} ${hundreds[nth]}`;

            const remainder = numInteger % notation;
            if(remainder > 0){
                const recalculateRemainder = calculate(remainder);
                stringResult += ` ${recalculateRemainder}`;
            }
            
            return stringResult;
        }

        const _this = this;
        function calculate(number){
            let stringResult = "";
            const numInteger = Number(number);
            const size = Math.floor(Math.log10(numInteger));
            
            if(numInteger === 0 || size === 0){
                stringResult = handleUnit(numInteger);
            }

            if(size === 1) {
                if(numInteger >= 10 && numInteger <= 19){
                    stringResult = handleSmallDecimals(numInteger);
                }
                if(numInteger >= 20 && numInteger <= 99){
                    stringResult = handleDecimals(numInteger);                    
                }
            }

            const hasHundreds = Math.floor(Math.log10(numInteger));
            if(numInteger >= 100 && hasHundreds >= 2){
                stringResult = handleHundreds(numInteger);                
            }
            
            _this.numberToString = stringResult;
            return stringResult;
        }

        calculate(number);
    }

    get number(){
        return this.numberToString;
    }
}



export default StringNumber;