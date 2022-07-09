const Manager = require("../Lib/Manager");


test("Test Manager Object",function(){
  const testManager = new Manager();
  expect(typeof(testManager)).toBe("object");
})

test("Test Engineer Object name attribute",function(){
    const testManager = new Manager("Bryson",123,"test@gmail.com",321);
    expect(testManager.name).toBe("Bryson");
  })
  
  test("Test Engineer Object ID attribute",function(){
    const testManager = new Manager("Bryson",123,"test@gmail.com",321);
    expect(testManager.id).toBe(123);
  })

  test("Test Engineer Object Email attribute",function(){
    const testManager = new Manager("Bryson",123,"test@gmail.com",321);
    expect(testManager.Email).toBe("test@gmail.com");
  })

  test("Test Engineer Object officeNumber attribute",function(){
    const testManager = new Manager("Bryson",123,"test@gmail.com",321);
    expect(testManager.officeNumber).toBe(321);
  })