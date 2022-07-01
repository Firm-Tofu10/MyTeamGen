const Intern = require("../Lib/Intern");


test("Test Intern Object",function(){
  const testIntern = new Intern();
  expect(typeof(testIntern)).toBe("object");
})

test("Test Intern Object name attribute",function(){
    const testIntern = new Intern("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testIntern.name).toBe("Bryson");
  })