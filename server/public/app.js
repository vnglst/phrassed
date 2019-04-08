import {
  html,
  render,
  Component
} from "https://unpkg.com/htm@2.1.1/preact/standalone.mjs"
// updated version at: https://unpkg.com/htm/preact/standalone.mjs

function Suggestions({ terms }) {
  return html`
    <ul class="suggestions">
      ${terms.map(
        term => html`
          <li>${term.de}</li>
          <li>${term.nl}</li>
          <li>${term.en}</li>
        `
      )}
    </ul>
  `
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terms: [],
      query: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async fetchTerms(query) {
    // fake query
    console.log("fake query", query)
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [
      {
        de: "Anlage",
        nl: "installatie",
        en: "installation",
        sourceId: "1234"
      }
    ]
  }

  async handleChange(e) {
    const query = e.target.value
    this.setState({ query })
    const terms = await this.fetchTerms(query)
    this.setState({ terms })
  }

  render() {
    return html`
      <form action="" method="get">
        <label for="site-search">Search all terminology:</label>
        <input
          type="text"
          id="searchbox"
          name="q"
          value=${this.state.query}
          aria-label="Search all terminology"
          onInput=${this.handleChange}
        />
        <input type="submit" />
        <${Suggestions} terms=${this.state.terms} />
      </form>
    `
  }
}

render(
  html`
    <${App} />
  `,
  document.getElementById("reacthook")
)
