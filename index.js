
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
      <div>
      <h1>Test Button</h1>
    <button className= "drump-pad" id="openhh" onClick = {this.handleOpenhh}>
        Open Hi-hat
      </button>
      <audio id="openhh-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3">
    </audio>
      <button className= "drump-pad" id="crash" onClick = {this.handleCrash}>
        Crash
      </button>
      <audio id="crash-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
    <button className= "drump-pad" id="ride" onClick = {this.handleRide}>
        Ride
      </button>
      <audio id="ride-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/50[kb]hismashride.wav.mp3">
    </audio>
      <button className= "drump-pad" id="closedhh" onClick = {this.handleClosedhh}>
        Closed Hi-hat
      </button>
      <audio id="closedhh-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3">
    </audio>
    <button className= "drump-pad" id="tom1" onClick = {this.handleTom1}>
        Tom 1
      </button>
      <audio id="tom1-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3">
    </audio>
     <button className= "drump-pad" id="tom2" onClick = {this.handleTom2}>
        Tom 2
      </button>
      <audio id="tom2-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3">
    </audio>
      <button className= "drump-pad" id="snare" onClick = {this.handleSnare}>
        Snare
      </button>
      <audio id="snare-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">
      </audio>
      <button className= "drump-pad" id="bass" onClick = {this.handleBass}>
        Bass
      </button>
      <audio id="bass-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3">
      </audio>
      <button className= "drump-pad" id="floortom" onClick = {this.handleFloorTom}>
        Floor Tom
      </button>
      <audio id="floortom-aud" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3">
      </audio>
      </div>
      );
    }
  }



























ReactDOM.render(<App />, document.getElementById("app"))