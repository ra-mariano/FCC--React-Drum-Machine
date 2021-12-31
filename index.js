
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick=this.handleClick.bind(this)
    this.handleKeyPress-this.handleKeyPress.bind(this)
  }

  

  handleClick() {
    document.getElementById("crash").load()
    document.getElementById("crash").play()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(e) {
    if (e.key==="a") { 
    document.getElementById("crash").load()
    document.getElementById("crash").play()
    }
    return
  }


  render() {
    return (
      <div>
      <h1>Test Button</h1>
      <button onClick = {this.handleClick}>
        Click to play drum sound
      </button>
      <audio id="crash" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">

    </audio>
      </div>
      );
    }
  }



























ReactDOM.render(<App />, document.getElementById("app"))