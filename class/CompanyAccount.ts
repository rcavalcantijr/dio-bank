import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        if(this["validateStatus"]()){
            this['balance'] += value
            console.log(`Empréstimo de R$${value} concedido. Saldo atual: R$${this.getBalance()}`)
        }
    }

    deposit = (value: number): void => {
        super.deposit(value)
        console.log('Depósito realizado pela empresa')
    }
}