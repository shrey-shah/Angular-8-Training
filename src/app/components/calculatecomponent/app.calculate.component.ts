import {Component} from '@angular/core';

@Component({
 selector:'app-calculate-component',
 templateUrl:'./app.calculate.view.html'
})
 
export class CalculateComponent {
    num1: number;
    result: number;
    digits: string;
    operator1: string;

    constructor(){  
        this.num1 = 0;
        this.digits = "";
    }

    
    onNumClicked(digit: string): void {
        if(this.digits == "") {
            this.digits = digit;
        }        
        else {
            this.digits += digit;
        }
        this.num1 = Number(this.digits);
    }

    calculate(operator: string): void {
        switch(operator)
        {
            case "+":
                    if(this.result === undefined) {
                        this.result = this.num1;
                    }
                    else {
                        this.result = Number(this.result) + Number(this.num1);
                    }
                    break;
            
            case "-":
                    if(this.result === undefined) {
                        this.result = this.num1;
                    }
                    else {
                        this.result = this.result - this.num1;
                    }
                    break;
            case "*":
                    if(this.result === undefined) {
                        this.result = this.num1;
                    }
                    else {
                        this.result = this.result * this.num1;
                    }
                    break;      
            case "/":
                    if(this.result === undefined) {
                        this.result = this.num1;
                    }
                    else {
                        this.result = this.result / this.num1;
                    }
                    break;  
            case "%":
                    if(this.result === undefined) {
                        this.result = this.num1;
                    }
                    else {
                        this.result = this.result % this.num1;
                    }
                    break;        
            case "sq":
                    this.result = this.num1*this.num1;
                    break;
            case "cu":
                    this.result = this.num1*this.num1*this.num1;
                    break;
            case "sqrt":
                    this.result = Math.sqrt(this.num1);
                    break;
            case "sin":
                    this.result = Math.sin(this.num1);
                    break;
            case "cos":
                    this.result = Math.cos(this.num1);
                    break;
            case "tan":
                    this.result = Math.tan(this.num1);
                    break;
            case "reset":
                    this.num1 = 0; 
                    this.result = undefined;
                    break;  
            case "=":
                    this.calculate(this.operator1);
                    //this.num1 = this.result;
                    break;                                  
        }
        this.digits = "";
        this.operator1= operator;
        this.num1 = 0;
       // this.num1 = this.result;
    }

}