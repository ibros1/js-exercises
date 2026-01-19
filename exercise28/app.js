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

const displayUser = async () => {
  try {
    const message = await getData();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

displayUser();
