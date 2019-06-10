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

describe("When requesting stats", () => {
  it("should respond with 200 ok and stats", async () => {
    const { body } = await request
      .get("/api/stats/")
      .expect("Content-Type", /json/)
      .expect(200)

    expect(body.totalTerms).toEqual([{ count: "18176" }])
    expect(body.totalEntries).toEqual([{ count: "1742" }])

    const nlCounts = body.langCounts.find(el => el.language === "nl")
    expect(nlCounts).toEqual({ language: "nl", count: "785" })

    const deCounts = body.langCounts.find(el => el.language === "de")
    expect(deCounts).toEqual({ language: "de", count: "1080" })
  })
})
