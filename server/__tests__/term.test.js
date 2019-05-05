const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When loading the page for a term", () => {
  it("should respond with 200 ok", () => {
    return request.get("/german-dutch/Anlage").expect(200)
  })

  it("should contain term and translations", async () => {
    const { text } = await request.get("/german-dutch/Anlage")

    expect(text).toContain("Anlage")
    expect(text).toContain("belegging")
    expect(text).toContain("bijlage")
  })

  it("should contain example sentence", async () => {
    const { text } = await request.get("/german-dutch/Anlage")

    expect(text).toContain(
      'Die <span class="highlight">Anlage</span> muss transportiert werden.</div>'
    )
    expect(text).toContain(
      'Ik kan je niet zeggen of dat een goede <span class="highlight">investering</span> is.'
    )
  })
})

describe("When loading page with all terms", () => {
  it("should respond with 200 ok", () => {
    return request.get("/german-dutch/").expect(200)
  })

  it("should contain all terms", async () => {
    const { text } = await request.get("/german-dutch/")

    expect(text).toContain("Geldanlage")
    expect(text).toContain("Investition")
    expect(text).toContain("Kapitalanlage")
  })
})
