const Engineer = require("../Lib/Engineer");


test("Test Engineer Object",function(){
  const testEngineer = new Engineer();
  expect(typeof(testEngineer)).toBe("object");
})

test("Test Engineer Object name attribute",function(){
    const testEngineer = new Engineer("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testEngineer.name).toBe("Bryson");
  })