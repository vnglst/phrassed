const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("When loading the page for term Anlage", () => {
  it("should respond with 200 ok", () => {
    return request.get("/german-dutch/Anlage").expect(200)
  })

  it("should contain term and translations from seed", async () => {
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

describe("When loading the page for term 'kleinschalige corruptie'", () => {
  it("should respond with 200 ok", () => {
    return request.get("/dutch-german/kleinschalige_corruptie").expect(200)
  })

  it("should find term page", async () => {
    const { text } = await request.get("/dutch-german/kleinschalige_corruptie")
    expect(text).toContain("kleinschalige corruptie")
  })

  it("should contain German translations", async () => {
    const { text } = await request.get("/dutch-german/kleinschalige_corruptie")
    expect(text).toContain("Kleinkorruption")
    expect(text).toContain("IATE-3555954")
  })
})

describe("When loading page with all terms", () => {
  it("should respond with 200 ok", () => {
    return request.get("/german-dutch/").expect(200)
  })

  it("should contain heading", async () => {
    const { text } = await request.get("/german-dutch/")
    expect(text).toContain("de terms with nl translations")
  })
})
