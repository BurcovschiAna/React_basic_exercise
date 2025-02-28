function Song(props) {
    return (
        <div className="song-item" id={`song-${props.index}`}>
            <p>{props.name}</p>
            <p>{props.artist}</p>
            <div className="btn-play" onClick={props.play}> Play</div>
        </div>
    );
}

const data = [
    {
        src: require("../Assets/audio/Animals - The House Of The Rising Sun.mp3"),
        name: "The House Of The Rising Sun",
        artist: "Animals",
    },
    {
        src: require("../Assets/audio/Back In Black.mp3"),
        name: "Back In Black",
        artist: "AC/DC",
    },
    {
        src: require("../Assets/audio/Bon Jovi - Bad Medicine.mp3"),
        name: "Bad Medicine",
        artist: "Bon Jovi",
    },
    {
        src: require("../Assets/audio/Bon Jovi - It's My Life.mp3"),
        name: "It's My Life",
        artist: "Bon Jovi",
    },
    {
        src: require("../Assets/audio/Bon Jovi - Livin' On A Prayer.mp3"),
        name: "Livin' On A Prayer",
        artist: "Bon Jovi",
    },
];
const modifiedData = data.map((item, index) => {
    const audio = new Audio(item.src);
    
    return {
        ...item,
        playMusic: () => {
            const activeSongs = document.getElementsByClassName("song-item");
            Array.from(activeSongs).forEach(element => {
                element.classList.remove("active");
            });
            const currentSongElement = document.getElementById(`song-${index}`);
            console.log(currentSongElement);
            
            if (currentSongElement) {
                currentSongElement.classList.toggle("active");
            }
            
            audio.paused ? audio.play() : audio.pause();
        },
    };
    });

export default function MusicPlayer() {
    return (
        <div className="flexbox body-container">
            {modifiedData.map((item, index) => (
                <Song 
                    key={index}
                    index={index} 
                    name={item.name} 
                    artist={item.artist} 
                    play={item.playMusic} 
                />
            ))}
        </div>
    );
  }