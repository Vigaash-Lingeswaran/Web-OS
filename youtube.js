var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubeplayer;
var currentvideoindex =0;

var videoplaylist =
[
    'D4qAQYlgZQs',
    'EnhS3matIoU',
    'pjlm3lVyZ1A',
    'lAtrwYJBr2w'

]

function onYouTubeIframeAPIReady()
{
    
}

window.onYouTubeIframeAPIReady = function()
{
    youtubeplayer = new YT.Player('youtubeplayer', 
        {
            height: '280',
            width: '800',
            videoId: videoplaylist[currentvideoindex],
            playerVars: {
                'playsinline': 1,
                'origin': window.location.origin,
                'host': 'https://www.youtube.com'
            }, 
            events:{
                'onReady': onPlayerReady, 
                'onStateChange': onPlayerStateChange
            }
        }
    );
};

function onPlayerReady(event)
{
    event.target.playVideo();

}

function onPlayerStateChange(event)
{
    if (event.data === YT.PlayerState.ENDED)
    {
        currentvideoindex++;
    
            if (currentvideoindex<videoplaylist.length)
            {
                youtubeplayer.loadVideoById(videoplaylist[currentvideoindex]);
            }
            else
            {
                console.log("Trailers are all done.");
            }
    }
}