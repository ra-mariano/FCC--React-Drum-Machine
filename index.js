
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenhh=this.handleOpenhh.bind(this)
    this.handleCrash=this.handleCrash.bind(this)
    this.handleRide=this.handleRide.bind(this)
    this.handleClosedhh=this.handleClosedhh.bind(this)
    this.handleTom1=this.handleTom1.bind(this)
    this.handleTom2=this.handleTom2.bind(this)
    this.handleSnare=this.handleSnare.bind(this)
    this.handleBass=this.handleBass.bind(this)
    this.handleFloorTom=this.handleFloorTom.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
  }
  handleOpenhh() {
    document.getElementById("openhh-aud").load()
    document.getElementById("openhh-aud").play()
  }
  handleCrash() {
    document.getElementById("crash-aud").load()
    document.getElementById("crash-aud").play()
  }
  handleRide() {
    document.getElementById("ride-aud").load()
    document.getElementById("ride-aud").play()
  }
  handleClosedhh() {
    document.getElementById("closedhh-aud").load()
    document.getElementById("closedhh-aud").play()
  }
  handleTom1() {
    document.getElementById("tom1-aud").load()
    document.getElementById("tom1-aud").play()
  }
  handleTom2() {
    document.getElementById("tom2-aud").load()
    document.getElementById("tom2-aud").play()
  }
  handleSnare() {
    document.getElementById("snare-aud").load()
    document.getElementById("snare-aud").play()
  }
  handleBass() {
    document.getElementById("bass-aud").load()
    document.getElementById("bass-aud").play()
  }
  handleFloorTom() {
    document.getElementById("floortom-aud").load()
    document.getElementById("floortom-aud").play()
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  
  handleKeyPress(e) {
    switch (e.key) {
    case "q":
    document.getElementById("openhh-aud").load()
    document.getElementById("openhh-aud").play()
    break;  
    case "w": 
    document.getElementById("crash-aud").load()
    document.getElementById("crash-aud").play()
    break;
    case "e": 
    document.getElementById("ride-aud").load()
    document.getElementById("ride-aud").play()
    break;
    case "a":  
    document.getElementById("closedhh-aud").load()
    document.getElementById("closedhh-aud").play()
    break;
    case "s":  
    document.getElementById("tom1-aud").load()
    document.getElementById("tom1-aud").play()
    break;
    case "d":  
    document.getElementById("tom2-aud").load()
    document.getElementById("tom2-aud").play()
    break;
    case "z":  
    document.getElementById("snare-aud").load()
    document.getElementById("snare-aud").play()
    break;
    case "x":  
    document.getElementById("bass-aud").load()
    document.getElementById("bass-aud").play()
    break;
    case "c":  
    document.getElementById("floortom-aud").load()
    document.getElementById("floortom-aud").play()
    break;
  }
}


render() {
  return (
      <div id="container">
        <div id="drum-machine">
      <h1>Test Button</h1>
    <button className= "drum-pad" id="openhh" onClick = {this.handleOpenhh}>
        Q
        <audio className="clip" id="openhh-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3">
    </audio>
      </button>
     
      <button className= "drum-pad" id="crash" onClick = {this.handleCrash}>
        W
      </button>
      <audio className="clip" id="crash-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
    <button className= "drum-pad" id="ride" onClick = {this.handleRide}>
        E
      </button>
      <audio className="clip" id="ride-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/50[kb]hismashride.wav.mp3">
    </audio>
      <button className= "drum-pad" id="closedhh" onClick = {this.handleClosedhh}>
        A
      </button>
      <audio className="clip" id="closedhh-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3">
    </audio>
    <button className= "drum-pad" id="tom1" onClick = {this.handleTom1}>
        S
      </button>
      <audio className="clip" id="tom1-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3">
    </audio>
     <button className= "drum-pad" id="tom2" onClick = {this.handleTom2}>
        D
      </button>
      <audio className="clip" id="tom2-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3">
    </audio>
      <button className= "drum-pad" id="snare" onClick = {this.handleSnare}>
        Z
      </button>
      <audio className="clip" id="snare-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">
      </audio>
      <button className= "drum-pad" id="bass" onClick = {this.handleBass}>
        X
      </button>
      <audio className="clip" id="bass-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3">
      </audio>
      <button className= "drum-pad" id="floortom" onClick = {this.handleFloorTom}>
        C
      </button>
      <audio className="clip" id="floortom-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3">
      </audio>
      <div id="display">TEST DISPLAY</div>
      </div>
      </div>
     
      );
    }
  }



























ReactDOM.render(<App />, document.getElementById("app"))