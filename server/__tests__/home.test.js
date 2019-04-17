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
      'Die <span class="highlight">Anlage</span> muss transportiert werden.</div>'
    )
    expect(text).toContain(
      'Ik kan je niet zeggen of dat een goede <span class="highlight">investering</span> is.'
    )
  })
})
