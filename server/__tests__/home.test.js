const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When loading the home page", () => {
  it("should respond with 200 ok", () => {
    return request.get("/").expect(200)
  })

  it("should have title containing name of app", () => {
    return request.get("/").then(response => {
      document.documentElement.innerHTML = response.text
      expect(document.title).toContain("Phrassed")
    })
  })
})

describe("When sending a query", () => {
  it("should contain the translations", async () => {
    const response = await request.get("/?q=Anlage")
    document.documentElement.innerHTML = response.text
    expect(response.text).toContain("IATE-1104363")
    expect(response.text).toContain("belegging")
  })
  it("should contain example sentence", async () => {
    const response = await request.get("/?q=Anlage")
    document.documentElement.innerHTML = response.text
    expect(response.text).toContain(
      "Ich kann dir nicht sagen ob das eine gute Anlage ist."
    )
    expect(response.text).toContain(
      "Ik kan je niet zeggen of dat een goede investering is."
    )
    expect(response.text).toContain(
      "I can&#39;t tell you if that&#39;s a good investment."
    )
  })
})
