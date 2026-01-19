const getData = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = true;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Data fetched successfully!");
      } else {
        reject("failed to fetch data!");
      }
    }, 1000);
  });
};

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
