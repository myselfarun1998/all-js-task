// ------------------------------------------SALARY TASK----------------------------------------------

let employee = [
  {
    empname: "raju",
    id: 1029,
    address: "chennai",
    salary: 1222,
  },
  {
    empname: "dhoni",
    id: 1028,
    address: {
      place: "coimbatore",
    },
    salary: 15220,
  },
  {
    empname: "rahul",
    id: 1098,
    address: "madurai",
    salary: 16220,
  },
];

// ------------------------------------------MAP TASK----------------------------------------------

let mysalary = employee.map(function (emp) {
  console.log(emp.salary + emp.salary * (10 / 100));
});

// ------------------------------------------FOREACH TASK----------------------------------------------
employee.forEach(function (myid) {
  /// forEach
  console.log(`${myid.id} my id`);
});
