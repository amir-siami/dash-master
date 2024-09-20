async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function getPosts() {
  const data = await getData();
  return data;
}
