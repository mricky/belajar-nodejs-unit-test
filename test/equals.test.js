test("test toBe",()=>{
    let name = "Ricky";
    let hello = `Hello ${name}`;

    expect(hello).toBe("Hello Ricky");
});

test("test toEquals",()=>{
    let person = {id: "ricky"};

    Object.assign(person,{name: "Ricky"});

    expect(person).toEqual({id: "ricky",name: "Ricky"});
});