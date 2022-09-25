const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();

class User {
  constructor(password, email, phoneNumber, lastName, firstName, _id) {
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.lastName = lastName;
    this.firstName = firstName;
    this._id = _id;
  }

}

class Company {
  constructor (_id, name, address) {
    this._id = _id;
    this.name = name;
    this.address = address;
    /* address is an object with the following keys:
      -street
      -city
      -state
      -zipCode
      -country
    */
  }

}

function createUser(){
  const password = faker.lorem.word();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.number('510-###-####');
  const lastName = faker.name.lastName();
  const firstName = faker.name.firstName();
  const id = faker.database.mongodbObjectId();

  const user = new User(password, email, phoneNumber, lastName, firstName, id);
  return user;
}

function createCompany() {
  id = faker.database.mongodbObjectId();
  name = faker.company.name();
  address = {
    street: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode() ,
    country: faker.address.country()
  };
  const company = new Company(id, name, address);
  return company;
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/test", (req, res) => {
  var retvalue;

  retvalue=createCompany();
  console.log(retvalue);

  res.send(retvalue);
});

app.get("/api/user/new", (req, res) => {
  res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();

  const response = {
    company: company,
    user: user,
  }

  res.send(response);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

