async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();
