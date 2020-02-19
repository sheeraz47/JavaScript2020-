var car1 = {
    brand: "Mercides",
    mileage: 1234,
    year: 2020
};
var car2 = {
    brand: "Toyota",
    mileage: 150000,
    year: 2020
};

console.log(car2["brand"]);// call a car2 brand ==> Toyota

// how can we call above object

//we can craete a constructor
function car(brand, mileage, year){
    this.brand = brand;
    this.mileage = mileage;
    this.year = year;
}

// in order create a new car we create 
var car3 = new car("Dodge", 15000, 2020);

console.log(car3);

// craete constructor for employees 
function Employee(Name, ID, SSN, Salary){
    this.Name = Name;
    this.ID = ID;
    this.SSN = SSN;
    this.Salary = Salary;

}
// crteate new emploess by using constructor
var employeeSaeed = new Employee("Saeed", 7, "123-123456", 95000);
var employeeSheeraz = new Employee("Sheeraz", 8, "000-987-123", 100000);

console.log(employeeSaeed);
console.log(employeeSheeraz);

// print only name of employees
console.log(employeeSaeed["Name"]);
console.log(employeeSheeraz["Name"]);