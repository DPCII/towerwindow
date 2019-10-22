function removeOverlays() {
    
    // Select the node that will be observed for mutations
    var targetNode = document.getElementById("player");

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

export default removeOverlays