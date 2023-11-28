import { callMe,MyException } from "../src/exception";

test("exception",()=>{
    expect(()=> callMe("Salah")).toThrow();
    expect(()=> callMe("Salah")).toThrow(MyException);
    expect(()=> callMe("Salah")).toThrow("Ups my exceptions happens");
});