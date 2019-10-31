import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import Header from './components/Header';
import SearchMenu from './components/SearchMenu'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import fireplace_background from './images/background_tw.jpg'
import './App.css';

function App() {

  // state
  const [{vid, player}, setVid] = useState({ 
    vid: '',
    player: ""
  });
  const [hide, setHide] = useState({ hide: false })
  // state

  // Handler for selecting option from Searchmenu. Also collapses the search menu.

  const handleSearchSelection = (a, b) => {
    setVid({vid: a, player: b}) 
    setNavStatus(a => !a)
  }
  //



  // React Spring for navmenu
  const [navStatus, setNavStatus] = useState(false);

  const cssPropsAnim = useSpring({
    opacity: navStatus ? 1 : .5,
    marginLeft: navStatus ? 0 : -1200,
  })

  const handleNavClick = () => setNavStatus(a => !a)
  // React Spring

  
  // start and stop functions
  function playbackReady(event) {
    // event.target.pauseVideo();
    event.target.playVideo();

  }
  function playbackEnd(event) {
    setVid('')
    setNavStatus(a => !a)
  }
  // start and stop



  // play state allows us to determine whether or not popup ads should be killed
  function playbackPause(event) {
    let sheets = document.styleSheets;
    console.log(sheets)
    // togglePlayState()
    // console.log(grabWindow)
  }

  // function playbackPlay(event) {
  //   togglePlayState()
  // }

  // function togglePlayState() {
  //   hide ? setHide(false) : setHide(true)
  // }
  // play state
  
  // let grabWindow;

  // renderWhichPlayer checks API response for which platform the video is coming from
  function renderWhichPlayer() {
    if(player === "youtube") {
      return  <div style={inlineCss} id="player">
                  <YouTube 
                    videoId= { vid }
                    opts={optionsForVideo}
                    onReady={playbackReady}
                    onEnd={playbackEnd}
                    onPause={playbackPause}
                    // onPlay={playbackPlay}
                    // ref={
                    //   function(el) {
                    //     grabWindow = el
                    //   }
                    // }
                  />

              </div>
    } else if(player === "vimeo") {
      return <div style={inlineCss} id="player">
                <Vimeo
                  video={ vid }
                  onEnd={playbackEnd}
                  width="640"
                  height="390"
                  autoplay
                />
              </div>
    } else if(player === "national archives") {
      return <div style={inlineCss} id="player">
                <video width="640" autoPlay controls>
                  <source src={ vid } type="video/mp4" />
                  <source src={ vid } type="video/ogg" />
                  {"Your browser does not support HTML5 video."}
                </video>
            </div>
    }
  }

  const HomePackage = 
  <Home>
    <h3>Welcome to Tower Window</h3>
    <HomeText>
      Our goal is to reference quality content across all domains of interest with as little impact from behavior modifying algorithms as possible. Click on the title at the top left to get started.
    </HomeText>
    <img alt="reading by the fireplace" src={fireplace_background} height="125px"></img>
  </Home>


  let display;

  if(!hide) {
     display = <div style={pausedCss}>
                  Paused
                </div>
  } else {
    display = <div>
                {renderWhichPlayer() || {...HomePackage}}
              </div>

  }

  // renderWhichPlayer

// determines which type of content should be played. If no content is playing, can reopen nav bar
  return ( 
    <div>
        <Header popnav={handleNavClick} sendSelection={handleSearchSelection}></Header>
        { // Spring animation for side sliding nav 
          !navStatus ?
          (
            null
          )
          :
          (
            <animated.div className="navmenu" style={ cssPropsAnim }>
              <SearchMenu sendSelection={handleSearchSelection}></SearchMenu>
            </animated.div>
          )
        }  


        {display}



    </div>
  );

}

export default App;

const Home = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  /* background-color: green; */
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  padding: 4rem 0 0 0;
`;

const HomeText = styled.p`
  height: auto;
  width: 40vw;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;

// temp storage of CSS
const inlineCss = {
  height: "500px",
  width: "700px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white"
}

const pausedCss = {
  height: "500px",
  width: "725px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "blue",
  zIndex: "1",
  position: "absolute",
  right: "350px",
  top: "0"
}

  // video size for YouTube npm package
  let optionsForVideo =  {
    height: '390',
    width: '640',
    playerVars: {
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      'ytp-pause-overlay': '0',
    }
  }
  //