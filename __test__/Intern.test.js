const Intern = require("../Lib/Intern");


test("Test Intern Object",function(){
  const testIntern = new Intern();
  expect(typeof(testIntern)).toBe("object");
})

test("Test Intern Object name attribute",function(){
    const testIntern = new Intern("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testIntern.name).toBe("Bryson");
  })

  test("Test Intern Object ID attribute",function(){
    const testIntern = new Intern("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testIntern.id).toBe(123);
  })

  test("Test Intern Object Email attribute",function(){
    const testIntern = new Intern("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testIntern.email).toBe("test@gmail.com");
  })

  test("Test Intern Object schoolName attribute",function(){
    const testIntern = new Intern("Bryson",123,"test@gmail.com","schoolName");
    expect(testIntern.schoolName).toBe("schoolName");
  })
  