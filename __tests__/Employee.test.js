const Employee = require("../lib/Employee");

test("Can instatiate Employee instance", ()=>{
    const emp = new Employee();
    expect(typeof(emp)).toBe('object')
})

// test for all constructor argurments
test("Can instatiate Employee name from constructor", ()=>{
    const name = "Alana"
    const emp = new Employee(name);
    expect(emp.name).toBe(name)
})

// test for all methods in class
test("Can instatiate Employee name from getName()", ()=>{
    const name = "Alana"
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name)
})