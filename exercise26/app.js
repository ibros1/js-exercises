// function delayBlocking() {
//   alert("this is a blocking");

//   return (user = { id: 1, name: "ibro", age: 23 });
// }
// console.log("dely started")
// console.log(delayBlocking());

function nonDelayBlocking(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "ibro",
      age: 23,
    };
    return callback(user);
  }, 3000);
}

console.log("non block started!");
nonDelayBlocking(function (user) {
  console.log(user);
});
