import { getData } from "./getPosts";

// Mock the fetch function
global.fetch = jest.fn();

describe("getData", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
    jest.spyOn(console, "log").mockImplementation(() => {}); // Mock console.log
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore console.log after each test
  });

  it("fetches successfully from the API", async () => {
    // Mock a successful response
    const mockResponse = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await getData(1, 2);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=2",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
  });

  it("handles errors when fetching fails", async () => {
    // Mock a failed response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found", // Optional: provide a status text
    });

    await expect(getData(1, 2)).rejects.toThrow(
      "Failed to fetch posts: Not Found"
    );
    expect(console.log).toHaveBeenCalledWith(expect.any(Error)); // Check if the error was logged
  });
});
