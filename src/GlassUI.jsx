function GlassUI() {
  return (
    <div>
      <div className="upper-layer">
        <img src={require('./close.png')} width="16" alt="saeslogo" className="closeButton" />
        <div className="atmHeader">
          <img src={require('./saeslogo_voice.png')} width="110" alt="saeslogo" />
        </div>
        <h5>SQUAD SOUNDS</h5>
        <div className="buttonsHeader">
          <button className="button">VOICE 1 - PULL OVER!</button>
          <button className="button">VOICE 2 - COME OUT!</button>
          <button className="button">VOICE 3 - HANDS ON VEHICLE!</button>
          <button className="button">VOICE 4 - SURROUNDED</button>
          <button className="button">VOICE 5 - GET DOWN!</button>
          <button className="button">VOICE 6 - DROP GUN!</button>
          <button className="button">VOICE 7 - ROGER</button>
          <button className="button">VOICE 8 - GET OUT!</button>
          <button className="button">VOICE 9 - THE SOUND</button>
          <button className="button">VOICE 10 - DEEZ NUTS!</button>
        </div>
      </div>
    </div>
  );
}

export default GlassUI;
