import request from "supertest";

const baseUrl = "https://jsonplaceholder.typicode.com/";

describe("Posts endpoint", () => {
  it("should return a 200 status code when fetching 'posts/1' ", async () => {
    // Write your code bellow

    expect(false).toBe(true);
  });

  it("should get back the updated post after performing an update to 'posts/1'", async () => {
    const updatedPost = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    // Write your code bellow

    expect(false).toBe(true);
  });

  it("should have 10 unique users owning all the posts", async () => {
    const response = await request(baseUrl)
      .get('posts/');
    // Write your code bellow

    expect(false).toBe(true);
  });

  it("should have 10 posts per user", async () => {
    const response = await request(baseUrl)
      .get('posts/');
    // Write your code bellow

    expect(false).toBe(true);
  });

  it("should be able to create a new post and the returned id should be 101", async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 7
    }
    // Write your code bellow

    expect(false).toBe(true);
  });
});
