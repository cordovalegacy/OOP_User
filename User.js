class User{
    constructor(name, email){
        this.name = name
        this.email = email
        this.accountBalance = 150
    }

    makeWithdrawal(amount){
        this.accountBalance = this.accountBalance - amount
        return this
    }

    makeDeposit(amount){
        this.accountBalance = this.accountBalance + amount
        return this
    }

    displayBalance(){
        console.log(`Here is ${this.name}'s Account Balance: ${this.accountBalance}`)
    }

    transferMoney(users, amount){
        this.accountBalance = this.accountBalance - amount
        users.accountBalance = users.accountBalance + amount
        return this
    }
}

const userOne = new User("Brendan", "cordovalegacy19@gmail.com")
const userTwo = new User("Tori", "t.mccullar@gmail.com")
const userThree = new User("Hailey", "haileyG@gmail.com")
userOne.makeDeposit(1450).makeDeposit(1750).makeDeposit(350).makeWithdrawal(2750).transferMoney(userThree, 50).displayBalance()
console.log(userOne)
userTwo.makeDeposit(700).makeDeposit(675).makeWithdrawal(95).makeWithdrawal(125).displayBalance()
console.log(userTwo)
userThree.makeDeposit(375).makeWithdrawal(145).makeWithdrawal(45).makeWithdrawal(100).displayBalance()
console.log(userThree)