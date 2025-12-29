const temperature = 0;

if (temperature < 0) {
  console.log("very cold");
} else if (temperature >= 0 && temperature < 15) {
  console.log("cold!");
} else if (temperature >= 15 && temperature < 25) {
  console.log("warm");
} else {
  console.log("its hot!!");
}
