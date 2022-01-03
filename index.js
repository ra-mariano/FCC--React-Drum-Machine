soundBankTwo= [
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/21[kb]brightohh808.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/85[kb]909-bright-ride.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/27[kb]chh808.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/299[kb]one-gentle-epiano-hit.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/356[kb]one-staggered-epiano-chord-2.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/47[kb]iELECTRIBE-kick-11.wav.mp3,
  https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/274[kb]one-staggered-epiano-chord.wav.mp3
]


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
    this.powerButton=this.powerButton.bind(this)
    this.setVolume=this.setVolume.bind(this)

this.state ={
  drumpart: "CLICK A PAD!",
  volume: .5
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

powerButton() {
  if(document.getElementById("input").checked) {
    this.setState({
      drumpart: ""
    });
    document.getElementsByClassName("clip").forEach(items => items.muted = true)
  }
  else {
    document.getElementsByClassName("clip").forEach(items => items.load())
    document.getElementsByClassName("clip").forEach(items => items.muted = false)
  }
}

setVolume(){
  this.setState({
    volume: document.getElementById("slider").value/100
  }, () => {
    document.getElementsByClassName("clip").forEach(items => items.volume=this.state.volume
  )});
}



render() {
  return (
    
      <div id="container">
      <h1 id="header">REACT DRUM MACHINE</h1>
   
<div id="drum-machine">
        <div id="drum-pad-section">
    <button className= "drum-pad" id="openhh" onClick = {this.handleOpenhh}>
        <h3>Q</h3>
        <audio className="clip" id="Q" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3">
    </audio>
      </button>
     
      <button className= "drum-pad" id="crash" onClick = {this.handleCrash}>
      <h3>W</h3>
      <audio className="clip" id="W" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3">
    </audio>
      </button>
    <button className= "drum-pad" id="ride" onClick = {this.handleRide}>
    <h3>E</h3>
      <audio className="clip" id="E" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/50[kb]hismashride.wav.mp3">
    </audio>
      </button>
      <button className= "drum-pad" id="closedhh" onClick = {this.handleClosedhh}>
      <h3>A</h3>
      <audio className="clip" id="A" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3">
    </audio>
      </button>
    <button className= "drum-pad" id="tom1" onClick = {this.handleTom1}>
    <h3>S</h3>
      <audio className="clip" id="S" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3">
    </audio>
      </button>
     <button className= "drum-pad" id="tom2" onClick = {this.handleTom2}>
     <h3>D</h3>
      <audio className="clip" id="D" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3">
    </audio>
      </button>
      <button className= "drum-pad" id="snare" onClick = {this.handleSnare}>
      <h3>Z</h3>
      <audio className="clip" id="Z" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3">
      </audio>
      </button>
      <button className= "drum-pad" id="bass" onClick = {this.handleBass}>
      <h3>X</h3>
      <audio className="clip" id="X" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3">
      </audio>
      </button>
      <button className= "drum-pad" id="floortom" onClick = {this.handleFloorTom}>
      <h3>C</h3>
      <audio className="clip" id="C" src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3">
      </audio>
      </button>
</div>
<div id="divider">

</div>
<div id="options">
  <h1>SETTINGS</h1>
      <div className="settings">
      <label className="label">
  <input className= "settings" id="input" type="checkbox" onClick={this.powerButton}/>
  <span className="span"></span>
  ON/OFF
</label>
</div>
<div className="settings">
<label id="label2">
  <input id="input2" type="checkbox"/>
  <span id="span2"></span>
  SWITCH BANK
</label>
</div>

<div className="settings" id="sliderContainer">
  <input type="range" min="0" max="100" id="slider" defaultValue="100" onClick={this.setVolume}/>
</div>

      <div className="settings" id="display">{this.state.drumpart}</div>
      
      </div>
      </div>
      
      </div>
     
      ) 
    }
  }



ReactDOM.render(<App />, document.getElementById("app"))




