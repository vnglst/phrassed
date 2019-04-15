const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When loading the home page", () => {
  it("should respond with 200 ok", () => {
    return request.get("/").expect(200)
  })

  it("should have title containing name of app", async () => {
    const response = await request.get("/")
    document.documentElement.innerHTML = response.text

    expect(document.title).toContain("Phrassed")
  })
})

describe("When sending a query", () => {
  it("should contain the translations", async () => {
    const { text } = await request.get("/?q=Anlage")

    expect(text).toContain("IATE-1104363")
    expect(text).toContain("belegging")
  })

  it("should contain example sentence", async () => {
    const { text } = await request.get("/?q=Anlage")

    expect(text).toContain(
      "Ich kann dir nicht sagen ob das eine gute Anlage ist."
    )
    expect(text).toContain(
      "Ik kan je niet zeggen of dat een goede investering is."
    )
    expect(text).toContain(
      "I can&#39;t tell you if that&#39;s a good investment."
    )
  })
})
