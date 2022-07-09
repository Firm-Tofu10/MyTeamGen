const Engineer = require("../Lib/Engineer");


test("Test Engineer Object",function(){
  const testEngineer = new Engineer();
  expect(typeof(testEngineer)).toBe("object");
})

test("Test Engineer Object name attribute",function(){
    const testEngineer = new Engineer("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testEngineer.name).toBe("Bryson");
  })

  test("Test Engineer Object ID attribute",function(){
    const testEngineer = new Engineer("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testEngineer.id).toBe(123);
  })

  test("Test Engineer Object Email attribute",function(){
    const testEngineer = new Engineer("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testEngineer.email).toBe("test@gmail.com");
  })

  test("Test Engineer Object github attribute",function(){
    const testEngineer = new Engineer("Bryson",123,"test@gmail.com","Firm-Tofu10");
    expect(testEngineer.github).toBe("Firm-Tofu10");
  })