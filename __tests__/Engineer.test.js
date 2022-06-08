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

test("Can instatiate Engineer id from constructor", ()=>{
    const id = "123"
    const emp = new Engineer(id);
    expect(emp.id).toBe(emp.id)
})

test("Can instatiate Engineer email from constructor", ()=>{
    const email = "alanarmckeel@gmail.com"
    const emp = new Engineer(email);
    expect(emp.email).toBe(emp.email)
})

// test for all methods in class
// test for all methods in class
test("Can instatiate Engineer name from getName()", ()=>{
    const name = "Alana"
    const emp = new Engineer(name);
    expect(emp.getName()).toBe(name)
})

test("Can instatiate Engineer ID from getId()", ()=>{
    const id = "123"
    const emp = new Engineer(id);
    expect(emp.getId()).toBe(emp.id)
})

test("Can instatiate Engineer email from getEmail()", ()=>{
    const email = "alanarmckeel@mgmail.com"
    const emp = new Engineer(email);
    expect(emp.getEmail()).toBe(emp.email)
})

test("Can instatiate Engineer gitHub from gitHub()", ()=>{
    const gitHub = "alanarm79"
    const emp = new Engineer(gitHub);
    expect(emp.github).toBe(emp.github)
})

test("Can instatiate Engineer role from getRole()", ()=>{
    const role = "role"
    const emp = new Engineer(role);
    expect(emp.getRole()).toBe(emp.getRole())
})