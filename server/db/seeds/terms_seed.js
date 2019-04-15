const terms = [
  {
    termid: "IATE-1104363",
    language: "de",
    term: "Investition"
  },
  {
    termid: "IATE-1104363",
    language: "de",
    term: "Anlage"
  },
  {
    termid: "IATE-1104363",
    language: "de",
    term: "Kapitalanlage"
  },
  {
    termid: "IATE-1104363",
    language: "de",
    term: "Geldanlage"
  },
  {
    termid: "IATE-1104363",
    language: "en",
    term: "investment"
  },
  {
    termid: "IATE-1104363",
    language: "nl",
    term: "belegging"
  },
  {
    termid: "IATE-1104363",
    language: "nl",
    term: "investering"
  },
  {
    termid: "IATE-142004",
    language: "de",
    term: "Anlage"
  },
  {
    termid: "IATE-142004",
    language: "en",
    term: "appendix"
  },
  {
    termid: "IATE-142004",
    language: "nl",
    term: "aanhangsel"
  },
  {
    termid: "IATE-136722",
    language: "de",
    term: "Anhang"
  },
  {
    termid: "IATE-136722",
    language: "de",
    term: "Anlage"
  },
  {
    termid: "IATE-136722",
    language: "de",
    term: "Anl."
  },
  {
    termid: "IATE-136722",
    language: "de",
    term: "Anh."
  },
  {
    termid: "IATE-136722",
    language: "en",
    term: "annex"
  },
  {
    termid: "IATE-136722",
    language: "nl",
    term: "bijlage"
  }
]

exports.seed = knex => {
  return Promise.all(terms.map(e => knex("terms").insert(e)))
}
