
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

this.state ={
  drumpart: "thedrumpart"
}

  }
  handleOpenhh() {
    document.getElementById("Q").load()
    document.getElementById("Q").play()
    this.setState({
      drumpart: "Open Hi-Hat"
    })
  }
  handleCrash() {
    document.getElementById("W").load()
    document.getElementById("W").play()
    this.setState({
      drumpart: "Crash"
    })
  }
  handleRide() {
    document.getElementById("E").load()
    document.getElementById("E").play()
    this.setState({
      drumpart: "Ride"
    })
  }
  handleClosedhh() {
    document.getElementById("A").load()
    document.getElementById("A").play()
    this.setState({
      drumpart: "Closed Hi-Hat"
    })
  }
  handleTom1() {
    document.getElementById("S").load()
    document.getElementById("S").play()
    this.setState({
      drumpart: "High Tom"
    })
  }
  handleTom2() {
    document.getElementById("D").load()
    document.getElementById("D").play()
    this.setState({
      drumpart: "Low Tom"
    })
  }
  handleSnare() {
    document.getElementById("Z").load()
    document.getElementById("Z").play()
    this.setState({
      drumpart: "Snare"
    })
  }
  handleBass() {
    document.getElementById("X").load()
    document.getElementById("X").play()
    this.setState({
      drumpart: "Bass"
    })
  }
  handleFloorTom() {
    document.getElementById("C").load()
    document.getElementById("C").play()
    this.setState({
      drumpart: "Floor Tom"
    })
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  
  handleKeyPress(e) {
    switch (e.key) {
    case "q":
    document.getElementById("Q").load()
    document.getElementById("Q").play()
    this.setState({
      drumpart: "Open Hi-Hat"
    })
    break; 
    case "w": 
    document.getElementById("W").load()
    document.getElementById("W").play()
    this.setState({
      drumpart: "Crash"
    })
    break;
    case "e": 
    document.getElementById("E").load()
    document.getElementById("E").play()
    this.setState({
      drumpart: "Ride"
    })
    break;
    case "a":  
    document.getElementById("A").load()
    document.getElementById("A").play()
    this.setState({
      drumpart: "Closed Hi-Hat"
    })
    break;
    case "s":  
    document.getElementById("S").load()
    document.getElementById("S").play()
    this.setState({
      drumpart: "High Tom"
    })
    break;
    case "d":  
    document.getElementById("D").load()
    document.getElementById("D").play()
    this.setState({
      drumpart: "Low Tom"
    })
    break;
    case "z":  
    document.getElementById("Z").load()
    document.getElementById("Z").play()
    this.setState({
      drumpart: "Snare"
    })
    break;
    case "x":  
    document.getElementById("X").load()
    document.getElementById("X").play()
    this.setState({
      drumpart: "Bass"
    })
    break;
    case "c":  
    document.getElementById("C").load()
    document.getElementById("C").play()
    this.setState({
      drumpart: "Floor Tom"
    })
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
        <audio className="clip" id="Q" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3">
    </audio>
      </button>
     
      <button className= "drum-pad" id="crash" onClick = {this.handleCrash}>
        W
      <audio className="clip" id="W" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
      </button>
    <button className= "drum-pad" id="ride" onClick = {this.handleRide}>
        E
      <audio className="clip" id="E" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/50[kb]hismashride.wav.mp3">
    </audio>
      </button>
      <button className= "drum-pad" id="closedhh" onClick = {this.handleClosedhh}>
        A
      <audio className="clip" id="A" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3">
    </audio>
      </button>
    <button className= "drum-pad" id="tom1" onClick = {this.handleTom1}>
        S
      <audio className="clip" id="S" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3">
    </audio>
      </button>
     <button className= "drum-pad" id="tom2" onClick = {this.handleTom2}>
        D
      <audio className="clip" id="D" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3">
    </audio>
      </button>
      <button className= "drum-pad" id="snare" onClick = {this.handleSnare}>
        Z
      <audio className="clip" id="Z" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">
      </audio>
      </button>
      <button className= "drum-pad" id="bass" onClick = {this.handleBass}>
        X
      <audio className="clip" id="X" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3">
      </audio>
      </button>
      <button className= "drum-pad" id="floortom" onClick = {this.handleFloorTom}>
        C
      <audio className="clip" id="C" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3">
      </audio>
      </button>
      <div id="display">{this.state.drumpart}</div>
      </div>
      </div>
     
      );
    }
  }



ReactDOM.render(<App />, document.getElementById("app"))