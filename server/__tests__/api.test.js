const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When querying for a term", () => {
  it("should respond with 200 ok and terms", async () => {
    const { body } = await request
      .get("/api/suggestions/?q=Anl&source=de")
      .expect("Content-Type", /json/)
      .expect(200)

    expect(body).toEqual(["Anl.", "Anlage"])
  })

  it("should contain the query term itself", async () => {
    const { body } = await request.get("/api/suggestions/?q=Anlage&source=de")
    expect(body).toEqual(["Anlage"])
  })

  it.skip("should error if source lang is missing", async () => {
    const { body } = await request
      .get("/api/suggestions/?q=Anl")
      .expect("Content-Type", /json/)
      .expect(422) // Unprocessable Entity

    // should also tell us why
    expect(body).toEqual([])
  })
})
