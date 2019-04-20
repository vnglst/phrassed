const { addHighlights } = require("../../helpers")

describe("#addHighlights", () => {
  it("should add spans with class highlight to terms", () => {
    const input = {
      l1: "german",
      l2: "dutch",
      phrases: [
        {
          nl: "Dit is een voorbeeld",
          de: "Dies ist ein Beispiel"
        }
      ],
      terms: [{ term: "voorbeeld" }, { term: "is" }],
      query: "Beispiel"
    }

    const output = addHighlights(input)

    expect(output).toEqual([
      {
        de: 'Dies ist ein <span class="highlight">Beispiel</span>',
        nl:
          'Dit <span class="highlight">is</span> een <span class="highlight">voorbeeld</span>'
      }
    ])
  })
})
