const Manager = require("../Lib/Manager");


test("Test Manager Object",function(){
  const testManager = new Manager();
  expect(typeof(testManager)).toBe("object");
})

test("Test Engineer Object name attribute",function(){
    const testManager = new Manager("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testManager.name).toBe("Bryson");
  })