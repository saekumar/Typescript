"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var getUpper = function (str) {
    return str.toUpperCase();
};
var sum = function (a, b) {
    var num = parseInt(a);
    return num + b;
};
var signUpUser = function (name, email, password) {
    var str = "Welcome ".concat(name, ", your email is ").concat(email, " and password is ").concat(password);
    return "".concat(str);
};
var arr = ['thor', 'captain', 'ironman', 'hulk'];
var checAvenger = arr.map(function (avenger) {
    return "I am ".concat(avenger);
});
console.log(checAvenger);
console.log(signUpUser('John', 'john@gmail.com', '12345'));
console.log(sum('2', 3)); // 5
console.log(addTwo(2)); // 4
console.log(getUpper('hello')); // HELLO
