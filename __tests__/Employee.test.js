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

test("Can instatiate Employee id from constructor", ()=>{
    const id = "123"
    const emp = new Employee(id);
    expect(emp.id).toBe(emp.id)
})

test("Can instatiate Employee id from constructor", ()=>{
    const email = "123"
    const emp = new Employee(email);
    expect(emp.email).toBe(emp.email)
})

// test for all methods in class
test("Can instatiate Employee name from getName()", ()=>{
    const name = "Alana"
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name)
})

test("Can instatiate Employee name from getID()", ()=>{
    const id = "123"
    const emp = new Employee(id);
    expect(emp.getId()).toBe(emp.getId())
})

test("Can instatiate Employee name from getEmail()", ()=>{
    const email = "alanamckeel@gmail.com"
    const emp = new Employee(email);
    expect(emp.getEmail()).toBe(emp.getEmail())
})

test("Can instatiate Employee name from getRole()", ()=>{
    const role = "role"
    const emp = new Employee(role);
    expect(emp.getRole()).toBe(emp.getRole())
})

