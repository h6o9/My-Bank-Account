function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
    this.deposite = function(amount) {
        this.balance += amount;
    }

    this.widthdraw = function(amount) {
        this.balance -= amount;
    }
}

// const jhonAccount = new BankAccount ('Jhon Maxo', 1000);
// const RebbecaJhonson = new BankAccount('Rebbeca Jhonson', 500000);

// jhonAccount.deposite(500);
// jhonAccount.widthdraw(1000);
 
// console.log(jhonAccount);

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const deposite = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(customerName.value, balance.value);
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(account);

});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === + accountNumber.value
    );

    account.deposite(+amount.value);
    console.log(accounts);
})