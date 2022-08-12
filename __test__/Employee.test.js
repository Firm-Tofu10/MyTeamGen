const Employee = require("../Lib/Employee");


test("Test Employee Object", function () {
    const testEmployee = new Employee();
    expect(typeof (testEmployee)).toBe("object");
})

test("Test Employee Object name attribute", function () {
    const testEmployee = new Employee("Bryson", 123, "test@gmail.com");
    expect(testEmployee.name).toBe("Bryson");
})

test("Test Employee Object ID attribute", function () {
    const testEmployee = new Employee("Bryson", 123, "test@gmail.com");
    expect(testEmployee.id).toBe(123);
})

test("Test Employee Object Email attribute", function () {
    const testEmployee = new Employee("Bryson", 123, "test@gmail.com");
    expect(testEmployee.email).toBe("test@gmail.com");
})

test("Test Employee Object getRole attribute", function () {
    const testEmployee = new Employee("Bryson", 123, "test@gmail.com");
    expect(testEmployee.getRole()).toBe("Employee");
})

