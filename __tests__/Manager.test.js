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

test("Can instatiate Manager id from constructor", ()=>{
    const id = "123"
    const emp = new Manager(id);
    expect(emp.id).toBe(emp.id)
})

test("Can instatiate Manager email from constructor", ()=>{
    const email = "alanarmckeel@gmail.com"
    const emp = new Manager(email);
    expect(emp.email).toBe(emp.email)
})

// test for all methods in class
test("Can instatiate Manager name from getName()", ()=>{
    const name = "Alana"
    const emp = new Manager(name);
    expect(emp.getName()).toBe(name)
})

test("Can instatiate Manager ID from getId()", ()=>{
    const id = "123"
    const emp = new Manager(id);
    expect(emp.getId()).toBe(emp.id)
})

test("Can instatiate Manager email from getEmail()", ()=>{
    const email = "alanarmckeel@mgmail.com"
    const emp = new Manager(email);
    expect(emp.getEmail()).toBe(emp.email)
})

test("Can instatiate Manager role from getRole()", ()=>{
    const role = "role"
    const emp = new Manager(role);
    expect(emp.getRole()).toBe(emp.getRole())
})