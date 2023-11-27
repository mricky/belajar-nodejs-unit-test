test("string", () => {
    const name = "Mochammad Ricky";
    const reg = "/awan";
    expect(name).toBe("Mochammad Ricky");
    expect(reg).toMatch(/awan/);
});