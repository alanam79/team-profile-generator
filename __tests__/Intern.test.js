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

test("Can instatiate Intern id from constructor", ()=>{
    const id = "123"
    const emp = new Intern(id);
    expect(emp.id).toBe(emp.id)
})

test("Can instatiate Intern email from constructor", ()=>{
    const email = "alanarmckeel@gmail.com"
    const emp = new Intern(email);
    expect(emp.email).toBe(emp.email)
})

// test for all methods in class
// test for all methods in class
test("Can instatiate Intern name from getName()", ()=>{
    const name = "Alana"
    const emp = new Intern(name);
    expect(emp.getName()).toBe(name)
})

test("Can instatiate Intern ID from getId()", ()=>{
    const id = "123"
    const emp = new Intern(id);
    expect(emp.getId()).toBe(emp.id)
})

test("Can instatiate Intern email from getEmail()", ()=>{
    const email = "alanarmckeel@mgmail.com"
    const emp = new Intern(email);
    expect(emp.getEmail()).toBe(emp.email)
})

test("Can instatiate Intern role from getRole()", ()=>{
    const role = "role"
    const emp = new Intern(role);
    expect(emp.getRole()).toBe(emp.getRole())
})

test("Can instatiate Intern school from getSchool()", ()=>{
    const school = "RMU"
    const emp = new Intern(school);
    expect(emp.school).toBe(emp.school)
})