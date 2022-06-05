const Manager = require("../lib/Employee");

test("Can instatiate Manager instance", ()=>{
    const emp = new Manager();
    expect(typeof(emp)).toBe('object')
})

// test for all constructor argurments
test("Can instatiate Manager name from constructor", ()=>{
    const name = "Alana"
    const emp = new Manager(name);
    expect(emp.name).toBe(name)
})

// test for all methods in class
test("Can instatiate Manager name from getName()", ()=>{
    const name = "Alana"
    const emp = new Manager(name);
    expect(emp.getName()).toBe(name)
})