
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleCrash=this.handleCrash.bind(this)
    this.handleSnare=this.handleSnare.bind(this)
    this.handleKeyPress-this.handleKeyPress.bind(this)
  }

  

  handleCrash() {
    document.getElementById("crash-aud").load()
    document.getElementById("crash-aud").play()
    }
  handleSnare() {
    document.getElementById("snare-aud").load()
    document.getElementById("snare-aud").play()
    }
  

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(e) {
    if (e.key==="e") { 
    document.getElementById("crash-aud").load()
    document.getElementById("crash-aud").play()
    }
    else if(e.key==="z") { 
      document.getElementById("snare-aud").load()
      document.getElementById("snare-aud").play()
      }
  }


  render() {
    return (
      <div>
      <h1>Test Button</h1>
      <button id="crash-butt" onClick = {this.handleCrash}>
        Crash
      </button>
      <audio id="crash-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
      <button id="snare-butt" onClick = {this.handleSnare}>
        Snare
      </button>
      <audio id="snare-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">

      </audio>
      </div>
      );
    }
  }



























ReactDOM.render(<App />, document.getElementById("app"))