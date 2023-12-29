function GlassUI() {
  return (
    <div>
      <div className="upper-layer">
        <img src={require('./close.png')} width="16" alt="saeslogo" className="closeButton" />
        <div className="atmHeader">
          <img src={require('./saeslogo_voice.png')} width="110" alt="saeslogo" />
        </div>
        <div className="accountBalance">
          {/* <h6>ACTIVE</h6> */}
          {/* <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              if (e.target.value.length <= 7) {
                setInputValue(e.target.value);
              }
            }}
          /> */}
        </div>
        <h5>SQUAD SOUNDS</h5>
        <div className="buttonsHeader">
          <button className="button">VOICE 1</button>
          <button className="button">VOICE 2</button>
          <button className="button">VOICE 3</button>
          <button className="button">VOICE 4</button>
          <button className="button">VOICE 5</button>
          <button className="button">VOICE 6</button>
        </div>
      </div>
    </div>
  );
}

export default GlassUI;
