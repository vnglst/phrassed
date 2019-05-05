const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When loading the page for an id", () => {
  it("should respond with 200 ok", () => {
    return request.get("/id/IATE-136722").expect(200)
  })

  it("should contain translations for that id", async () => {
    const { text } = await request.get("/id/IATE-136722")
    expect(text).toContain("IATE-136722")
    expect(text).toContain("annex")
    expect(text).toContain("bijlage")
  })
})

describe("When loading the ids page", () => {
  it("should respond with 200 ok", () => {
    return request.get("/id/").expect(200)
  })

  it("should contain all ids", async () => {
    const { text } = await request.get("/id/")
    expect(text).toContain("IATE-136722")
    expect(text).toContain("IATE-1104363")
    expect(text).toContain("IATE-142004")
  })
})
