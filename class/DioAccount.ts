export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        
    }

    // setName = (name: string): void => {
    //     this.name = name
    //     console.log('O nome foi alterado com sucesso')
    // }

    public getName = (): string => {
        return this.name
    }

    public getBalance = (): number => {
        return this.balance
    }

    public deposit(value: number): void {
        if(this.validateStatus()){
            this.balance += value
            console.log(`Depósito de R$${value} realizado com sucesso. Saldo atual: R$${this.balance}`)
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance >= value){
            this.balance -= value
            console.log(`Saque de R$${value} realizado com sucesso. Saldo atual: R$${this.balance}`)
        } else {
            console.log('Saque não realizado. Saldo insuficiente')
        }
    }

    protected validateStatus(): boolean {
        if (this.status) { 
            return this.status
        } 
        throw new Error('Conta inválida')       
    }
}
