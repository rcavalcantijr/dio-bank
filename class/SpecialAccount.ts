import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void =>{
        const bonus = 10
        super.deposit(value + bonus)
        console.log(`Bônus de R$${bonus} adicionado ao depósito especial | Total creditado: R$${value + bonus}`)
    }
}