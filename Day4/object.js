
const Person = {
  name: "Dimka",
  age: 50,
  email: " dimka.com",
  gender: "Male",
  password: 12345,
  favoriteColor: "Black",
  details: function () {
    console.log(`My name is ${this.name}}`);
  },
  getEmail: function () {
    console.log(`My email address is ${this.email}`);
  },
  getPassword: function () {
    console.log(`My Password is ${this.password}`);
  },
  checkPasword: function (user_input) {
    if (user_input === this.password) {
      console.log("Correct Password");
    } else {
      console.log("incorrect password");
    }
  },
};


const Phone = {
  name: "Redmi",
  color: "Black",
  Ram: "8gb",
  processorSpeed: "3.10",
  batteryCapacity: "3000MAh",
  phone_brand: ["Redmi", "itel", "Infix"],
  version :{
    version1: "2018",
    version2: "2019"
  }
};

let phone = [
  "Redmi",
  "Black",
  "8gb",
  {
    name: "john doe",
    tribe: "England",
  },
  {
    name: "Emma",
    tribe: "North Korea",
  },
];
