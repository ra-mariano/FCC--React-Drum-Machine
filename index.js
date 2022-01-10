let soundBankOne = [
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/102[kb]crappy-crash.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/50[kb]hismashride.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]crunchmhh.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3"
]

let soundBankTwo= [
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/21[kb]brightohh808.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/85[kb]909-bright-ride.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/27[kb]chh808.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/299[kb]one-gentle-epiano-hit.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/356[kb]one-staggered-epiano-chord-2.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/47[kb]iELECTRIBE-kick-11.wav.mp3",
  "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/274[kb]one-staggered-epiano-chord.wav.mp3"
]


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick=this.handleClick.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
    this.powerButton=this.powerButton.bind(this)
    this.setVolume=this.setVolume.bind(this)
    this.switchBank=this.switchBank.bind(this)

this.state ={
  drumpart: "CLICK A PAD!",
  volume: .5,
}

}


componentDidMount() {
  document.addEventListener("click", this.handleClick)
  document.addEventListener("keydown", this.handleKeyPress)
}

handleClick(event) {
  if(document.getElementById("input").checked) {
    this.setState({
      drumpart: ""
    })
   if (event.target.className === "drum-pad") {
        this.setState({
          drumpart: "MACHINE IS OFF!"
        })
      }
  }
  else {
  switch (event.target.id) {
  case "openhh":
    document.getElementById("Q").load()
    document.getElementById("Q").play() 
    this.setState({
      drumpart: "Open Hi-Hat"
    })
    break; 
  case "crash":
    document.getElementById("W").load()
    document.getElementById("W").play() 
    this.setState({
      drumpart: "Crash"
    })
    break; 
  case "ride":
    document.getElementById("E").load()
    document.getElementById("E").play() 
    this.setState({
      drumpart: "Ride"
    })
    break; 
  case "closedhh":
    document.getElementById("A").load()
    document.getElementById("A").play() 
    this.setState({
      drumpart: "Closed Hi-Hat"
    })
    break; 
    case "tom1":
    document.getElementById("S").load()
    document.getElementById("S").play() 
    this.setState({
      drumpart: "High Tom"
    })
    break; 
    case "tom2":
    document.getElementById("D").load()
    document.getElementById("D").play() 
    this.setState({
      drumpart: "Low Tom"
    })
    break; 
    case "snare":
    document.getElementById("Z").load()
    document.getElementById("Z").play() 
    this.setState({
      drumpart: "Snare"
    })
    break; 
    case "bass":
    document.getElementById("X").load()
      document.getElementById("X").play() 
    this.setState({
      drumpart: "Bass"
    })
    break; 
    case "floortom":
    document.getElementById("C").load()
      document.getElementById("C").play() 
    this.setState({
      drumpart: "Floor Tom"
    })
    break; 
  }
}
}




handleKeyPress(e) {
  if(document.getElementById("input").checked) {
    this.setState({
      drumpart: "MACHINE IS OFF!"
    })
  }
  else {
    switch (e.code) {
    case "KeyQ":
    document.getElementById("Q").load()
    document.getElementById("Q").play() 
    this.setState({
      drumpart: "Open Hi-Hat"
    })
    console.log(this.setState.drumpart)
    break; 
    case "KeyW": 
    document.getElementById("W").load()
    document.getElementById("W").play()
    this.setState({
      drumpart: "Crash"
    })
    break;
    case "KeyE": 
    document.getElementById("E").load()
    document.getElementById("E").play()
    this.setState({
      drumpart: "Ride"
    })
    break;
    case "KeyA":  
    document.getElementById("A").load()
    document.getElementById("A").play()
    this.setState({
      drumpart: "Closed Hi-Hat"
    })
    break;
    case "KeyS":  
    document.getElementById("S").load()
    document.getElementById("S").play()
    this.setState({
      drumpart: "High Tom"
    })
    break;
    case "KeyD":  
    document.getElementById("D").load()
    document.getElementById("D").play()
    this.setState({
      drumpart: "Low Tom"
    })
    break;
    case "KeyZ":  
    document.getElementById("Z").load()
    document.getElementById("Z").play()
    this.setState({
      drumpart: "Snare"
    })
    break;
    case "KeyX":  
    document.getElementById("X").load()
    document.getElementById("X").play()
    this.setState({
      drumpart: "Bass"
    })
    break;
    case "KeyC":  
    document.getElementById("C").load()
    document.getElementById("C").play()
    this.setState({
      drumpart: "Floor Tom"
    })
    break;
  } 
}
}

