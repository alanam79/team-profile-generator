const Intern = require("../lib/Employee");

test("Can instatiate Intern instance", ()=>{
    const emp = new Intern();
    expect(typeof(emp)).toBe('object')
})

// test for all constructor argurments
test("Can instatiate Intern name from constructor", ()=>{
    const name = "Alana"
    const emp = new Intern(name);
    expect(emp.name).toBe(name)
})

// test for all methods in class
test("Can instatiate Intern name from getName()", ()=>{
    const name = "Alana"
    const emp = new Intern(name);
    expect(emp.getName()).toBe(name)
})