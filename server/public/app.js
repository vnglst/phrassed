import {
  html,
  render,
  Component
} from "https://unpkg.com/htm@2.1.1/preact/standalone.mjs"
// updated version at: https://unpkg.com/htm/preact/standalone.mjs

const SOURCE_LANG = "german" // TODO: from user

function Suggestions({ terms, activeTerm, handleClick, handleHover }) {
  return html`
    <div class="suggestions">
      ${terms.map(
        (term, i) => html`
          <button
            class="${activeTerm === i ? "highlighted" : ""}"
            onmouseover="${() => handleHover(i)}"
            onmousedown="${() => handleClick(i)}"
          >
            ${term}
          </button>
        `
      )}
    </ul>
  `
}

class App extends Component {
  constructor(props) {
    super(props)

    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get("q") || ""

    this.state = {
      terms: [],
      query,
      isOpen: false,
      activeTerm: -1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleResultClick = this.handleResultClick.bind(this)
    this.handleResultHover = this.handleResultHover.bind(this)
  }

  async fetchTerms({ query }) {
    const lang1 = SOURCE_LANG
    const response = await fetch(`/api/suggestions/?q=${query}&lang1=${lang1}`)
    const json = await response.json()
    return json
  }

  async handleChange(e) {
    const query = e.target.value
    this.setState({ query })
    const terms = await this.fetchTerms({ query })
    this.setState({ terms, isOpen: true })
  }

  handleFocus() {
    this.setState({ isOpen: true })
  }

  handleBlur() {
    this.setState({ isOpen: false })
  }

  handleKeyUp(e) {
    const { keyCode } = e
    const { activeTerm, terms, isOpen } = this.state
    if (terms.length <= 0) return
    if (keyCode !== 40 && keyCode !== 38 && keyCode !== 27) return

    e.preventDefault()
    let newActiveTerm = -1

    if (keyCode === 40) newActiveTerm = activeTerm + 1
    if (keyCode === 38) newActiveTerm = activeTerm - 1
    if (newActiveTerm >= terms.length) newActiveTerm = -1
    if (newActiveTerm < -1) newActiveTerm = terms.length - 1

    const newIsOpen = keyCode === 27 ? false : isOpen
    this.setState({
      activeTerm: newActiveTerm,
      isOpen: newIsOpen,
      query: terms[newActiveTerm]
    })
  }

  handleResultClick(activeTerm) {
    const query = this.state.terms[activeTerm]
    window.location.href = `/?q=${query}`
  }

  handleResultHover(activeTerm) {
    this.setState({ activeTerm })
  }

  render() {
    const { terms, query, isOpen, activeTerm } = this.state
    const showSuggestions = terms.length > 0 && isOpen

    return html`
      <form action="/" method="get">
        <span class="wrapper">
          <input
            type="text"
            id="searchbox"
            name="q"
            aria-label="Search terminology"
            autocomplete="off"
            maxlength="124"
            autocorrect="off"
            autofocus="true"
            value=${query}
            oninput=${this.handleChange}
            onfocus=${this.handleFocus}
            onblur=${this.handleBlur}
            onkeyup=${this.handleKeyUp}
          />
          ${showSuggestions &&
            html`
              <${Suggestions}
                terms=${terms}
                activeTerm=${activeTerm}
                handleClick=${this.handleResultClick}
                handleHover=${this.handleResultHover}
              />
            `}
        </span>
        <input type="submit" />
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
