import React from "react";
import { useState } from "react";
import { Parallax, Background } from "react-parallax";
import './App.css'
import Leaves from './images/leaves.jpg'
import Mtn from './images/mtn.jpg'
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const corner = {
  top: "80%",
  left: "25%",
  transform: "translate(-50%,-50%)",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Capsuula",
  fontWeight: 700,
  background: "black",
  padding: 20
}
const insideStyles = {
  color: "white",
  fontSize: 60,
  alignSelf: "flex-start"
};
const subText = {
  color: "white",
  fontSize: 30
};
const image1 =
  "https://wpapercave.com/wp/wp9154743.jpg";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

function App() {
  const [bigText, setBigText] = useState('');

  return (
    <div style={styles}>
      <Parallax bgImage={Mtn} strength={200}>
        <div style={{ height: 500 }}>
          <div className="corner">
            <div className="bigtext">Seena Abed</div>
            <div className="subtext">Computer Science Undergraduate</div>
          </div>

        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Reverse direction</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div>

            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            >
              <div style={{
                position: "absolute",
                textAlign: "center",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}>
                Test
              </div>
            </div>

          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
            }}
          />
        </Background>
        <div>
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
        </div>
      </Parallax>
      <div style={{ height: 500 }} />
      <h2>{"\u2728"}</h2>
    </div>
  );
}
export default App;