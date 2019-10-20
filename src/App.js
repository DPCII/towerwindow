import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import Header from './components/Header';
import SearchMenu from './components/SearchMenu'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {

  // state
  const [{vid, player}, setVid] = useState({ 
    vid: '',
    player: ""
  });
  const [hide, setHide] = useState({ hide: false })
  // state

  // Handler for selecting option from Searchmenu
  // const handleSearchSelection = (a, b) => setVid({vid: a, player: b})
  const handleSearchSelection = (a, b) => setVid({vid: a, player: b})
  //

  // React Spring for navmenu
  const [navStatus, setNavStatus] = useState(false);
  const cssPropsAnim = useSpring({
    opacity: navStatus ? 1 : .5,
    marginLeft: navStatus ? 0 : -1200
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
    togglePlayState()
  }
  function playbackPlay(event) {
    togglePlayState()
  }

  function togglePlayState() {
    hide ? setHide(false) : setHide(true)
  }
  // play state




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
                    onPlay={playbackPlay}
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
    }
  }


  let display;

  if(!hide) {
     display = <div style={pausedCss}>
                  Paused
                </div>
  } else {
    display = <div>
                {renderWhichPlayer() || <div style={inlineCss}>Open the menu to search for content...</div>}
              </div>

  }




  // renderWhichPlayer

// determines which type of content should be played. If no content is playing, can reopen nav bar
  return ( 
    <div>
        <Header popnav={handleNavClick}></Header>
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
  }
  //