noDisplay() {
  this.setState({
    drumpart: ""
  })
}

  
powerButton(event) {
  if(document.getElementById("input").checked) {
    this.setState({
      drumpart: ""
    });
    document.getElementsByClassName("clip").forEach(items => items.muted = true)
    }  
  
  else {
    document.getElementsByClassName("clip").forEach(items => items.load())
    document.getElementsByClassName("clip").forEach(items => items.muted = false)
    this.setState({
      drumpart: "CLICK A PAD!"
    });
  }
}

setVolume(){
  this.setState({
    volume: document.getElementById("slider").value/100
  }, () => {
    document.getElementsByClassName("clip").forEach(items => items.volume=this.state.volume
  )});
}

switchBank(){
  let audioTags = document.getElementsByClassName("clip")
  let audioArray = Array.from(audioTags)
 if(document.getElementById("input2").checked) {
audioTags.forEach(items => items.src = soundBankTwo[audioArray.indexOf(items)])
}
else {
  audioTags.forEach(items => items.src = soundBankOne[audioArray.indexOf(items)])
}
}


render() {
  return (
    
      <div id="container">
      <h1 id="header">REACT DRUM MACHINE</h1>
   
<div id="drum-machine">
        <div id="drum-pad-section">
    <button className= "drum-pad" id="openhh">
        Q
        <img className="iconz" src="PinClipart.com_cymbals-clip-art_2386276.png"/>
      </button>

        <audio className="clip" id="Q" preload= "auto" src={soundBankOne[0]}>
    </audio>
     
      <button className= "drum-pad" id="crash">
      W
      <audio className="clip" id="W" preload= "auto" src={soundBankOne[1]}>
    </audio>
      </button>
    <button className= "drum-pad" id="ride">
    E
      <audio className="clip" id="E" preload= "auto" src={soundBankOne[2]}>
    </audio>
      </button>
      <button className= "drum-pad" id="closedhh">
      A
    
      <audio className="clip" id="A" preload= "auto" src={soundBankOne[3]}>
    </audio>
      </button>
    <button className= "drum-pad" id="tom1">
    S
      <audio className="clip" id="S" preload= "auto" src={soundBankOne[4]}>
    </audio>
      </button>
     <button className= "drum-pad" id="tom2">
     D
      <audio className="clip" id="D" preload= "auto" src={soundBankOne[5]}>
    </audio>
      </button>
      <button className= "drum-pad" id="snare">
    Z
    <img className="iconz" src="PinClipart.com_snare-drum-clip-art_744391.png"/>
      <audio className="clip" id="Z" preload= "auto" src={soundBankOne[6]}>
      </audio>
      </button>
      <button className= "drum-pad" id="bass">
    X
    <img className="iconz" src="PinClipart.com_bass-drum-clip-art_5683416.png"/>
      <audio className="clip" id="X" preload= "auto" src={soundBankOne[7]}>
      </audio>
      </button>
      <button className= "drum-pad" id="floortom">
    C
      <audio className="clip" id="C" preload= "auto" src={soundBankOne[8]}>
      </audio>
      </button>
</div>
<div id="divider">

</div>
<div id="options">
  <h1>SETTINGS</h1>
      <div className="settings">
      <label id="label">
  <input className= "settings" id="input" type="checkbox" onClick={this.powerButton}/>
  <span id="span"></span>
  ON/OFF
</label>
</div>
<div className="settings">
<label id="label2">
  <input id="input2" type="checkbox" onClick={this.switchBank}/>
  <span id="span2"></span>
  BANK
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




