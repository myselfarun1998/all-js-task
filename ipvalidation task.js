let myip = '225.153.123.123';
let newip1 = myip.split('.');
if (newip1.slice(0, 1) && newip1.slice(0, 1) && newip1.slice(1, 2) <= 225) {
  console.log('successfully network connected');
  newip1.toString();
  let member = newip1.join('.');
  console.log(`And your ip is ${member}`);
} else {
  console.log('Your Dynamic IP is not connected Please Contact Your IT Team');
}
