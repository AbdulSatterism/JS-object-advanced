// closure or encapsulation

// const bank = owner => {
//     balance = 0;
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }
// const mofijBank= bank('mofiz');
// console.log(mofijBank(500))

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance - amount;
            balance -= amount;
            return balance;
        }
    }
}

const mofijBank = bank('Mr. Kodu');
console.log(mofijBank.deposit(500))
// console.log(mofijBank.balance)
console.log(mofijBank.withdraw(200))
console.log(mofijBank.deposit(50000))
console.log(mofijBank.withdraw(599))