export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Salah") {
        throw new MyException("Ups my exceptions happens");
    } else {
        return "OK";
    }
};