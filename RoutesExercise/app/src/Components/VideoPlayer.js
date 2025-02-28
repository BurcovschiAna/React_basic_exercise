import ReactPlayer from "react-player";
export default function VideoPlayer() {
    return (
        <div className="body-container-video">
            <div className="video-container">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=nyxKQYWaWOg" 
                controls={true}
                height="100%"
                width="100%"
                />
            </div>
            <div className="video-container-2">
                <ReactPlayer 
                    url={require("../Assets/video/20th Century Fox Intro [HD].mp4")} 
                    controls={true}
                    height="100%"
                    width="100%"
                    onReady={() => console.log("Video is ready")}
                    onStart={() => console.log("Vidoe has started")}
                    onPlay={() => console.log("Video is playing")}
                    onPause={() => console.log("Video is on pause")}
                    onEnded={() => console.log("Video has ended")}
                    onError={() => console.log("error")}
                />
            </div>
        </div>
    );
}