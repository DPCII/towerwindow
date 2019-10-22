
    function killSheets() {
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
    sheets[0].insertRule("div.ytp-pause-overlay.ytp-scroll-min" + display_none);


  }