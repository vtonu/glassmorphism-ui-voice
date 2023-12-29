import { useState } from 'react';

function GlassUI() {
  const [inputValue, setInputValue] = useState('');
  const [balance, setBalance] = useState(225.55);

  const deposit = () => {
    setBalance(balance + Number(inputValue));
    setInputValue('');
  };

  const withdraw = () => {
    if (balance >= Number(inputValue)) {
      setBalance(balance - Number(inputValue));
      setInputValue('');
    } else {
      alert('Insufficient balance');
    }
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <div>
      <div className="upper-layer">
        <img src={require('./close.png')} width="16" alt="saeslogo" className="closeButton" />
        <div className="atmHeader">
          <img src={require('./saeslogo_voice.png')} width="110" alt="saeslogo" />
          {/* <h2>ATM</h2> */}
          {/* <h5>Manage your account balance.</h5> */}
        </div>
        <div className="accountBalance">
          <h6>ACTIVE</h6>
          {/* <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              if (e.target.value.length <= 7) {
                setInputValue(e.target.value);
              }
            }}
            max="1000000"
          /> */}
        </div>
        <div className="buttonsHeader">
          <button className="button" onClick={clearInput}>
            VOICE 1
          </button>
          <button className="button" onClick={deposit}>
            VOICE 2
          </button>
          <button className="button" onClick={withdraw}>
            VOICE 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlassUI;
