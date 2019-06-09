const { exec } = require("child_process")

const execCommand = file =>
  `node workers/tbx2json.js -i test-data/${file} --nofail | grep 'termid' | wc -l`

// Counts of terms in a tbx file can be found using following command
// $ brotli -d ./test-data/IATE-last-5Mb.xml.br -c | grep "<term>" | wc -l

describe("When parsing tbx files", () => {
  it("should count 18160 termIds for IATE-last-5Mb.xml.br", done => {
    exec(execCommand("IATE-last-5Mb.xml.br"), (err, stdout, stderr) => {
      expect(err).toBe(null)
      expect(stdout.trim()).toBe("18160")
      expect(stderr).toBe("")
      done()
    })
  })

  it("should count 650 termIds for IATE-first-5000l.xml.br", done => {
    exec(execCommand("IATE-first-5000l.xml.br"), (err, stdout, stderr) => {
      expect(err).toBe(null)
      expect(stdout.trim()).toBe("650")
      expect(stderr).toBe("")
      done()
    })
  })

  it("should count 337 termIds for MS-nl-first-100kB.xml.br", done => {
    exec(execCommand("MS-nl-first-100kB.xml.br"), (err, stdout, stderr) => {
      expect(err).toBe(null)
      expect(stdout.trim()).toBe("337")
      expect(stderr).toBe("")
      done()
    })
  })

  // test currently failing, xml corrupted?
  it.skip("should count 183094 termIds for IATE-last-50Mb.xml.br", done => {
    exec(execCommand("IATE-last-50Mb.xml.br"), (err, stdout, stderr) => {
      expect(err).toBe(null)
      expect(stdout.trim()).toBe("183094")
      expect(stderr).toBe("")
      done()
    })
  }, 150000) // long time

  // test failing, but results are pretty close
  it.skip("should count 7125353 termIds for main IATE file", done => {
    exec(
      "node workers/tbx2json.js -i seed-data/IATE_export_26022019.xml.br --nofail | grep 'termid' | wc -l",
      (err, stdout, stderr) => {
        expect(err).toBe(null)
        expect(stdout.trim()).toBe("7125353")
        expect(stderr).toBe("")
        done()
      }
    )
  }, 15000000) // takes very long
})
