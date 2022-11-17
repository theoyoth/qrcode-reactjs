import { useState } from "react";
import QRCode from "qrcode";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQRcode] = useState("");

  const generateQRcode = (e) => {
    e.preventDefault();

    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 1,
      },
      (err, res) => {
        if (err) return console.error(err);
        setQRcode(res);
      }
    );
  };

  return (
    <div className="App">
      <h1 className="app-name">QR CODE GENERATOR</h1>
      <p className="desc-app">This app will generate link you paste in</p>
      <form className="form" onSubmit={generateQRcode}>
        <input
          type="url"
          placeholder="paste your link"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-field"
        />
        <button className="btn-gen" type="submit">
          generate
        </button>
      </form>
      {qrcode && (
        <div className="qrcode-container">
          <img src={qrcode} alt="qrcode-img" />
          <a href={qrcode} download="qrcode" className="btn-download">
            download
          </a>
        </div>
      )}
      <div>
        <p className="copyright">&copy;2022 | theoyoth | All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
