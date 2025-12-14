let car = {
  make: "Toyota",
  model: "Noah",
  year: 2020,

  start: function () {
    console.log(`the ${this.model} has started`);
  },
};

car.start();
