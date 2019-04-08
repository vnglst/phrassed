const terms = [
  {
    termid: "IATE-1104363 ",
    language: "de",
    term: "Investition"
  },
  {
    termid: "IATE-1104363 ",
    language: "de",
    term: "Anlage"
  },
  {
    termid: "IATE-1104363 ",
    language: "de",
    term: "Kapitalanlage"
  },
  {
    termid: "IATE-1104363 ",
    language: "de",
    term: "Geldanlage"
  },
  {
    termid: "IATE-1104363 ",
    language: "en",
    term: "investment"
  },
  {
    termid: "IATE-1104363 ",
    language: "nl",
    term: "belegging"
  },
  {
    termid: "IATE-1104363 ",
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

// exports.seed = knex => {
//   return knex("terms")
//     .del()
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-0000",
//         language: "de",
//         term: "Anl."
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-0000",
//         language: "nl",
//         term: "Bijlage"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-0000",
//         language: "nl",
//         term: "Bijl."
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-1104363",
//         language: "de",
//         term: "Anlage"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-1104363",
//         language: "nl",
//         term: "belegging"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-1104363",
//         language: "nl",
//         term: "Belegg."
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-1104363",
//         language: "en",
//         term: "investment"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-2243625",
//         language: "de",
//         term: "Anlage"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-2243625",
//         language: "nl",
//         term: "installatie"
//       })
//     })
//     .then(() => {
//       return knex("terms").insert({
//         termid: "IATE-2243625",
//         language: "en",
//         term: "installation"
//       })
//     })
// }
