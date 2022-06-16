// Code goes here!

abstract class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // Protected is more or less private but its available on class that are extended

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear);   DONT WORK STATIC CANT BE ACESS WITH THIS
    // console.log(Department.fiscalYear); WORKS ;)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployeed(employee: string) {
    // this.id = "d2"; ID IS READONLY
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccounticDepartment extends Department {
  private lastReport: string;
  private static instance: AccounticDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please insert a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccounticDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccounticDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployeed(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("João");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);
it.addEmployeed("Max");
it.addEmployeed("Manu");
// accounting.employees[2] = "Anna";

it.printEmployeeInformation();
it.name = "IT2";
// const accountingCopy = { name: "Cleaning", describe: accounting.describe };

it.describe();

console.log(it);

// const accounting = new AccounticDepartment("d2", []);
const accounting = AccounticDepartment.getInstance();

console.log(accounting);

accounting.mostRecentReport = "Year Add Report";
accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);

accounting.addEmployeed("Max");
accounting.addEmployeed("Manu");

accounting.describe();

accounting.printReports();
accounting.printEmployeeInformation();
