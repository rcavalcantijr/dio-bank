import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { SpecialAccount } from './class/SpecialAccount'


const peopleAccount = new PeopleAccount(1, 'Régis', 10)
console.log("Conta Pessoa Física")
peopleAccount.deposit(100)
peopleAccount.withdraw(40)
console.log("Saldo final PF: ", peopleAccount.getBalance())

const companyAccount = new CompanyAccount('DIO', 20)
console.log("\nConta Empresa")
companyAccount.deposit(100)
companyAccount.getLoan(1000)
console.log("Saldo final Empresa: ", companyAccount.getBalance())

const specialAccount = new SpecialAccount('João', 30)
console.log("\nConta Especial")
specialAccount.deposit(100)
specialAccount.withdraw(50)
console.log("Saldo final Especial: ", specialAccount.getBalance())