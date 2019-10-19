import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './App.css';

function App() {

  const [vid, setVid] = useState({ url: '0Bmhjf0rKe8' })
  const [hide, setHide] = useState({ cover: false })

  let optionsForVideo =  {
    height: '390',
    width: '640',
  }

  function testOnReady(event) {
    event.target.pauseVideo();
  }
  function testOnEnd(event) {
    setVid('')
  }
  function testOnPause(event) {
    togglePlayState()
    console.log(hide)
  }
  function testOnPlay(event) {
    togglePlayState()
    console.log(hide)
  }

  function togglePlayState() {
    hide ? setHide(false) : setHide(true)
  }

  let removeSidebar = true;
  if (removeSidebar) {
    let sheets = document.styleSheets;
    let display_none = " { display: none !important; }";

    // youtube video recommendations
    sheets[0].insertRule("ytd-compact-video-renderer.style-scope" + display_none);
    sheets[0].insertRule("ytd-compact-radio-renderer.style-scope" + display_none);

    sheets[0].insertRule("#dismissable.ytd-compact-movie-renderer" + display_none);
    sheets[0].insertRule("ytd-movie-offer-module-renderer" + display_none);

    sheets[0].insertRule("#container.ytd-iframe-companion-renderer" + display_none);

    sheets[0].insertRule("ytd-image-companion-renderer.style-scope" + display_none);
    sheets[0].insertRule("ytd-compact-playlist-renderer.style-scope" + display_none);
    sheets[0].insertRule("a.ytd-action-companion-renderer" + display_none);
    sheets[0].insertRule("#google_companion_ad_div" + display_none);

    sheets[0].insertRule("#upnext" + display_none);

    sheets[0].insertRule("li.video-list-item.related-list-item" + display_none); 
    sheets[0].insertRule("h4.watch-sidebar-head" + display_none); 
    sheets[0].insertRule("hr.watch-sidebar-separation-line" + display_none); 
    sheets[0].insertRule("button#watch-more-related-button" + display_none); 
  }

  function removeOverlays() {
    
    // Select the node that will be observed for mutations
    var targetNode = document.getElementById("movie_player");

    // Options for the observer (observe child and its descendants for mutations as well as attribute changes in them)
    var overlayObserverConfiguration = { attributes: true, childList: true, subtree: true };

    // When mutations are observed
    var overlayMutationObserverCallback = function(mutationRecordList, observer) {
        // Iterate through the list of MutationRecords
        mutationRecordList.forEach((mutation) => {
            switch(mutation.type) {
                // When a node is added or removed
                case 'childList':
                    mutation.addedNodes.forEach((addedNode) => {
                        // Check if the node contains class name "ytp-ce-video"
                        if (addedNode.className.includes("ytp-ce-video")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                        // Check if the node contains class name "ytp-ce-channel"
                        if (addedNode.className.includes("ytp-ce-channel")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                        // Check if the node contains class name "ytp-ce-playlist"
                        if (addedNode.className.includes("ytp-ce-playlist")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                    });
                    break;
                // When a node attribute changed
                case 'attributes':
                    mutation.addedNodes.forEach((addedNode) => {
                        // Check if the node contains class name "ytp-ce-video"
                        if (addedNode.className.includes("ytp-ce-video")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                        // Check if the node contains class name "ytp-ce-channel"
                        if (addedNode.className.includes("ytp-ce-channel")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                        // Check if the node contains class name "ytp-ce-playlist"
                        if (addedNode.className.includes("ytp-ce-playlist")) {
                            // Hide the node
                            addedNode.style.display = "none";
                        }
                    });
                    break;
            }
          });
    };

    // Get the list of overlays that relate to videos
    let listOfVideoOverlays = document.getElementsByClassName("ytp-ce-element ytp-ce-video");
    if (listOfVideoOverlays.length > 0) {
        // Iterate through each found Video overlay
        for (let elem of listOfVideoOverlays){
            // Hide the overlay
            elem.style.display = "none";
        }
    }
    // Get the list of overlays that relate to the channel overlay
    let listOfChannelOverlays = document.getElementsByClassName("ytp-ce-element ytp-ce-channel");
    if (listOfChannelOverlays.length > 0) {
        // Iterate through each found channel overlay
        for (let elem of listOfChannelOverlays){
            // Hide the overlay
            elem.style.display = "none";
        }
    }
    // Get the list of overlays that relate to Playlists
    let listOfPlaylistOverlays = document.getElementsByClassName("ytp-ce-element ytp-ce-playlist");
    if (listOfPlaylistOverlays.length > 0) {
        // Iterate through each found channel Playlist overlay
        for (let elem of listOfPlaylistOverlays){
            // Hide the overlay
            elem.style.display = "none";
        }
    }

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(overlayMutationObserverCallback);

    if(targetNode != null) {
        // Start observing the target node for configured mutations
        observer.observe(targetNode, overlayObserverConfiguration);
    }
}

  removeOverlays()



  return ( 

    <div style={inlineCss} id="player">
      <YouTube 
        videoId= { vid.url }
        opts={optionsForVideo}
        onReady={testOnReady}
        onEnd={testOnEnd}
        onPause={testOnPause}
        onPlay={testOnPlay}
      />
      <div style={transparentOverlay}>

      </div>
    </div>
  
  );

}

export default App;

const inlineCss = {
  height: "100vh",
  width: "100vw",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const transparentOverlay = {
  height: "500px",
  width: "700px",
  backgroundColor: "rgba(0,0,0,0.3)",
  position: "absolute",
  zIndex: "1",
  right: "375px",
}