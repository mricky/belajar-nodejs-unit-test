test("array simple", () => {
    const names = ["mochammad", "ricky", "susanto"];
    expect(names).toEqual(["mochammad", "ricky", "susanto"]);
    expect(names).toContain("ricky");
});

test("array object", () => {
    const persons = [
        {
            name: "Ricky"
        },
        {
            name: "Madrico"
        }
    ];
    expect(persons).toContainEqual({
        name: "Ricky"
    });
});