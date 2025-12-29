const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "BuilderLand" },
  { name: "Alice", age: 35, city: "Chocolate Factory" },
];

for (const key in people) {
  console.log(people[key]);
}

for (let p of people) {
  console.log(p);
}
