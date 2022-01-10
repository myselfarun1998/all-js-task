 function Mydata(name, address, phnum, age) {
    this.firstName = name;
    this.myaddress = address;
    this.ph = phnum;
     this.myage = age;
   }

  const Mydata1 = new Mydata("raj", "chennai", 953373737730, "22");
  const Mydata3 = new Mydata("danny", "coimbatore", 97366266248, "23");
  console.log(Mydata1.firstName);