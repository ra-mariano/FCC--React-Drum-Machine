
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleCrash=this.handleCrash.bind(this)
    this.handleSnare=this.handleSnare.bind(this)
    this.handleClosedhh=this.handleClosedhh.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
  }
  handleClosedhh() {
    document.getElementById("closedhh-aud").load()
    document.getElementById("closedhh-aud").play()
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
    switch (e.key) {
    case "e": 
    document.getElementById("crash-aud").load()
    document.getElementById("crash-aud").play()
    break;
    case "z":  
    document.getElementById("snare-aud").load()
    document.getElementById("snare-aud").play()
    break;
    case "a":  
    document.getElementById("closedhh-aud").load()
    document.getElementById("closedhh-aud").play()
    break;
  }
}



render() {
  return (
      <div>
      <h1>Test Button</h1>
      <button className= "drump-pad" id="crash" onClick = {this.handleCrash}>
        Crash
      </button>
      <audio id="crash-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
      <button className= "drump-pad" id="snare" onClick = {this.handleSnare}>
        Snare
      </button>
      <audio id="snare-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">
      </audio>
      <button className= "drump-pad" id="closedhh" onClick = {this.handleClosedhh}>
        Closed Hi-hat
      </button>
      <audio id="closedhh-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3">
    </audio>
      </div>
      );
    }
  }



























ReactDOM.render(<App />, document.getElementById("app"))