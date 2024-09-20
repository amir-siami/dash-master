export async function getData(page: number, limit: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      options
    );

    if (!response.ok) throw new Error("Failed to fetch posts");

    return response.json();
  } catch (err) {
    console.log(err);
  }
}
