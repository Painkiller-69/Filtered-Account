class Account {
    private accountNumber: number;
  
    constructor(accno: number) {
      this.accountNumber = accno;
    }
  
    process(trans: Transaction): boolean {
      return false;
    }
  }
  
  class Transaction {
    value(): number {
      return 0;
    }
  }
  
  class FilteredAccount extends Account {
    private filteredCount: number;
  
    constructor(accno: number) {
      super(accno);
      this.filteredCount = 0;
    }
  
    process(trans: Transaction): boolean {
      const transValue = trans.value();
  
      if (transValue !== 0) {
        return super.process(trans);
      } else {
        this.filteredCount++;
        return true;
      }
    }
  
    filtered(): number {
      return this.filteredCount;
    }
  }
const filteredAcc = new FilteredAccount(12124);
const trans1 = new Transaction();
const trans2 = new Transaction();
const trans3 = new Transaction();
const trans4 = new Transaction();

console.log(filteredAcc.process(trans2));
console.log(filteredAcc.process(trans3));
console.log(filteredAcc.process(trans4));
console.log(filteredAcc.process(trans1));

console.log(filteredAcc.filtered());