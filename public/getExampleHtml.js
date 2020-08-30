(function() {
    window.getExampleHtml = function() {
        return `
    <!DOCTYPE html>
    <html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://ogp.me/ns/fb#">
    <head>
                <title>Movie Reviews, Articles, Trailers, and more - Metacritic</title>
            
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script>
    
        
        <meta name="description" content="Not every critic is the same. Metacritic offers aggregated movie reviews from the top critics, and our own METASCORE pinpoints at a glance how each movie was reviewed.">
    
        
        
    
        
        <meta name="application-name" content="Metacritic">
        <meta name="msapplication-TileColor" content="#000000">
        <meta name="msapplication-TileImage" content="/images/win8tile/76bf1426-2886-4b87-ae1c-06424b6bb8a2.png">
    
        
                            <meta property="og:title" content="Movie Reviews, Articles, Trailers, and more">
                        <meta property="og:type" content="website">
                        <meta property="og:url" content="https://www.metacritic.com/movie">
                        <meta property="og:image" content="https://static.metacritic.com/images/icons/mc_fb_og.png">
                        <meta property="og:site_name" content="Metacritic">
                        <meta property="fb:app_id" content="123113677890173">
                        <meta property="og:description" content="Not every critic is the same. Metacritic offers aggregated movie reviews from the top critics, and our own METASCORE pinpoints at a glance how each movie was reviewed.">
                
        
         
            <link rel="canonical" href="https://www.metacritic.com/movie" />
            
        
    
        
            
        
        <script type="text/javascript">
            
            (function(id){function append(scriptid,url,async){var d=document,sn='script',f=d.getElementsByTagName(sn)[0];if(!f)f=d.head;var s=d.createElement(sn);s.async=!0;s.id=scriptid;s.src=url;f.parentNode.insertBefore(s,f)}
            function getRootDomain(){var parts=window.location.hostname.split('.');if(parts.length===2)rootDomain=parts[0];else if(parts.length>2){var part=parts[parts.length-2];if(part==='com'||part==='co'){rootDomain=parts[parts.length-3]}
            else{rootDomain=part}}
            return rootDomain}
            window.evidon={};window.evidon.id=id;var cdn='//c.evidon.com/',rootDomain=getRootDomain(),noticecdn=cdn+'sitenotice/';append('evidon-notice',noticecdn+'evidon-sitenotice-tag.js',!1);append('evidon-location',cdn+'geo/country.js',!0);append('evidon-themes',noticecdn+id+'/snthemes.js',!0);if(rootDomain)append('evidon-settings',noticecdn+id+'/'+rootDomain+'/settings.js',!0);
                window.evidon.priorConsentCallback=function(){
                    // IX Ad Bidding
                    append('ix-lib',  (('https:' == document.location.protocol)?'https:':'http:') + '///js-sec.indexww.com/ht/ls-metacritic.js', true);
                    // GPT/DFP ads
                    append('gpt-lib', (('https:' == document.location.protocol)?'https:':'http:') + '//www.googletagservices.com/tag/js/gpt.js', true);
                    // Sharethrough
                    append('st-lib', (('https:' == document.location.protocol)?'https:':'http:') + '//native.sharethrough.com/assets/tag.js', true);
                    // Google Analytics
                    append('ga-lib', (('https:' == document.location.protocol)?'https://ssl':'http://www') + '.google-analytics.com/ga.js', true);
                    // Omniture
                    window.gdprConsent = true;
                    if (typeof om == 'object' && typeof om.fireGdprTags != 'undefined') { om.fireGdprTags(); }
                                    // Taboola
                    load_vendor_taboola();
                                                }
            window.evidon.closeCallback=function(){}
            window.evidon.consentWithdrawnCallback=function(){}})(425)
            
        </script>
    
        <script src="//code.jquery.com/jquery-2.2.0.min.js"></script>
    
        <link rel="stylesheet" href="/css/global_alt.min.1537813734.css" type="text/css">
        <script type="text/javascript" src="/js/global_alt.min.1537813734.js"></script>
    
        
        
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
    
        
        <link rel="stylesheet" href="/css/fonts/proxima-nova/stylesheet.css" type="text/css" charset="utf-8" />
    
    
        <script type="text/javascript">
            
            MC_USER_LOGGED_IN = false;
            
            
            
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            window.metac_ads_pushdisplay = window.metac_ads_pushdisplay || [];
            window.metac_gallery_ads_pushdisplay = window.metac_gallery_ads_pushdisplay || [];
            window.metac_hover_ads_pushdisplay = window.metac_hover_ads_pushdisplay || [];
            
    
            
                        
                window._taboola = window._taboola || [];
                function load_vendor_taboola(){
                    _taboola.push({
                        category : 'auto'
                    });
                    !function (e, f, u) {
                        e.async = 1;
                        e.src = u;
                        f.parentNode.insertBefore(e, f);
                    }(document.createElement('script'),
                    document.getElementsByTagName('script')[0],
                    '//cdn.taboola.com/libtrc/cbsinteractive-metacritic/loader.js');
                }
                
                </script>
    
        
        <script src="//vidtech.cbsinteractive.com/uvpjs/2.8.3/CBSI-PLAYER.js"></script>
        <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
    
    </head>
    <body>
    
        
        
        <div id="page">
            
            <div id="content_header_wrapper">
                <header id="top_header">
        <nav id="primary_nav">
            <nav id="primary_logo" class="primary_nav_item">
                <a href="https://www.metacritic.com"><img src="/images/icons/dark_logo.png" alt="Metacritic logo"></a>
            </nav>
    
            <nav id="primary_search" class="primary_nav_item">
                <div class="rounded_field">
                    <div class="imgs">
                        <img class="inactive" src="/images/icons/search_inactive.png" alt="search">
                        <img class="active" src="/images/icons/search_active.png" alt="search">
                    </div>
                    <div class="field innerLabel">
                        <div class="input_wrapper">
                            <form action="/search" method="post" autocomplete="off">
                                <label for="primary_search_box">search...</label>
                                <input name="search_term" id="primary_search_box" autocomplete="off"
                                                                >
                                <input type="hidden" name="search_filter" value="all">
                            </form>
                        </div>
                    </div>
                </div>
                <div id="primary_search_results">
    
                </div>
            </nav>
    
                        <nav id="primary_nav_item_movies" class="primary_nav_item selected">
                    <span class="primary_nav_text">
                        <a href="https://www.metacritic.com/movie">
                                                        Movies
                                                </a>
                    </span>
    
                                        <span class="cutout_wrapper selected">
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </span>
                    
                                                <nav class="primary_drop_down">
                                <span class="cutout_wrapper">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </span>
                                <div class="primary_feature">
                                                                                                                                                    
                                            <a href="/feature/new-movie-trailers-september-28-2018">
                                                <div class="primary_feature_blur" style="background-image: url(https://static.metacritic.com/images/features/main/ff20180928-180.png)"></div>
                                                <img class="primary_feature_img" src="https://static.metacritic.com/images/features/main/ff20180928-180.png" alt="Film Friday (9/28): This Week's New Movie Trailers Image" />
                                            </a>
                                            <span class="primary_feature_text"><a href="/feature/new-movie-trailers-september-28-2018">Film Friday (9/28): This Week's New Movie Trailers</a></span>
                                                                                                    </div>
                                <nav class="primary_dditems">
                                    <a href="/feature/movie">More Reports</a>
                                    <a href="/movie">All Movies &gt;</a>
                                    <a href="/browse/movies/release-date/theaters/date">In Theaters</a>
                                    <a href="/browse/movies/release-date/coming-soon/date">Coming Soon</a>
                                    <a href="/browse/dvds/release-date/new-releases/date">New to DVD & Streaming</a>
                                    <a href="/browse/movies/score/metascore/all/filtered/netflix">Best of Netflix</a>
                                    <a href="/browse/movies/score/metascore/all/filtered/piv">Best of Amazon</a>
                                    <a href="/browse/movies/score/metascore/all/filtered">Best Movies of All Time</a>
                                    <a href="/browse/movies/genre/date">Browse Movies by Genre</a>
                                </nav>
                            </nav>
                                    </nav>
                        <nav id="primary_nav_item_games" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a href="https://www.metacritic.com/game">
                                                        Games
                                                </a>
                    </span>
    
                    
                                                <nav class="primary_drop_down">
                                <span class="cutout_wrapper">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </span>
                                <div class="primary_feature">
                                                                                                                                                    
                                            <a href="/feature/25-best-ios-games">
                                                <div class="primary_feature_blur" style="background-image: url(https://static.metacritic.com/images/features/main/gq2015_ios-180.jpg)"></div>
                                                <img class="primary_feature_img" src="https://static.metacritic.com/images/features/main/gq2015_ios-180.jpg" alt="Quarterly Report: The 25 Best iPhone/iPad Games Image" />
                                            </a>
                                            <span class="primary_feature_text"><a href="/feature/25-best-ios-games">Quarterly Report: The 25 Best iPhone/iPad Games</a></span>
                                                                                                    </div>
                                <nav class="primary_dditems">
                                    <a href="/feature/game">More Reports</a>
                                    <a href="/game">All Games &gt;</a>
                                    <a href="/game/playstation-4">PS4</a>
                                    <a href="/game/xbox-one">Xbox One</a>
                                    <a href="/game/pc">PC</a>
                                    <a href="/game/switch">Switch</a>
                                    <a href="/game/wii-u">Wii U</a>
                                    <a href="/game/3ds">3DS</a>
                                    <a href="/game/playstation-vita">PS Vita</a>
                                    <a href="/game/ios">iOS</a>
                                    <a href="/game/legacy">Legacy</a>
                                </nav>
                            </nav>
                                    </nav>
                        <nav id="primary_nav_item_tv" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a href="https://www.metacritic.com/tv">
                                                        TV
                                                </a>
                    </span>
    
                    
                                                <nav class="primary_drop_down">
                                <span class="cutout_wrapper">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </span>
                                <div class="primary_feature">
                                                                                                                                                    
                                            <a href="/feature/best-of-september-2018">
                                                <div class="primary_feature_blur" style="background-image: url(https://static.metacritic.com/images/features/main/bestof_2018_09-180.jpg)"></div>
                                                <img class="primary_feature_img" src="https://static.metacritic.com/images/features/main/bestof_2018_09-180.jpg" alt="Best of September 2018: Top Albums, Games, Movies & TV Image" />
                                            </a>
                                            <span class="primary_feature_text"><a href="/feature/best-of-september-2018">Best of September 2018: Top Albums, Games, Movies & TV</a></span>
                                                                                                    </div>
                                <nav class="primary_dditems">
                                    <a href="/feature/tv">More Reports</a>
                                    <a href="/tv">All TV &gt;</a>
                                    <a href="/browse/tv/release-date/new-series/date">New Shows</a>
                                    <a href="/browse/tv/score/metascore/all/filtered/netflix">Best of Netflix</a>
                                    <a href="/browse/tv/score/metascore/all/filtered/piv">Best of Amazon</a>
                                    <a href="/browse/tv/score/metascore/all/filtered">Best TV Shows</a>
                                    <a href="/browse/tv/genre/date">Browse TV by Genre</a>
                                </nav>
                            </nav>
                                    </nav>
                        <nav id="primary_nav_item_music" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a href="https://www.metacritic.com/music">
                                                        Music
                                                </a>
                    </span>
    
                    
                                                <nav class="primary_drop_down">
                                <span class="cutout_wrapper">
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </span>
                                <div class="primary_feature">
                                                                                                                                                    
                                            <a href="/pictures/fall-music-preview-2018">
                                                <div class="primary_feature_blur" style="background-image: url(https://static.metacritic.com/images/features/main/fallmusicpreview2018-180.jpg)"></div>
                                                <img class="primary_feature_img" src="https://static.metacritic.com/images/features/main/fallmusicpreview2018-180.jpg" alt="Fall 2018 Music Preview: 45 Key Albums Image" />
                                            </a>
                                            <span class="primary_feature_text"><a href="/pictures/fall-music-preview-2018">Fall 2018 Music Preview: 45 Key Albums</a></span>
                                                                                                    </div>
                                <nav class="primary_dditems">
                                    <a href="/feature/album">More Reports</a>
                                    <a href="/music">All Music &gt;</a>
                                    <a href="/browse/albums/release-date/new-releases/date">New Releases</a>
                                    <a href="/browse/albums/release-date/coming-soon/date">Coming Soon</a>
                                    <a href="/browse/albums/score/metascore/90day/filtered">Best New Albums</a>
                                    <a href="/browse/albums/score/metascore/all/filtered">Best Albums of All Time</a>
                                    <a href="/browse/albums/genre/date">Browse Music by Genre</a>
                                </nav>
                            </nav>
                                    </nav>
                        <nav id="primary_nav_item_features" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a href="https://www.metacritic.com/feature">
                                                        Reports
                                                </a>
                    </span>
    
                    
                                    </nav>
            
            <nav id="primary_menu_item_enter_search" class="">
                <span class="">
                    Enter to Search
                </span>
            </nav>
    
    
            
                        <nav id="primary_menu_item_create" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a id="signup" href="https://secure.metacritic.com/signup">+ Create Account</a>
                    </span>
                </nav>
                <nav id="primary_menu_item_login" class="primary_nav_item">
                    <span class="primary_nav_text">
                        <a id="login" href="https://secure.metacritic.com/login">Login</a>
                    </span>
                </nav>
                    
        </nav>
    
                <nav id="secondary_nav" class="clearfix hgrayblue inset_left2 inset_right2">
                <div id="primary_social" class="social_round">
                    <span>follow on</span>
                    <a href="https://twitter.com/metacritic" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com/Metacritic" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a>
                </div>
    
                                <nav id="secondary_nav_movies" class="secondary_nav_list">
                        <a href="/browse/movies/release-date/theaters/date">In Theaters</a>
                        <a href="/browse/movies/release-date/coming-soon/date">Coming Soon</a>
                        <a href="/browse/movies/score/metascore/all/filtered">Best Movies</a>
                        <a href="/browse/movies/critic/reviewed">Critics</a>
                        <a href="/browse/movies/publication/reviewed">Publications</a>
                        <a href="/browse/movies/trailers/all/date">Trailers</a>
                    </nav>
                        </nav>
            <header id="primary_backdrop">
        </header>
    </header>
    
    
                
                                                    <nav id="primary_baby_menu_movies" class="primary_baby_menu">
                            <div class="primary_baby_row">
                                <div class="logo inset_left2">
                                    <a href="https://www.metacritic.com"><img src="/images/mobile/logo.png" alt="Metacritic logo"></a>
                                </div>
                                <div id="primary_baby_menu_item_movies" class="primary_menu_item selected">
                                    <span class="primary_menu_text">
                                        <a href="https://www.metacritic.com/movie">
                                            Movies
                                        </a>
                                    </span>
                                </div>
    
                                                                                                                                                                                                            <div class="primary_baby_item">
                                                <a href="https://www.metacritic.com/browse/movies/release-date/theaters/date">
                                                    In Theaters
                                                </a>
                                            </div>
                                                                                                                                                                                        <div class="primary_baby_item">
                                                <a href="https://www.metacritic.com/browse/movies/release-date/coming-soon/date">
                                                    Coming Soon
                                                </a>
                                            </div>
                                                                                                                                                                                        <div class="primary_baby_item">
                                                <a href="https://www.metacritic.com/browse/movies/score/metascore/all/filtered/netflix">
                                                    Best of Netflix
                                                </a>
                                            </div>
                                                                                                                                                                                        <div class="primary_baby_item">
                                                <a href="https://www.metacritic.com/browse/movies/score/metascore/all/filtered/piv">
                                                    Best of Amazon
                                                </a>
                                            </div>
                                                                                                    
                                                            
                            </div>
                        </nav>
                                                                                                                                                            <aside id="popup_dialog">
                    <header class="pad_btm1"></header>
                    <div class="left">
                    </div>
                    <div class="right">
                    </div>
                    <div class="clr"></div>
                    <footer></footer>
                    
                    <div class="popup_close" onclick="MetaC.Popup.hide()"><i class="fa fa-times" aria-hidden="true"></i></div>
                </aside>
                <aside class="popup_hidden" id="popup_login">
                    <div class="login_section">
                        <button class="meta_fb_login">Continue with Facebook</button>
    
                        <div class="ruled_divider pad_top1">
                            <hr class="rdleft"/>OR<hr class="rdright" />
                        </div>
    
                        <div id="popup_email_wrapper" class="pad_top1">
                            <div class="field innerLabel">
                                
                                
                            </div>
                        </div>
    
                        <div id="popup_pwd_wrapper" class="pad_top1">
                            <div class="field innerLabel">
                                
                                
                            </div>
                            <div class="popup_forgot">
                                <a href="javascript:void(0);"></a>
                            </div>
                        </div>
    
                        <div class="pad_top1 fr">
                            <span class="progress ">
        <i class="fa fa-spinner"></i>
    </span>
    
                            <button class="popup_login_btn grey_button marg_right_half">LOG IN</button>
                            <button class="popup_signup_btn grey_button">CREATE AN ACCOUNT</button>
                        </div>
                        <div class="clr"></div>
                    </div>
                </aside>
    
                <div id="main_content" class="pad_btm2">
                    
    
    <div class="movie hub">
        <input type="hidden" name="csrf_newsletter" value="babfd17c2a594841a74be2221442ed61" />
                <div class="content_under_header">
                <div class="new_releases_strip_wrapper inset_left2 pad_btm1 pad_top1">
                    <div class="new_releases_strip">
                        <div class="pad_btm2 inset_right2">
                            <a href="/browse/movies/release-date/theaters/date" class="strip_title oswald">NEW RELEASES <span class="subtitle">IN THEATERS</span></a>
                            <a href="/browse/movies/release-date/theaters/date" class="title_see_all oswald">see all</a>
                            <div class="fr">
                                    <div id="newReleases_Widget_0" class="toggles" data-mcqw="newReleases_Widget" data-mcqwtype="toggles" data-mcqwset="0"><span class="toggle_tab" data-mcqwval="metascore" data-mcqwqname="val_metascore"><i class="fa fa-check thin"></i><span class="toggle_text">by Metascore</span></span><span class="toggle_tab selected" data-mcqwval="date" data-mcqwqname="val_date"><i class="fa fa-check thin"></i><span class="toggle_text">by Release Date</span></span></div>
    
                            </div>
                            <div class="clr"></div>
                        </div>
                        
    <div class="image_strip_and_arrows more_right larger_images white_title_only">
        <div class="slider_arrow slider_previous">
            
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="slider_arrow slider_next">
            
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="image_strip_wrapper">
            <div class="slider_gradient slider_previous"></div>
            <div class="slider_gradient slider_next"></div>
            <div class="image_strip">
                <div class="product"><div class="img_wrapper"><a href="/movie/smallfoot"><img src="https://static.metacritic.com/images/products/movies/5/565141631688410007c8e4a1bc045cf5-250h.jpg" alt="Smallfoot" />
    
            
    <div class="metascore_w large no_tbd movie mixed">59</div>
    <span class="release_date">Sep 28</span></a></div><div class="title_wrapper"><a href="/movie/smallfoot"><span>Smallfoot</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/night-school-2018"><img src="https://static.metacritic.com/images/products/movies/9/5a1fcf0a2daf2f4ca45476816f897e89-250h.jpg" alt="Night School" />
    
            
    <div class="metascore_w large no_tbd movie mixed">43</div>
    <span class="release_date">Sep 28</span></a></div><div class="title_wrapper"><a href="/movie/night-school-2018"><span>Night School</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/little-women-2018"><img src="https://static.metacritic.com/images/products/movies/8/016c273761481d324137d7c2eebc75fa-250h.jpg" alt="Little Women" />
    
            
    <div class="metascore_w large no_tbd movie mixed">40</div>
    <span class="release_date">Sep 28</span></a></div><div class="title_wrapper"><a href="/movie/little-women-2018"><span>Little Women</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/hell-fest"><img src="https://static.metacritic.com/images/products/movies/4/ec786e42c51e0bbe6bd6595c8aecec31-250h.jpg" alt="Hell Fest" />
    
            
    <div class="metascore_w large no_tbd movie negative">29</div>
    <span class="release_date">Sep 28</span></a></div><div class="title_wrapper"><a href="/movie/hell-fest"><span>Hell Fest</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/fahrenheit-119"><img src="https://static.metacritic.com/images/products/movies/3/5e647cb5088d9ed624c646a13e6a8eee-250h.jpg" alt="Fahrenheit 11/9" />
    
            
    <div class="metascore_w large no_tbd movie positive">69</div>
    <span class="release_date">Sep 21</span></a></div><div class="title_wrapper"><a href="/movie/fahrenheit-119"><span>Fahrenheit 11/9</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-house-with-a-clock-in-its-walls"><img src="https://static.metacritic.com/images/products/movies/5/68bf32523e93c353a976abd984920310-250h.jpg" alt="The House with a Clock in Its Walls" />
    
            
    <div class="metascore_w large no_tbd movie mixed">57</div>
    <span class="release_date">Sep 21</span></a></div><div class="title_wrapper"><a href="/movie/the-house-with-a-clock-in-its-walls"><span>The House with a Clock in Its...</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/life-itself-2018"><img src="https://static.metacritic.com/images/products/movies/8/0911815ce4601bcedcd4b07752ed0be7-250h.jpg" alt="Life Itself" />
    
            
    <div class="metascore_w large no_tbd movie negative">21</div>
    <span class="release_date">Sep 21</span></a></div><div class="title_wrapper"><a href="/movie/life-itself-2018"><span>Life Itself</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/a-simple-favor"><img src="https://static.metacritic.com/images/products/movies/4/e45447718a075cbda9e26f0448ce464e-250h.jpg" alt="A Simple Favor" />
    
            
    <div class="metascore_w large no_tbd movie positive">67</div>
    <span class="release_date">Sep 14</span></a></div><div class="title_wrapper"><a href="/movie/a-simple-favor"><span>A Simple Favor</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/white-boy-rick"><img src="https://static.metacritic.com/images/products/movies/4/74459d5980669c2a4af2b3ca57daf9f8-250h.jpg" alt="White Boy Rick" />
    
            
    <div class="metascore_w large no_tbd movie mixed">59</div>
    <span class="release_date">Sep 14</span></a></div><div class="title_wrapper"><a href="/movie/white-boy-rick"><span>White Boy Rick</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-predator"><img src="https://static.metacritic.com/images/products/movies/2/361a7b351fdcbcf1566647762cd82aa3-250h.jpg" alt="The Predator" />
    
            
    <div class="metascore_w large no_tbd movie mixed">49</div>
    <span class="release_date">Sep 14</span></a></div><div class="title_wrapper"><a href="/movie/the-predator"><span>The Predator</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/unbroken-path-to-redemption"><img src="https://static.metacritic.com/images/products/movies/9/159d9e69a03474bdbc78ed4f9f1e048f-250h.jpg" alt="Unbroken: Path to Redemption" />
    
            
    <div class="metascore_w large no_tbd movie negative">38</div>
    <span class="release_date">Sep 14</span></a></div><div class="title_wrapper"><a href="/movie/unbroken-path-to-redemption"><span>Unbroken: Path to Redemption</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-nun-2018"><img src="https://static.metacritic.com/images/products/movies/8/043e0e9cbf9fee1e488025ba266f9175-250h.jpg" alt="The Nun" />
    
            
    <div class="metascore_w large no_tbd movie mixed">46</div>
    <span class="release_date">Sep 7</span></a></div><div class="title_wrapper"><a href="/movie/the-nun-2018"><span>The Nun</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/god-bless-the-broken-road"><img src="https://static.metacritic.com/images/products/movies/2/7f333c879f8e907ae343dd546db81283-250h.jpg" alt="God Bless the Broken Road" />
    
            
    <div class="metascore_w large no_tbd movie negative">31</div>
    <span class="release_date">Sep 7</span></a></div><div class="title_wrapper"><a href="/movie/god-bless-the-broken-road"><span>God Bless the Broken Road</span></a></div></div><div class="product last"><div class="img_wrapper"><a href="/movie/peppermint"><img src="https://static.metacritic.com/images/products/movies/2/bfc5eea221ecc32654bad0b04c968763-250h.jpg" alt="Peppermint" />
    
            
    <div class="metascore_w large no_tbd movie negative">29</div>
    <span class="release_date">Sep 7</span></a></div><div class="title_wrapper"><a href="/movie/peppermint"><span>Peppermint</span></a></div></div>
                <div class="clr"></div>
            </div>
        </div>
    </div>
                    </div>
                </div>
            </div>
    
            <div id="mantle_skin">
        
                            
                            <div id="skin" class="ad_unit">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_skin = googletag.defineSlot("/8264/uk-metacritic/movies/home",[1600,1000], "skin").addService(googletag.pubads()).setTargeting("pos", "top");
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("skin");
                                                                </script>
                                            </div>
                            
    
    
        <div id="gutters"></div>
                        
                            
                                <div id="leader_top_wrapper" class="ad_height_min">
                            <div id="leader_plus_top" class="ad_unit">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_leader_plus_top = googletag.defineSlot("/8264/uk-metacritic/movies/home",[[728,90],[970,66],[970,250],[728,91],[321,31],[7,7]], "leader_plus_top").addService(googletag.pubads()).setTargeting("pos", "top");
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("leader_plus_top");
                                                                </script>
                                            </div>
                                </div>
                            
    
    
                
            <div class="content_after_header">
                <div class="coming_soon">
                    <div class="next_to_side_col inset_right">
                        <div class="coming_soon_strip pad_btm2">
        <div class="title_bump">
            <a href="/browse/movies/release-date/coming-soon/date" class="strip_title oswald">COMING SOON</a>
            <a href="/browse/movies/release-date/coming-soon/date" class="title_see_all oswald">see all</a>
    
                        <div class="inset_left2 fr">
                        <div id="comingSoon_Widget_0" class="toggles" data-mcqw="comingSoon_Widget" data-mcqwtype="toggles" data-mcqwset="0"><span class="toggle_tab" data-mcqwval="metascore" data-mcqwqname="val_metascore"><i class="fa fa-check thin"></i><span class="toggle_text">by Metascore</span></span><span class="toggle_tab selected" data-mcqwval="date" data-mcqwqname="val_date"><i class="fa fa-check thin"></i><span class="toggle_text">by Release Date</span></span></div>
    
                </div>
            
            
    
            <div class="clr"></div>
        </div>
    
        
    <div class="image_strip_and_arrows more_right ">
        <div class="slider_arrow slider_previous">
            
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="slider_arrow slider_next">
            
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="image_strip_wrapper">
            <div class="slider_gradient slider_previous light"></div>
            <div class="slider_gradient slider_next light"></div>
            <div class="image_strip">
                <div class="product"><div class="img_wrapper"><a href="/movie/moynihan"><img src="https://static.metacritic.com/images/products/movies/4/cfc2c81c819d9d7cad57f689f966b1a0-250h.jpg" alt="Moynihan" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 3</span></a></div><div class="title_wrapper"><a href="/movie/moynihan"><span>Moynihan</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bayou-caviar"><img src="https://static.metacritic.com/images/products/movies/0/2d67b0e6399477f7608648cf7c4db83c-250h.jpg" alt="Bayou Caviar" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/bayou-caviar"><span>Bayou Caviar</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-bray-road-beast"><img src="https://static.metacritic.com/images/products/movies/6/5a487e368658701455121f39352fcfc6-250h.jpg" alt="The Bray Road Beast" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/the-bray-road-beast"><span>The Bray Road Beast</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/chasing-the-blues"><img src="https://static.metacritic.com/images/products/movies/9/992b8c2d208d73971ab882417d036b9d-250h.jpg" alt="Chasing the Blues" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/chasing-the-blues"><span>Chasing the Blues</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/a-crooked-somebody"><img src="https://static.metacritic.com/images/products/movies/8/0438e56164a1b19ab8e1f206fdf1284e-250h.jpg" alt="A Crooked Somebody" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/a-crooked-somebody"><span>A Crooked Somebody</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-great-buster"><img src="https://static.metacritic.com/images/products/movies/4/3463e9d84bd01898ad0c5e67ef46ff04-250h.jpg" alt="The Great Buster" />
    
            
    <div class="metascore_w large no_tbd movie positive">69</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/the-great-buster"><span>The Great Buster</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-happy-prince"><img src="https://static.metacritic.com/images/products/movies/5/fe0cb8459644619eff6d99f19ded517a-250h.jpg" alt="The Happy Prince" />
    
            
    <div class="metascore_w large no_tbd movie positive">67</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/the-happy-prince"><span>The Happy Prince</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-hate-u-give"><img src="https://static.metacritic.com/images/products/movies/0/5b629388041f06423687d0b5d2bcb24d-250h.jpg" alt="The Hate U Give" />
    
            
    <div class="metascore_w large no_tbd movie positive">79</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/the-hate-u-give"><span>The Hate U Give</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/knuckleball"><img src="https://static.metacritic.com/images/products/movies/9/393ce9728f2834d1e6420cf31061b69c-250h.jpg" alt="Knuckleball" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/knuckleball"><span>Knuckleball</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/living-in-the-futures-past"><img src="https://static.metacritic.com/images/products/movies/5/63a1997e35d1904c33555558589dc8b6-250h.jpg" alt="Living in the Future's Past" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/living-in-the-futures-past"><span>Living in the Future's Past</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/loving-pablo"><img src="https://static.metacritic.com/images/products/movies/7/63a276928781813259999b1e64e6d942-250h.jpg" alt="Loving Pablo" />
    
            
    <div class="metascore_w large no_tbd movie mixed">41</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/loving-pablo"><span>Loving Pablo</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/morning-noon-night"><img src="https://static.metacritic.com/images/products/movies/9/cca3096ade09526427b8377b2d4091ae-250h.jpg" alt="Morning, Noon & Night" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/morning-noon-night"><span>Morning, Noon & Night</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/over-the-limit"><img src="https://static.metacritic.com/images/products/movies/5/e342a1922dc5ab972d9c548045c27c29-250h.jpg" alt="Over the Limit" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/over-the-limit"><span>Over the Limit</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/private-life"><img src="https://static.metacritic.com/images/products/movies/9/130645fb1fb4052e4c62239934dc134c-250h.jpg" alt="Private Life" />
    
            
    <div class="metascore_w large no_tbd movie positive">79</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/private-life"><span>Private Life</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/ride-2018"><img src="https://static.metacritic.com/images/products/movies/6/a62c8a73a1f9e8ebfa8848fd75f75650-250h.jpg" alt="Ride" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/ride-2018"><span>Ride</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/sharkwater-extinction"><img src="https://static.metacritic.com/images/products/movies/6/dcfdb8c574306c046bac44e7fa26a09b-250h.jpg" alt="Sharkwater Extinction" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/sharkwater-extinction"><span>Sharkwater Extinction</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/shine-2018"><img src="https://static.metacritic.com/images/products/movies/7/159bba5fbe795789457a142344d595e1-250h.jpg" alt="Shine" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/shine-2018"><span>Shine</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/a-star-is-born"><img src="https://static.metacritic.com/images/products/movies/9/1028c7727e79e1d5afcbf77965c28d29-250h.jpg" alt="A Star Is Born" />
    
            
    <div class="metascore_w large no_tbd movie positive">87</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/a-star-is-born"><span>A Star Is Born</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/studio-54"><img src="https://static.metacritic.com/images/products/movies/3/05fca5ae280173e0d3ecdce34cd15f74-250h.jpg" alt="Studio 54" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/studio-54"><span>Studio 54</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/trouble"><img src="https://static.metacritic.com/images/products/movies/8/ba43ac87678d2708e9bc613a1ce1c19e-250h.jpg" alt="Trouble" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/trouble"><span>Trouble</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/venom-2018"><img src="https://static.metacritic.com/images/products/movies/4/124afcde1027161bfafc26c54cc86e9f-250h.jpg" alt="Venom" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/venom-2018"><span>Venom</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/viking-destiny"><img src="https://static.metacritic.com/images/products/movies/2/6344c4b57a2424298a6f09803b3f51fe-250h.jpg" alt="Viking Destiny" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 5</span></a></div><div class="title_wrapper"><a href="/movie/viking-destiny"><span>Viking Destiny</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/await-further-instructions"><img src="https://static.metacritic.com/images/products/movies/2/300eb8df5076236b7dceb561ad5cd5ac-250h.jpg" alt="Await Further Instructions" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 6</span></a></div><div class="title_wrapper"><a href="/movie/await-further-instructions"><span>Await Further Instructions</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/22-july"><img src="https://static.metacritic.com/images/products/movies/4/a0b8a4abb3efea38fed4da2f8701acca-250h.jpg" alt="22 July" />
    
            
    <div class="metascore_w large no_tbd movie positive">76</div>
    <span class="release_date">Oct 10</span></a></div><div class="title_wrapper"><a href="/movie/22-july"><span>22 July</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/after-everything"><img src="https://static.metacritic.com/images/products/movies/4/188c18fcf7439de1585bb7b8ba9c9b52-250h.jpg" alt="After Everything" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/after-everything"><span>After Everything</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/all-square"><img src="https://static.metacritic.com/images/products/movies/8/fd687e478d7b6c55ba4390cc87a4569c-250h.jpg" alt="All Square" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/all-square"><span>All Square</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bad-times-at-the-el-royale"><img src="https://static.metacritic.com/images/products/movies/0/6709fcc48fbbbf24d61ef0f0ede5577e-250h.jpg" alt="Bad Times at the El Royale" />
    
            
    <div class="metascore_w large no_tbd movie positive">67</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/bad-times-at-the-el-royale"><span>Bad Times at the El Royale</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/beautiful-boy-2018"><img src="https://static.metacritic.com/images/products/movies/2/6688ddab7a53fe813c6853df3991b6df-250h.jpg" alt="Beautiful Boy" />
    
            
    <div class="metascore_w large no_tbd movie positive">64</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/beautiful-boy-2018"><span>Beautiful Boy</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/beautiful-darkness"><img src="https://static.metacritic.com/images/products/movies/8/54af2c191a4af04579133f57f98503ba-250h.jpg" alt="Beautiful Darkness" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/beautiful-darkness"><span>Beautiful Darkness</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/better-start-running"><img src="https://static.metacritic.com/images/products/movies/0/59069b5b10797bb7b3e27968aef8a1d9-250h.jpg" alt="Better Start Running" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/better-start-running"><span>Better Start Running</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bigger"><img src="https://static.metacritic.com/images/products/movies/6/377c721e9f7841eb8dc8dcb152bf75f3-250h.jpg" alt="Bigger" />
    
            
    <div class="metascore_w large no_tbd movie tbd">tbd</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/bigger"><span>Bigger</span></a></div></div><div class="product last"><div class="img_wrapper"><a href="/movie/first-man"><img src="https://static.metacritic.com/images/products/movies/5/ca09e8acac7b84c25574c334e57b557c-250h.jpg" alt="First Man" />
    
            
    <div class="metascore_w large no_tbd movie positive">83</div>
    <span class="release_date">Oct 12</span></a></div><div class="title_wrapper"><a href="/movie/first-man"><span>First Man</span></a></div></div>
                <div class="clr"></div>
            </div>
        </div>
    </div>
    </div>
    
                    </div>
    
                    <div class="side_col">
                        
                            
                            <div id="mpu_plus_top" class="ad_unit marg_btm2">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_mpu_plus_top = googletag.defineSlot("/8264/uk-metacritic/movies/home",[[300,250],[300,600]], "mpu_plus_top").addService(googletag.pubads()).setTargeting("pos", "top");
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("mpu_plus_top");
                                                                </script>
                                            </div>
                            
    
    
    
                        
        <div id="taboola-right-rail-thumbnails"></div>
        
        <script type="text/javascript">
            if ( window._taboola ) {
                            var placement = 'desktop section_door Right Rail Thumbnails';
                _taboola.push({
                    mode: 'thumbnails-b',
                    container: 'taboola-right-rail-thumbnails',
                    placement: placement,
                    target_type: 'mix'
                });
                        }
        </script>
        
    
                    </div>
    
                    <div class="watch_now pad_btm2 next_to_side_col inset_right">
                            <div class="watch_now_strip">
        <div class="title_bump see_all_helper">
            
            
            
            
            <a href="/browse/movies/score/metascore/all/filtered/netflix" class="strip_title oswald s_a type9 selected" data-mcqwval="9">WATCH NOW ON</a>
            
            <a href="/browse/movies/score/metascore/all/filtered/piv" class="strip_title oswald s_a type8" data-mcqwval="8">WATCH NOW ON</a>
            <a href="/browse/movies/score/metascore/all/filtered/hulu" class="strip_title oswald s_a type4" data-mcqwval="4">WATCH NOW ON</a>
    
            <a href="/browse/movies/score/metascore/all/filtered/netflix" class="title_see_all oswald s_a type9 selected" data-mcqwval="9">see all</a>
            
            <a href="/browse/movies/score/metascore/all/filtered/piv" class="title_see_all oswald s_a type8" data-mcqwval="8">see all</a>
            <a href="/browse/movies/score/metascore/all/filtered/hulu" class="title_see_all oswald s_a type4" data-mcqwval="4">see all</a>
    
            <div class="inset_left2 fr">
                    <div id="watchNow_Widget_0" class="toggles" data-mcqw="watchNow_Widget" data-mcqwtype="toggles" data-mcqwset="0"><span class="toggle_tab selected" data-mcqwval="9" data-mcqwqname="val_9"><i class="fa fa-check thin"></i><span class="toggle_text">Netflix</span></span><span class="toggle_tab" data-mcqwval="8" data-mcqwqname="val_8"><i class="fa fa-check thin"></i><span class="toggle_text">Prime Video</span></span><span class="toggle_tab" data-mcqwval="4" data-mcqwqname="val_4"><i class="fa fa-check thin"></i><span class="toggle_text">Hulu</span></span></div>
    
            </div>
        </div>
    
        
    
    
        
    <div class="image_strip_and_arrows more_right ">
        <div class="slider_arrow slider_previous">
            
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="slider_arrow slider_next">
            
            <i class="fa fa-angle-right"></i>
        </div>
        <div class="image_strip_wrapper">
            <div class="slider_gradient slider_previous light"></div>
            <div class="slider_gradient slider_next light"></div>
            <div class="image_strip">
                <div class="product"><div class="img_wrapper"><a href="/movie/wild-hogs"><img src="https://static.metacritic.com/images/products/movies/3/c5bbce7b1d11f3921650717dc7c3c84b-98.jpg" alt="Wild Hogs" />
    
            
    <div class="metascore_w large no_tbd movie negative">27</div>
    <span class="release_date">Mar 2</span></a></div><div class="title_wrapper"><a href="/movie/wild-hogs"><span>Wild Hogs</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/operation-chromite"><img src="https://static.metacritic.com/images/products/movies/6/423ff83d5655d5f1d8dec75eb7c3a803-250h.jpg" alt="Operation Chromite" />
    
            
    <div class="metascore_w large no_tbd movie mixed">50</div>
    <span class="release_date">Aug 12</span></a></div><div class="title_wrapper"><a href="/movie/operation-chromite"><span>Operation Chromite</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-polka-king"><img src="https://static.metacritic.com/images/products/movies/3/2f45e7774e2ea54795cf8b777702e627-250h.jpg" alt="The Polka King" />
    
            
    <div class="metascore_w large no_tbd movie positive">65</div>
    <span class="release_date">Jan 12</span></a></div><div class="title_wrapper"><a href="/movie/the-polka-king"><span>The Polka King</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/47-meters-down"><img src="https://static.metacritic.com/images/products/movies/5/db3b17dc87188c58b62323ec7cd73d5e-250h.jpg" alt="47 Meters Down" />
    
            
    <div class="metascore_w large no_tbd movie mixed">52</div>
    <span class="release_date">Jun 16</span></a></div><div class="title_wrapper"><a href="/movie/47-meters-down"><span>47 Meters Down</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/captain-underpants"><img src="https://static.metacritic.com/images/products/movies/1/f1f44ef76ba0a6e8249704c55b430ff1-250h.jpg" alt="Captain Underpants: The First Epic Movie" />
    
            
    <div class="metascore_w large no_tbd movie positive">69</div>
    <span class="release_date">Jun 2</span></a></div><div class="title_wrapper"><a href="/movie/captain-underpants"><span>Captain Underpants: The First...</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/dayveon"><img src="https://static.metacritic.com/images/products/movies/1/1eafdbbc2ae3fe4963c536f80e73962d-250h.jpg" alt="Dayveon" />
    
            
    <div class="metascore_w large no_tbd movie positive">69</div>
    <span class="release_date">Sep 13</span></a></div><div class="title_wrapper"><a href="/movie/dayveon"><span>Dayveon</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-conjuring"><img src="https://static.metacritic.com/images/products/movies/4/9583e0be378a8196585d2281b7a079e9-98.jpg" alt="The Conjuring" />
    
            
    <div class="metascore_w large no_tbd movie positive">68</div>
    <span class="release_date">Jul 19</span></a></div><div class="title_wrapper"><a href="/movie/the-conjuring"><span>The Conjuring</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/rogue-one"><img src="https://static.metacritic.com/images/products/movies/9/ab594874bcb3bc0980ebfe2160fddff4-250h.jpg" alt="Rogue One: A Star Wars Story" />
    
            
    <div class="metascore_w large no_tbd movie positive">65</div>
    <span class="release_date">Dec 16</span></a></div><div class="title_wrapper"><a href="/movie/rogue-one"><span>Rogue One: A Star Wars Story</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bright"><img src="https://static.metacritic.com/images/products/movies/1/11263a3a03f19c7849242b63b67f3393-250h.jpg" alt="Bright" />
    
            
    <div class="metascore_w large no_tbd movie negative">29</div>
    <span class="release_date">Dec 22</span></a></div><div class="title_wrapper"><a href="/movie/bright"><span>Bright</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/love-actually"><img src="https://static.metacritic.com/images/products/movies/9/609605f986d5ba4b2afdde24504d5069-250h.jpg" alt="Love Actually" />
    
            
    <div class="metascore_w large no_tbd movie mixed">55</div>
    <span class="release_date">Nov 7</span></a></div><div class="title_wrapper"><a href="/movie/love-actually"><span>Love Actually</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/how-the-grinch-stole-christmas"><img src="https://static.metacritic.com/images/products/movies/7/58a121af9338df11d9b734d06b632dbf-98.jpg" alt="How the Grinch Stole Christmas" />
    
            
    <div class="metascore_w large no_tbd movie mixed">46</div>
    <span class="release_date">Nov 17</span></a></div><div class="title_wrapper"><a href="/movie/how-the-grinch-stole-christmas"><span>How the Grinch Stole Christmas</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/guardians-of-the-galaxy-vol-2"><img src="https://static.metacritic.com/images/products/movies/4/137c1c81c8690a1be39f5a6e31290d05-250h.jpg" alt="Guardians of the Galaxy Vol. 2" />
    
            
    <div class="metascore_w large no_tbd movie positive">67</div>
    <span class="release_date">May 5</span></a></div><div class="title_wrapper"><a href="/movie/guardians-of-the-galaxy-vol-2"><span>Guardians of the Galaxy Vol. 2</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-santa-clause"><img src="https://static.metacritic.com/images/products/movies/8/8681ebb59a9100ea04287ba90f58356f-98.jpg" alt="The Santa Clause" />
    
            
    <div class="metascore_w large no_tbd movie mixed">57</div>
    <span class="release_date">Nov 11</span></a></div><div class="title_wrapper"><a href="/movie/the-santa-clause"><span>The Santa Clause</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/what-happened-to-monday"><img src="https://static.metacritic.com/images/products/movies/1/ff22141f0a8c89f7179a53ca77be1912-250h.jpg" alt="What Happened to Monday" />
    
            
    <div class="metascore_w large no_tbd movie mixed">47</div>
    <span class="release_date">Aug 18</span></a></div><div class="title_wrapper"><a href="/movie/what-happened-to-monday"><span>What Happened to Monday</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-santa-clause-2"><img src="https://static.metacritic.com/images/products/movies/2/8f3c2890210584005e03f0d2a08aad3c-98.jpg" alt="The Santa Clause 2" />
    
            
    <div class="metascore_w large no_tbd movie mixed">48</div>
    <span class="release_date">Nov 1</span></a></div><div class="title_wrapper"><a href="/movie/the-santa-clause-2"><span>The Santa Clause 2</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-santa-clause-3-the-escape-clause"><img src="https://static.metacritic.com/images/products/movies/5/344d5942504b897bc7e2f072b042e30f-98.jpg" alt="The Santa Clause 3: The Escape Clause" />
    
            
    <div class="metascore_w large no_tbd movie negative">32</div>
    <span class="release_date">Nov 3</span></a></div><div class="title_wrapper"><a href="/movie/the-santa-clause-3-the-escape-clause"><span>The Santa Clause 3: The...</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-hateful-eight"><img src="https://static.metacritic.com/images/products/movies/8/7ff62c9679f376510e6da6cb9b189a0e-250h.jpg" alt="The Hateful Eight" />
    
            
    <div class="metascore_w large no_tbd movie positive">68</div>
    <span class="release_date">Dec 25</span></a></div><div class="title_wrapper"><a href="/movie/the-hateful-eight"><span>The Hateful Eight</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-shawshank-redemption"><img src="https://static.metacritic.com/images/products/movies/1/ca66918d936df04504e6db22eec81dab-250h.jpg" alt="The Shawshank Redemption" />
    
            
    <div class="metascore_w large no_tbd movie positive">80</div>
    <span class="release_date">Sep 1</span></a></div><div class="title_wrapper"><a href="/movie/the-shawshank-redemption"><span>The Shawshank Redemption</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/pirates-of-the-caribbean-dead-men-tell-no-tales"><img src="https://static.metacritic.com/images/products/movies/4/2c2baf3b68e5dd689717a1e9f4520a52-250h.jpg" alt="Pirates of the Caribbean: Dead Men Tell No Tales" />
    
            
    <div class="metascore_w large no_tbd movie negative">39</div>
    <span class="release_date">May 26</span></a></div><div class="title_wrapper"><a href="/movie/pirates-of-the-caribbean-dead-men-tell-no-tales"><span>Pirates of the Caribbean:...</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/trolls"><img src="https://static.metacritic.com/images/products/movies/8/d6be536de8b258f91a2ab7873db29531-250h.jpg" alt="Trolls" />
    
            
    <div class="metascore_w large no_tbd movie mixed">56</div>
    <span class="release_date">Nov 4</span></a></div><div class="title_wrapper"><a href="/movie/trolls"><span>Trolls</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/eyes-wide-shut"><img src="https://static.metacritic.com/images/products/movies/3/8d025fa465466f5a8b115b81b2660293-98.jpg" alt="Eyes Wide Shut" />
    
            
    <div class="metascore_w large no_tbd movie positive">68</div>
    <span class="release_date">Jul 16</span></a></div><div class="title_wrapper"><a href="/movie/eyes-wide-shut"><span>Eyes Wide Shut</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/mudbound"><img src="https://static.metacritic.com/images/products/movies/3/4047d65bd54e82b0e3b4eddd025115d4-250h.jpg" alt="Mudbound" />
    
            
    <div class="metascore_w large no_tbd movie positive">85</div>
    <span class="release_date">Nov 17</span></a></div><div class="title_wrapper"><a href="/movie/mudbound"><span>Mudbound</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bad-santa"><img src="https://static.metacritic.com/images/products/movies/7/3001ff359efec3844b7ab3e91da6967c-250h.jpg" alt="Bad Santa" />
    
            
    <div class="metascore_w large no_tbd movie positive">70</div>
    <span class="release_date">Nov 26</span></a></div><div class="title_wrapper"><a href="/movie/bad-santa"><span>Bad Santa</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/moana"><img src="https://static.metacritic.com/images/products/movies/4/4b5d903464d54b247674d2f75c126cb4-250h.jpg" alt="Moana" />
    
            
    <div class="metascore_w large no_tbd movie positive">81</div>
    <span class="release_date">Nov 23</span></a></div><div class="title_wrapper"><a href="/movie/moana"><span>Moana</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-nightmare-before-christmas"><img src="https://static.metacritic.com/images/products/movies/3/79c94a1ca1742d65670652d3c5eca486-250h.jpg" alt="The Nightmare Before Christmas" />
    
            
    <div class="metascore_w large no_tbd movie positive">82</div>
    <span class="release_date">Oct 22</span></a></div><div class="title_wrapper"><a href="/movie/the-nightmare-before-christmas"><span>The Nightmare Before Christmas</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/the-godfather"><img src="https://static.metacritic.com/images/products/movies/3/47c2b1f35087fc23c5ce261bbc3ad9e0-250h.jpg" alt="The Godfather" />
    
            
    <div class="metascore_w large no_tbd movie positive perfect">100</div>
    <span class="release_date">Mar 11</span></a></div><div class="title_wrapper"><a href="/movie/the-godfather"><span>The Godfather</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/captain-america-civil-war"><img src="https://static.metacritic.com/images/products/movies/3/c6ec4356d07737a15ffac33078241335-250h.jpg" alt="Captain America: Civil War" />
    
            
    <div class="metascore_w large no_tbd movie positive">75</div>
    <span class="release_date">May 6</span></a></div><div class="title_wrapper"><a href="/movie/captain-america-civil-war"><span>Captain America: Civil War</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/bad-santa-2"><img src="https://static.metacritic.com/images/products/movies/1/55eb585662b826950e3c5cbb5f54f8ba-250h.jpg" alt="Bad Santa 2" />
    
            
    <div class="metascore_w large no_tbd movie negative">38</div>
    <span class="release_date">Nov 23</span></a></div><div class="title_wrapper"><a href="/movie/bad-santa-2"><span>Bad Santa 2</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/schindlers-list"><img src="https://static.metacritic.com/images/products/movies/4/21d5634a252be7e44d01539998c290e3-98.jpg" alt="Schindler's List" />
    
            
    <div class="metascore_w large no_tbd movie positive">93</div>
    <span class="release_date">Dec 15</span></a></div><div class="title_wrapper"><a href="/movie/schindlers-list"><span>Schindler's List</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/troy"><img src="https://static.metacritic.com/images/products/movies/7/eeb6926625d9b1d132114072e9f4f1ad-98.jpg" alt="Troy" />
    
            
    <div class="metascore_w large no_tbd movie mixed">56</div>
    <span class="release_date">May 14</span></a></div><div class="title_wrapper"><a href="/movie/troy"><span>Troy</span></a></div></div><div class="product"><div class="img_wrapper"><a href="/movie/zootopia"><img src="https://static.metacritic.com/images/products/movies/9/93276b0f25a9b3fe7ac425b335e62656-250h.jpg" alt="Zootopia" />
    
            
    <div class="metascore_w large no_tbd movie positive">78</div>
    <span class="release_date">Mar 4</span></a></div><div class="title_wrapper"><a href="/movie/zootopia"><span>Zootopia</span></a></div></div><div class="product last"><div class="img_wrapper"><a href="/movie/lion"><img src="https://static.metacritic.com/images/products/movies/1/f7f4fd6a08fa65343d4dcd06ffa7e684-250h.jpg" alt="Lion" />
    
            
    <div class="metascore_w large no_tbd movie positive">69</div>
    <span class="release_date">Nov 25</span></a></div><div class="title_wrapper"><a href="/movie/lion"><span>Lion</span></a></div></div>
                <div class="clr"></div>
            </div>
        </div>
    </div>
    </div>
    
    
                        
                            
                            <div id="native_top" class="ad_unit pad_top2 pad_btm1">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_native_top = googletag.defineSlot("/8264/uk-metacritic/movies/home",[[11,11], 'fluid'], "native_top").addService(googletag.pubads()).setTargeting("pos", "top").setTargeting('strnativekey', 'uMFK3MTHcS1Np9UjgnGf8XZV');
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("native_top");
                                                                </script>
                                            </div>
                            
    
    
                    </div>
    
    
                    <div class="clr"></div>
                </div>
    
    
                
                <div class="custom_lists_wrapper pad_btm2">
                    <div class="next_to_side_col">
                        <div class="custom_lists">
                        <div class="custom_list fl">
                <div class="pad_btm2 oswald title_bump_full">
                                        <span class="strip_title">The Best Mission: Impossible Movies</span>
                                </div>
                <div class="custom_items">
                                                                                <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/mission-impossible-fallout">
                                    <span class="num oswald">1</span>
                                    <span class="title inset_left_half">Mission: Impossible – Fallout</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/mission-impossible---rogue-nation">
                                    <span class="num oswald">2</span>
                                    <span class="title inset_left_half">Mission: Impossible - Rogue Nation</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/mission-impossible---ghost-protocol">
                                    <span class="num oswald">3</span>
                                    <span class="title inset_left_half">Mission: Impossible - Ghost Protocol</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/mission-impossible-iii">
                                    <span class="num oswald">4</span>
                                    <span class="title inset_left_half">Mission: Impossible III</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/mission-impossible">
                                    <span class="num oswald">5</span>
                                    <span class="title inset_left_half">Mission: Impossible</span>
                                </a>
                            </div>
                                                    </div>
            </div>
                        <div class="custom_list fl">
                <div class="pad_btm2 oswald title_bump_full">
                                        <span class="strip_title">Our Favorite Reports</span>
                                </div>
                <div class="custom_items">
                                                                                <div class="custom_item">
                                <a href="https://www.metacritic.com/feature/august-2018-movie-preview">
                                    <span class="num oswald">1</span>
                                    <span class="title inset_left_half">14 Films to See in August</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/feature/hulu-best-new-movies-and-shows">
                                    <span class="num oswald">2</span>
                                    <span class="title inset_left_half">Hulu - Best New Additions</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/feature/now-streaming-on-amazon-instant-video">
                                    <span class="num oswald">3</span>
                                    <span class="title inset_left_half">Amazon Video - Best New Additions</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/feature/now-streaming-on-netflix">
                                    <span class="num oswald">4</span>
                                    <span class="title inset_left_half">Netflix - The Best New Additions</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/feature/dvd-blu-ray-release-calendar-august-2018">
                                    <span class="num oswald">5</span>
                                    <span class="title inset_left_half">August - DVD/Blu-ray Release Calendar</span>
                                </a>
                            </div>
                                                    </div>
            </div>
                        <div class="custom_list fl">
                <div class="pad_btm2 oswald title_bump_full">
                                        <span class="strip_title">Streaming Picks</span>
                                </div>
                <div class="custom_items">
                                                                                <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/2001-a-space-odyssey">
                                    <span class="num oswald">1</span>
                                    <span class="title inset_left_half">2001: A Space Odyssey</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/downhill-racer">
                                    <span class="num oswald">2</span>
                                    <span class="title inset_left_half">Downhill Racer</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/kids">
                                    <span class="num oswald">3</span>
                                    <span class="title inset_left_half">Kids</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/in-the-heat-of-the-night">
                                    <span class="num oswald">4</span>
                                    <span class="title inset_left_half">In the Heat of the Night</span>
                                </a>
                            </div>
                                                                                    <div class="custom_item">
                                <a href="https://www.metacritic.com/movie/election-1999">
                                    <span class="num oswald">5</span>
                                    <span class="title inset_left_half">Election</span>
                                </a>
                            </div>
                                                    </div>
            </div>
            <div class="clr"></div>
    </div>
    
                    </div>
    
                    <div class="side_col">
                        
                            
                            <div id="mpu_bottom" class="ad_unit">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_mpu_bottom = googletag.defineSlot("/8264/uk-metacritic/movies/home",[300,250], "mpu_bottom").addService(googletag.pubads()).setTargeting("pos", "bottom");
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("mpu_bottom");
                                                                </script>
                                            </div>
                            
    
    
                    </div>
    
                    <div class="clr"></div>
                </div>
    
                <div>
                    
    
    <div class="playlist">
            <div class="marg_btm1">
            <a href="/browse/movies/trailers/date" class="strip_title oswald">TRAILERS</a>
                        <div class="fr inset_left">
                    <div class="grey">
                        <div id="playlist_Widget_genre" class="styled_select2 grey" data-mcqw="playlist_Widget" data-mcqwtype="selects" data-mcqwset="genre">
        <div class="topper">
                    <div class="disp_selected">
                <span class="text">All Genres</span>
                <span class="sel">
                    <i class="fa fa-chevron-down"></i>
                    <i class="fa fa-check thin"></i>
                </span>
    
            </div>
        </div>
        <div class="options_scroll">
            <div class="options">
                                <div class="option selected" data-mcqwval="" data-mcqwqname="val_">
                        <span class="option_text">All Genres</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="202" data-mcqwqname="val_202">
                        <span class="option_text">Action</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="203" data-mcqwqname="val_203">
                        <span class="option_text">Adventure</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="219" data-mcqwqname="val_219">
                        <span class="option_text">Animation</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="205" data-mcqwqname="val_205">
                        <span class="option_text">Biography</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="213" data-mcqwqname="val_213">
                        <span class="option_text">Comedy</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="215" data-mcqwqname="val_215">
                        <span class="option_text">Crime</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="222" data-mcqwqname="val_222">
                        <span class="option_text">Documentary</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="206" data-mcqwqname="val_206">
                        <span class="option_text">Drama</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="220" data-mcqwqname="val_220">
                        <span class="option_text">Family</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="211" data-mcqwqname="val_211">
                        <span class="option_text">Fantasy</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="4000246" data-mcqwqname="val_4000246">
                        <span class="option_text">Film-Noir</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="1712" data-mcqwqname="val_1712">
                        <span class="option_text">Film Noir</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="207" data-mcqwqname="val_207">
                        <span class="option_text">History</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="212" data-mcqwqname="val_212">
                        <span class="option_text">Horror</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="218" data-mcqwqname="val_218">
                        <span class="option_text">Music</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="221" data-mcqwqname="val_221">
                        <span class="option_text">Musical</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="209" data-mcqwqname="val_209">
                        <span class="option_text">Mystery</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="1762" data-mcqwqname="val_1762">
                        <span class="option_text">News</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="23859" data-mcqwqname="val_23859">
                        <span class="option_text">NSFW</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="1715" data-mcqwqname="val_1715">
                        <span class="option_text">Reality TV</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="214" data-mcqwqname="val_214">
                        <span class="option_text">Romance</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="204" data-mcqwqname="val_204">
                        <span class="option_text">Sci-Fi</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="1710" data-mcqwqname="val_1710">
                        <span class="option_text">Short</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="208" data-mcqwqname="val_208">
                        <span class="option_text">Sport</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="38093" data-mcqwqname="val_38093">
                        <span class="option_text">Talk Show</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="210" data-mcqwqname="val_210">
                        <span class="option_text">Thriller</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="216" data-mcqwqname="val_216">
                        <span class="option_text">War</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                                <div class="option" data-mcqwval="217" data-mcqwqname="val_217">
                        <span class="option_text">Western</span>
                        <span class="sel"><i class="fa fa-check thin"></i></span>
                    </div>
                        </div>
        </div>
    </div>
    
                    </div>
                </div>
            
            <div class="fr">
                <div id="playlist_Widget_rtype" class="toggles" data-mcqw="playlist_Widget" data-mcqwtype="toggles" data-mcqwset="rtype"><span class="toggle_tab selected" data-mcqwval="" data-mcqwqname="val_"><i class="fa fa-check thin"></i><span class="toggle_text">All</span></span><span class="toggle_tab" data-mcqwval="1" data-mcqwqname="val_1"><i class="fa fa-check thin"></i><span class="toggle_text">Wide Release</span></span><span class="toggle_tab" data-mcqwval="0" data-mcqwqname="val_0"><i class="fa fa-check thin"></i><span class="toggle_text">Limited</span></span></div>
    
            </div>
    
    
            <div class="fr">
                <span class="progress ">
        <i class="fa fa-spinner"></i>
    </span>
    
    
                    <div id="playlist_Widget_0" class="toggles marg_right1" data-mcqw="playlist_Widget" data-mcqwtype="toggles" data-mcqwset="0"><span class="toggle_tab selected" data-mcqwval="2" data-mcqwqname="val_2"><i class="fa fa-check thin"></i><span class="toggle_text">In Theaters</span></span><span class="toggle_tab" data-mcqwval="1" data-mcqwqname="val_1"><i class="fa fa-check thin"></i><span class="toggle_text">Coming Soon</span></span></div>
    
            </div>
    
            <div class="clr"></div>
        </div>
        
            <div class="trailer_list_wrapper" style="background-image: url(https://static.metacritic.com/images/products/movies/5/433f88530b2c35149f6f94aa428697c9.jpg);">
            <div class="cutout_mask dark_edges">
                <div class="cutout_mask_left inset_left2">
                    <div class="inset_left">
                                                                                    <div id="playlist_Widget_2" class="toggles reverse_color" data-mcqw="playlist_Widget" data-mcqwtype="toggles" data-mcqwset="2"><span class="toggle_tab selected" data-mcqwval="metascore" data-mcqwqname="val_metascore"><i class="fa fa-check thin"></i><span class="toggle_text">By Metascore</span></span><span class="toggle_tab" data-mcqwval="userscore" data-mcqwqname="val_userscore"><i class="fa fa-check thin"></i><span class="toggle_text">By User Score</span></span></div>
    
    
                                                                <div id="playlist_Widget_1" class="toggles reverse_color disp_none" data-mcqw="playlist_Widget" data-mcqwtype="toggles" data-mcqwset="1"><span class="toggle_tab selected" data-mcqwval="metascore" data-mcqwqname="val_metascore"><i class="fa fa-check thin"></i><span class="toggle_text">By Metascore</span></span><span class="toggle_tab" data-mcqwval="date" data-mcqwqname="val_date"><i class="fa fa-check thin"></i><span class="toggle_text">By Date</span></span></div>
    
                    </div>
    
                    <div class="title_list_wrapper marg_top1">
                        <table class="title_list">
                                                                                
                                                                                                                                                    
                                <tr class="list_item selected" data-bgimg="https://static.metacritic.com/images/products/movies/5/433f88530b2c35149f6f94aa428697c9.jpg" data-mctrailerid="11463384" data-mctrailerurl="/movie/jane-fonda-in-five-acts/trailers/11463384" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=160548&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=8bb10e31b5aea4c761c9285772cd449e"
                data-mcvideotitle="Jane Fonda In Five Acts" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/jane-fonda-in-five-acts" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11930/160548_166.jpg">
                <td class="item_num">
                    1
                </td>
                <td class="item_name">
                    Jane Fonda in Five Acts
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">87</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/8/b2a565e09aec467c645b0e5abef7aa20.jpg" data-mctrailerid="11536569" data-mctrailerurl="/movie/tea-with-the-dames/trailers/11536569" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=49308&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=ee83d9505ce32bba1ba80b98cbb462fd"
                data-mcvideotitle="Tea With The Dames (US Trailer 1)" data-mcwarning="" data-mcrating="NR" data-mcsummaryurl="/movie/tea-with-the-dames" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11940/49308_047.jpg">
                <td class="item_num">
                    2
                </td>
                <td class="item_name">
                    Tea with the Dames
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">86</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/5/47c13d0ec2a7e53618442d0bb7aecf22.jpg" data-mctrailerid="11022348" data-mctrailerurl="/movie/the-old-man-and-the-gun/trailers/11022348" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=108685&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=e3fb3839d9f7f08002938310456237d1"
                data-mcvideotitle="The Old Man &amp; The Gun" data-mcwarning="" data-mcrating="PG-13" data-mcsummaryurl="/movie/the-old-man-and-the-gun" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11834/108685_098.jpg">
                <td class="item_num">
                    3
                </td>
                <td class="item_name">
                    The Old Man & the Gun
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">80</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/9/af9bc403e29ad5bad7da56c17820cda3-2400.jpg" data-mctrailerid="11639734" data-mctrailerurl="/movie/the-sisters-brothers/trailers/11639734" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=22268&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=cb9bef91707ffdaa754b45fe975f371b"
                data-mcvideotitle="The Sisters Brothers (Trailer 2)" data-mcwarning="" data-mcrating="R" data-mcsummaryurl="/movie/the-sisters-brothers" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11964/22268_123.jpg">
                <td class="item_num">
                    4
                </td>
                <td class="item_name">
                    The Sisters Brothers
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">77</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/7/da47336df63a0835765e970e877ea240.jpg" data-mctrailerid="11536567" data-mctrailerurl="/movie/garry-winogrand-all-things-are-photographable/trailers/11536567" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=753888&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=566f0f4167bd0e033bd776aa13ddee2b"
                data-mcvideotitle="Garry Winogrand: All Things Are Photographable" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/garry-winogrand-all-things-are-photographable" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11942/753888_071.jpg">
                <td class="item_num">
                    5
                </td>
                <td class="item_name">
                    Garry Winogrand: All Things are...
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">76</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/0/f7fab2a23f79b99f37bdef9c2f8ea182.jpg" data-mctrailerid="11655082" data-mctrailerurl="/movie/colette/trailers/11655082" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=756721&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=9d0911a0695d24df3fc963a844de7501"
                data-mcvideotitle="Colette (Trailer 2)" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/colette" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11968/756721_068.jpg">
                <td class="item_num">
                    6
                </td>
                <td class="item_name">
                    Colette
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">74</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/1/4138a551147ed75ec8444c09426b069e.jpg" data-mctrailerid="11495715" data-mctrailerurl="/movie/five-fingers-for-marseilles/trailers/11495715" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=50355&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=1c9ec8f13c5b1ef1e39b3f916afb1a6d"
                data-mcvideotitle="Five Fingers For Marseilles (US Red Band Trailer)" data-mcwarning="1" data-mcrating="Not Rated" data-mcsummaryurl="/movie/five-fingers-for-marseilles" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11939/50355_095.jpg">
                <td class="item_num">
                    7
                </td>
                <td class="item_name">
                    Five Fingers For Marseilles
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">73</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/3/15774c152403c3f210f24e286ad553bd.jpg" data-mctrailerid="11465528" data-mctrailerurl="/movie/kusama---infinity/trailers/11465528" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=36753&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=eb3f3827203ca8a7c289a0de9f3c219a"
                data-mcvideotitle="Kusama: Infinity" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/kusama---infinity" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11927/36753_205.jpg">
                <td class="item_num">
                    8
                </td>
                <td class="item_name">
                    Kusama - Infinity
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">73</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/6/7b1fb0e80bac0c6c0d36bfe916fc88a2.jpg" data-mctrailerid="11434347" data-mctrailerurl="/movie/hal/trailers/11434347" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=39665&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=b43b6b9b8475d4869755e6fc689d02ee"
                data-mcvideotitle="Hal" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/hal" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11928/39665_169_1.jpg">
                <td class="item_num">
                    9
                </td>
                <td class="item_name">
                    Hal
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">72</div>
    
                                </td>
            </tr>
                                                                                
                                                                                                                                                    
                                <tr class="list_item" data-bgimg="https://static.metacritic.com/images/products/movies/1/d40c84b71d0349e51830bfc88703d9b8.jpg" data-mctrailerid="11506209" data-mctrailerurl="/movie/susanne-bartsch-on-top/trailers/11506209" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=789113&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=ab8fa6a54480d031e576e33968f6783e"
                data-mcvideotitle="Susanne Bartsch: On Top" data-mcwarning="" data-mcrating="Not Rated" data-mcsummaryurl="/movie/susanne-bartsch-on-top" data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11931/789113_238.jpg">
                <td class="item_num">
                    10
                </td>
                <td class="item_name">
                    Susanne Bartsch: On Top
                </td>
                <td  class="item_score">
                                        
    
            
    <div class="metascore_w small movie positive">71</div>
    
                                </td>
            </tr>
        </table>
    
                    </div>
                    <div class="see_all oswald">
                       <a class="s_a selected" data-mcqwval="2" href="/browse/movies/release-date/theaters/date">SEE ALL IN THEATERS</a>
                       <a class="s_a" data-mcqwval="1" href="/browse/movies/release-date/coming-soon/date">SEE ALL COMING SOON</a>
                    </div>
                </div>
                <div class="cutout_mask_right">
                                                                                        
                    
                            
    
    <script>
        window.anPrebidAsyncInit = function() {
            var prebid = new AudienceNetworkPrebid(
                '195612451022080_220228551893803',
                document.getElementById('ad_video_holder')
            );
            prebid.getProfile(function(profile) {
                var token = profile.token;
                cbsiads_passFBtoken(token);
            });
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.com/en_US/AudienceNetworkPrebid.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'an-prebid'));
        var cbsiads_FBtoken;
        function cbsiads_passFBtoken(token){
            cbsiads_FBtoken = (token=='nobid' || token==null) ? null : 'fan';
        };
    </script>
    
    <div class="video_wrapper cutout_wrapper">
        <div id="agegate" class="agegate">
            <div class="title">
                Please enter your birth date to watch this video:
            </div>
            <div class="select">
                <select class="month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select class="day">
                                        <option value="01">1</option>
                                        <option value="02">2</option>
                                        <option value="03">3</option>
                                        <option value="04">4</option>
                                        <option value="05">5</option>
                                        <option value="06">6</option>
                                        <option value="07">7</option>
                                        <option value="08">8</option>
                                        <option value="09">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                </select>
                <select class="year">
                                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                        <option value="1923">1923</option>
                                        <option value="1922">1922</option>
                                        <option value="1921">1921</option>
                                        <option value="1920">1920</option>
                                        <option value="1919">1919</option>
                                        <option value="1918">1918</option>
                                        <option value="1917">1917</option>
                                        <option value="1916">1916</option>
                                        <option value="1915">1915</option>
                                        <option value="1914">1914</option>
                                        <option value="1913">1913</option>
                                        <option value="1912">1912</option>
                                        <option value="1911">1911</option>
                                        <option value="1910">1910</option>
                                        <option value="1909">1909</option>
                                        <option value="1908">1908</option>
                                        <option value="1907">1907</option>
                                        <option value="1906">1906</option>
                                        <option value="1905">1905</option>
                                        <option value="1904">1904</option>
                                        <option value="1903">1903</option>
                                        <option value="1902">1902</option>
                                        <option value="1901">1901</option>
                                        <option value="1900">1900</option>
                                </select>
                <button type="button" class="ag_button">Enter</button>
            </div>
            <div class="msg">
                You are not allowed to view this material at this time.
            </div>
        </div>
    
        <div class="video_and_autoplay cutout">
            <div id="video_holder_wrapper" data-mctrailerid="11463384" data-mctrailerurl="" data-mcvideourl="https://www.videodetective.net/player.aspx?publishedid=160548&cmd=6&fmt=4&customerid=192333&clientskip=255&videokbrate=2500&e=1538507443&h=8bb10e31b5aea4c761c9285772cd449e"
                 data-mcvideotitle="Jane Fonda In Five Acts" data-mcwarning="" data-mcrating="Not Rated"              data-mctrailerimg="https://content.internetvideoarchive.com/content/photos/11930/160548_166.jpg"             >
    
                
                <div id="video_holder">
                </div>
            </div>
                </div>
    </div>
    
    <script>
        MetaC._utagAutoPlay = false;
    </script>
    
    
                </div>
            </div>
            <div class="more_info oswald"><a href="/movie/jane-fonda-in-five-acts">SEE MORE</a></div>
        </div>
        </div>
    
    
    
    <script>
        $(document).ready(function(){
            // TODO: widgetize me
            MetaC.TrailerList.init();
            var playlist_s_a = $('.trailer_list_wrapper .s_a');
            MetaC.SliderQWs.addQWs($('.playlist .title_list_wrapper'), $('#playlist_Widget_0, #playlist_Widget_1, #playlist_Widget_2, #playlist_Widget_rtype, #playlist_Widget_genre'), $('.playlist .progress'),
                function(widget, isStarting){
                    if ( isStarting ) {
                        if ( widget.attr('id') == 'playlist_Widget_0') {
                            var datetype = widget.find('.selected').data('mcqwval');
                            playlist_s_a.removeClass('selected');
                            playlist_s_a.each(function(id){
                                var obj = $(this);
                                if ( obj.data('mcqwval') == datetype ) {
                                    obj.addClass('selected');
                                    return false;
                                }
                            });
                        }
                    }
                    else {
                        // select the top row in the list
                        var listWrapper = $('.playlist .title_list_wrapper');
                        MetaC.TrailerList.setTo(listWrapper, 1);
                        // figure out which subtab set is appropriate for the parent tab
                        var selptab = $('#playlist_Widget_0').find('.selected');
                        var subtabs = $('.trailer_list_wrapper .toggles');
                        subtabs.each(function (idx) {
                            var obj = $(this);
                            if (obj.data('mcqwset') == selptab.data('mcqwval')) {
                                obj.removeClass('disp_none');
                            }
                            else {
                                obj.addClass('disp_none');
                            }
                        })
                    }
                }
            );
        });
    </script>
    
    
                </div>
            </div>
            </div> 
    
    
        </div>
    
    
    <script>
    
        $(document).ready(function(){
            // TODO: widgetize me
            MetaC.SliderQWs.addQWs($('.new_releases_strip .image_strip'), $('#newReleases_Widget_0'));
            MetaC.SliderQWs.addQWs($('.coming_soon_strip .image_strip'), $('#comingSoon_Widget_0, #comingSoon_Widget_rtype'));
            var watchnow_s_a = $('.watch_now_strip .s_a');
            MetaC.SliderQWs.addQWs($('.watch_now_strip .image_strip'), $('#watchNow_Widget_0'), null, function(widget, isStarting){
                if ( isStarting ) {
                    var seltype = 'type' + widget.find('.selected').data('mcqwval');
                    watchnow_s_a.removeClass('selected');
                    watchnow_s_a.each(function(id){
                        var obj = $(this);
                        if ( obj.hasClass(seltype) ) {
                            obj.addClass('selected');
                        }
                    });
                }
            });
        });
    </script>
    
    
    
    
                                        <div class="mc_obbtm">
                            
            <div id="taboola-below-main-column-thumbnails"></div>
        
        <script type="text/javascript">
            if ( window._taboola ) {
                            var placement = 'desktop section_door Below Main Column Thumbnails';
                _taboola.push({
                    mode: 'alternating-thumbnails-c',
                    container: 'taboola-below-main-column-thumbnails',
                    placement: placement,
                    target_type: 'mix'
                });
                        }
        </script>
        
    
                        </div>
                    
                                        
                            
                            <div id="leader_bottom" class="ad_unit">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_leader_bottom = googletag.defineSlot("/8264/uk-metacritic/movies/home",[[728,90],[970,66],[728,92],[970,250],[7,7]], "leader_bottom").addService(googletag.pubads()).setTargeting("pos", "bottom");
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("leader_bottom");
                                                                </script>
                                            </div>
                            
    
    
                                </div>
            </div>
    
                        
                            
                            <div id="intromercial" class="ad_unit">
                                
                                <script type="text/javascript">
                                                
                            googletag.cmd.push(function() {
                            
                                                                window.metac_g_ad_intromercial = googletag.defineOutOfPageSlot("/8264/uk-metacritic/movies/home",
                                        "intromercial").addService(googletag.pubads());
                                                            
                            
                            });
                            
                                                        window.metac_ads_pushdisplay.push("intromercial");
                                                                </script>
                                            </div>
                            
    
    
            
            <footer id="bottom_footer">
        <div id="providers">
        <a href="https://www.allmusic.com" target="_blank">Music title data, credits, and images provided by <span>AMG</span></a>
        <span class="link_divider">|</span><a href="https://www.imdb.com" target="_blank">Movie title data, credits, and poster art provided by <span>IMDb</span></a>
        <span class="link_divider">|</span><a href="https://www.internetvideoarchive.com" target="_blank">Video and Images provided by <span>IVA</span></a>
        <div id="trademark">
            We Deal With Criticism<sup>&reg;</sup>&nbsp;
        </div>
    </div>
    
    
                <div class="site_links upper">
                        <a href="https://www.metacritic.com/movie">
                    <span>
                                                Movies
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/tv">
                    <span>
                                                TV
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/music">
                    <span>
                                                Music
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/playstation-4">
                    <span>
                                                PS4
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/xbox-one">
                    <span>
                                                XboxOne
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/switch">
                    <span>
                                                Switch
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/pc">
                    <span>
                                                PC
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/wii-u">
                    <span>
                                                WiiU
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/3ds">
                    <span>
                                                3DS
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/playstation-vita">
                    <span>
                                                PS Vita
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/game/ios">
                    <span>
                                                iOS
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/feature">
                    <span>
                                                Reports
                                        </span>
                </a>
                        <a href="https://www.metacritic.com/rss">
                    <span>
                                                RSS Feeds
                                        </span>
                </a>
                    </div>
        
        <div class="pad_top1 pad_btm1">
            <div class="social_round">
                <a href="https://www.facebook.com/Metacritic" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/metacritic" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
            </div>
        </div>
    
        <div class="about_cbs">
            <div id="footer_about_links">
                <a class="first" href="https://www.cbsinteractive.com" target="_blank">About CBS Interactive</a>
                <span class="link_divider">|</span><a href="https://www.cbsinteractive.com/careers/" target="_blank">Jobs</a>
                <span class="link_divider">|</span><a href="https://www.cbsinteractive.com/advertise/" target="_blank">Advertise</a>
                <span class="link_divider">|</span><a href="https://www.metacritic.com/faq">FAQ</a>
                <span class="link_divider">|</span><a href="https://www.metacritic.com/about-metacritic">About Metacritic</a>
                <span class="link_divider">|</span><a href="https://www.metacritic.com/contact-us">Contact</a>
                <span class="link_divider">|</span><span id="footer_privacy"><a href="https://legalterms.cbsinteractive.com/privacy" target="_blank">Privacy Policy</a></span>
                <span class="link_divider">|</span><span id="footer_terms"><a href="https://cbsi.secure.force.com/CBSi/articles/FAQ/CBSi-Terms-of-Use?template=template_tougl&referer=tougl.com&data=&cfs=default" target="_blank">Terms of Use</a></span>
                                <span class="link_divider">|</span><span id="footer_attribution"><a href="https://www.cnet.com/" target="_blank">CNET</a></span>
                        </div>
            <div id="footer_rights" class="pad_btm2">
                &copy; 2018 CBS Interactive Inc. All rights reserved.
            </div>
        </div>
    </footer>
    
    
        </div>
    
    
        
                
    <script type="text/javascript" src="/js/omniture/uuid.js"></script>
    <script type="text/javascript">
        
        if (self != top) {
            top.location = self.location;
        }
        var MC_UUID = uuid.v1();
    </script>
    
    
    
     
    <script language="JavaScript" type="text/javascript">
        
        var utag_data = {
            isDev:0,
                                siteType:"desktop web",
                    deviceType:"desktop",
                    siteSection:"movies",
                    pageType:"section_door",
                    pageFindingMethod:"External",
                    session: MetaC.adSession() + ':' + MetaC.adSubses(),
                    userId:null,userState:"not authenticated",userType:"anon",bkPath:"/8264/uk-metacritic/movies/home",_test:"redesign|movie|new",pageViewGuid:MC_UUID
        };
        
        
        
        
        if ( window.eventAmazonBuyView ) {
            utag_data.eventAmazonBuyView = 1;
        }
        if ( window.eventAmazonPivView ) {
            utag_data.eventAmazonPivView = 1;
        }
        
        
        
        if ( MetaC._utagAutoPlay != -1 ) {
            utag_data.videoAutoPlay = MetaC._utagAutoPlay ? 'on' : 'off';
        }
        
    
        
    </script>
    
    
    
    
    <script type="text/javascript">
        
        
        var __pv = MetaC.handleGooglePageView();
        googletag.cmd.push(function() {
            
            googletag.pubads().setTargeting("ptype", "section_door");
                                googletag.pubads().setTargeting("test", "mcnew");
                    
            googletag.pubads().setTargeting("vguid", MC_UUID);
            googletag.pubads().setTargeting("session", MetaC.adSession());
            googletag.pubads().setTargeting("subses", MetaC.adSubses());
            googletag.pubads().setTargeting("env", "prod");
                            var parts = window.location.hash.split("=");
            if ( parts.length > 1 && parts[0] == '#ftag' ) {
                googletag.pubads().setTargeting("ftag",parts[1]);
            }
            
                    
            
            if ( window.I11C) {
                if (window.I11C.Morph && window.I11C.Morph === 1) {
                    utag_data.adBlockRecovery = "unblocked";
                    utag_data.adsAreBlocked = "true";
    
                    var geo = MetaC.Cookie.get('il_geo');
                    if ( geo ) {
                        geo = MetaC.Cookie.ilParse(geo);
                        if ( geo && geo.postal_code && geo.country_code ) {
                            googletag.pubads().setLocation(geo.postal_code + ',' + geo.country_code)
                        }
                    }
                } else {
                    utag_data.adBlockRecovery = 'instart_noop';
                    utag_data.adsAreBlocked = "false";
                }
            } else {
                utag_data.adBlockRecovery = 'no_instart';
                utag_data.adsAreBlocked = "false";
            }
    
            googletag.pubads().setTargeting("pv", __pv+""); // must be a string
    
            googletag.pubads().enableAsyncRendering();
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            if (window.metac_ads_push_progressive_display && window.metac_ads_push_progressive_display.length)
                googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        });
        
        
    
        
        
        if ( MetaC && MetaC.Video ) {
            
                        
        }
        
    </script>
    
    
    
    
    
        <script type="text/javascript" src="https://urs.metacritic.com/sdk/urs.js"></script>
    
    
        <script type="text/javascript">
            if ( window.MetaC && MetaC.URS ) {
                MetaC.URS.config(227, false);
            }
        </script>
    
    
    
    
    
    <script type="text/javascript">
        (function(a,b,c,d){
        a='//tags.tiqcdn.com/utag/cbsi/metacriticsite/prod/utag.js';
        b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
        a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
        })();
    </script>
    
    
    
    
        <script type="text/javascript">
            $(document).ready(function(){
                setTimeout(function(){
                    MetaC.checkOmniEvents();
                }, 300);
            });
        </script>
    
    
    
    
    
    
    <script type="text/javascript">
        
        dwVars = {"siteId":"50","onId":"12456","ptId":"2001"};
        if (typeof DW == "object"){
            DW.pageParams = dwVars;
            DW.regSilo = '12';
            DW.clear();
        }
    </script>
    
    
    
    
    <script>
        var cbsiApexGlobal = {
            'SITE': dwVars.siteId,
            'NODE': dwVars.onId,
            'PTYPE':dwVars.ptId
        };
    </script>
    
    
    
    
    
    <script>
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-22577913-5']);
        _gaq.push(['_setCustomVar',1,'PageType',dwVars.ptId,3]);
        _gaq.push(['_trackPageview']);
        _gaq.push(['_trackPageLoadTime']);
        _gaq.push(['_setAllowLinker', true]);
        _gaq.push(['nT._setAccount', 'UA-27653683-1']);
        _gaq.push(['nT._setAllowLinker', true]);
        _gaq.push(['nT._setSampleRate', '1']);
        _gaq.push(['nT._trackPageview']);
    </script>
    
    
    
    <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '123113677890173',
                version    : 'v2.6',
                channelUrl : 'https://www.metacritic.com/static/fbchannel.html',
                status     : true,
                xfbml      : true,
                cookie     : true
                });
             MetaC.FB.initialized();
            };
        
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
    </script>
    
    
    
    <script>
        window.twttr = (function (d,s,id) {
          var t, js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
          js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
          return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
        }(document, "script", "twitter-wjs"));
    
        twttr.ready(function (twttr) {
            MetaC.Twitter.initialized();
        });
    </script>
    
    
    
    
    
    <script>
        /* display the google ads now that the html is finished processing */
        googletag.cmd.push(function() {
            MetaC.displayAds();
            if (window.metac_ads_push_progressive_display && window.metac_ads_push_progressive_display.length)
                MetaC._refreshWithLightSpeed(window.metac_ads_pushdisplay);
        });
    </script>
    
    
    
    
    <script>
        
        
        if ( window._taboola && window.mcwait_taboola == null ) {
            _taboola.push({flush: true});
        }
        
    </script>
    
    
        <div id="amzn-assoc-ad-23cf2fa7-c9fd-4908-97de-fbc48a779984"></div>
        <script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=23cf2fa7-c9fd-4908-97de-fbc48a779984"></script>
        
    
    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"860f7644b8","applicationID":"2033002","transactionName":"MgQEZ0dYCxEAVRBbDQtOJUZGTQoPTnsLRAsAKRNRDwMMDAVTHA==","queueTime":0,"applicationTime":232,"atts":"HkMHEQ9CGB8=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
    </html>`;
    }
})();