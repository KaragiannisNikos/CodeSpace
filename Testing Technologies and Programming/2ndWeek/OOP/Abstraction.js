// Abstract Class BankAccount
class BankAccount {
  constructor(balance) {
    if (this.constructor === BankAccount) {
      throw new TypeError("Cannot construct Abstract instances directly...");
    }
    this.balance = balance;
  }

  // Abstract method for deposit
  deposit(amount) {}

  // Abstract method for withdraw
  withdraw(amount) {}

  //    Concrete Methods
}

// Concrete subclass representing a Savings Account
class SavingsAccount extends BankAccount {
  //  Class constructor
  constructor(balance, interestRate) {
    // Call the parent (super) class constructor
    super(balance);
    this.interestRate = interestRate;
  }
  //  @Override
  deposit(amount) {
    this.balance += amount + (amount * this.interestRate) / 100;
  }
  //  @Override
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("insufficient funds.");
    }
  }
}

// Concrete subclass representing a Savings Account
class CurrentAccount extends BankAccount {
  constructor(balance, overdraftLimit) {
    // Call the parent (super) class constructor
    super(balance);
    this.overdraftLimit = overdraftLimit;
  }

  //  @Override
  deposit(amount) {
    this.balance += amount;
  }

  // Check if there are sufficient funds (including overdraft limit) for withdrawal
  withdraw(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}
//  Creat a SavingAccount object
const savinAccount = new SavingsAccount(1000, 5);

//  Deposit some funds
savinAccount.deposit(500);
console.log("SavingsAccount balance after deposit: ", savinAccount.balance);

//  Withdraw some funds
savinAccount.withdraw(200);
console.log("SavingsAccount balance after withdraw: ", savinAccount.balance);

//  Create a CurrentAccount object
const currentAccount = new CurrentAccount(1500, 200);
//  Deposit some funds
currentAccount.deposit(300);
console.log("SavingsAccount balance after deposit: ", currentAccount.balance);
//  Withdraw some funds
currentAccount.withdraw(2000);
console.log("SavingsAccount balance after withdraw: ", currentAccount.balance);
