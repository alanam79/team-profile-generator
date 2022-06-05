const Engineer = require("../lib/Employee");

test("Can instatiate Engineer instance", ()=>{
    const emp = new Engineer();
    expect(typeof(emp)).toBe('object')
})

// test for all constructor argurments
test("Can instatiate Engineer name from constructor", ()=>{
    const name = "Alana"
    const emp = new Engineer(name);
    expect(emp.name).toBe(name)
})

// test for all methods in class
test("Can instatiate Engineer name from getName()", ()=>{
    const name = "Alana"
    const emp = new Engineer(name);
    expect(emp.getName()).toBe(name)
})