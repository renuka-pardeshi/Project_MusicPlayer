//An array of song objects, each containing title, artist, thumbnail, duration, and src properties
const songs = [
    {
        title: "Alone",
        artist: "Alan Walker",
        thumbnail: "Thumbnails/Alone.jpg",
        duration: "02:41",
        src: "Songs/Alone.mp3"
    },
    {
        title: "Alone, Pt. II",
        artist: "Alan Walker, Ava Max",
        thumbnail: "Thumbnails/Alone II.jpg",
        duration: "02:59",
        src: "Songs/Alone, Pt. II.mp3"
    },
    {
        title: "Baby",
        artist: "Justin Bieber, Ludacris",
        thumbnail: "Thumbnails/Baby.jpg",
        duration: "03:34",
        src: "Songs/Baby.mp3"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        thumbnail: "Thumbnails/Believer.jpg",
        duration: "03:24",
        src: "Songs/Believer.mp3"
    },
    {
        title: "Blue",
        artist: "Billie Ellish",
        thumbnail: "Thumbnails/Blue.jpg",
        duration: "05:43",
        src: "Songs/Blue.mp3"
    },
    {
        title: "Dandelions",
        artist: "Ruth B.",
        thumbnail: "Thumbnails/Dandelions.jpg",
        duration: "03:53",
        src: "Songs/Dandelions.mp3"
    },
    {
        title: "Despacito",
        artist: "Luis Fonsi, Daddy Yankee",
        thumbnail: "Thumbnails/Despacito.jpg",
        duration: "03:48",
        src: "Songs/Despacito.mp3"
    },
    {
        title: "Faded",
        artist: "Alan Walker",
        thumbnail: "Thumbnails/Faded.jpg",
        duration: "03:32",
        src: "Songs/Faded.mp3"
    },
    {
        title: "Gasolina",
        artist: "Daddy Yankee",
        thumbnail: "Thumbnails/Gasolina.jpg",
        duration: "03:12",
        src: "Songs/Gasolina.mp3"
    },
    {
        title: "Heat Waves",
        artist: "Glass Animals",
        thumbnail: "Thumbnails/Heat Waves.jpg",
        duration: "03:58",
        src: "Songs/Heat Waves.mp3"
    },
    {
        title: "Infinity",
        artist: "Jaymes Young",
        thumbnail: "Thumbnails/Infinity.jpg",
        duration: "03:57",
        src: "Songs/Infinity.mp3"
    },
    {
        title: "Let Me Down Slowly",
        artist: "Alec Banjamin",
        thumbnail: "Thumbnails/Let Me Down Slowly.jpg",
        duration: "02:49",
        src: "Songs/Let Me Down Slowly.mp3"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        thumbnail: "Thumbnails/Levitating.jpg",
        duration: "03:23",
        src: "Songs/Levitating.mp3"
    },
    {
        title: "Night Changes",
        artist: "One Direction",
        thumbnail: "Thumbnails/Night Changes.jpg",
        duration: "03:46",
        src: "Songs/Night Changes.mp3"
    },
    {
        title: "On & On",
        artist: "Cartoon, Jeja, Daniel Levi",
        thumbnail: "Thumbnails/On & On.jpg",
        duration: "03:27",
        src: "Songs/On & On.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        thumbnail: "Thumbnails/Perfect.jpg",
        duration: "04:23",
        src: "Songs/Perfect.mp3"
    },
    {
        title: "Señorita",
        artist: "Shawn Mendes, Camila Cabello",
        thumbnail: "Thumbnails/Señorita.jpg",
        duration: "03:10",
        src: "Songs/Señorita.mp3"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        thumbnail: "Thumbnails/Shape of You.jpg",
        duration: "03:53",
        src: "Songs/Shape of You.mp3"
    },
    {
        title: "Snap",
        artist: "Rosa Linn",
        thumbnail: "Thumbnails/Snap.jpg",
        duration: "02:59",
        src: "Songs/Snap.mp3"
    },
    {
        title: "Stay (with Justin Bieber)",
        artist: "The Kid LAROI, Justin Bieber",
        thumbnail: "Thumbnails/Stay.jpg",
        duration: "02:21",
        src: "Songs/Stay (with Justin Bieber).mp3"
    },
    {
        title: "Unstoppable",
        artist: "Sia",
        thumbnail: "Thumbnails/Unstoppable.jpg",
        duration: "03:37",
        src: "Songs/Unstoppable.mp3"
    }, 
];

  let currentSongIndex = 0; //The current song index
  let isPlaying = false; //Whether the song is playing or not
  
  const songContainer = document.querySelector(".song-container"); //The song container element
  const songThumbnail = document.querySelector(".song-thumbnail"); //The song thumbnail element
  const songTitle = document.querySelector(".song-title"); //The song title element
  const songArtist = document.querySelector(".song-artist"); //The song artist element
  const slider = document.querySelector(".slider"); //The slider element
  const songDuration = document.querySelector(".song-duration"); //The song duration element
  const prevBtn = document.querySelector(".prev-btn"); //The previous button element
  const playPauseBtn = document.querySelector(".play-pause-btn"); //The play/pause button element
  const nextBtn = document.querySelector(".next-btn"); //The next button element
  const audio = document.querySelector(".audio"); //The audio element
  
  //Updates the song information and audio source
  function updateSong() {
    const currentSong = songs[currentSongIndex];
    songThumbnail.src = currentSong.thumbnail;
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    songDuration.textContent = `00:00 / ${currentSong.duration}`;
    audio.src = currentSong.src;
  }
  
  // Formats a time in seconds to a string in the format MM:SS
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  }
  
  updateSong();
  slider.value = 0;
  
  //Listens for input events on the slider and updates the audio current time
  slider.addEventListener("input", () => {
    audio.currentTime = (slider.value / 100) * audio.duration;
  });
  
  //Listens for time update events on the audio element and updates the slider and song duration
  audio.addEventListener("timeupdate", () => {
    if (audio.duration && !isNaN(audio.duration)) {
      const sliderValue = (audio.currentTime / audio.duration) * 100;
      slider.value = sliderValue;
      songDuration.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  });
  
  //Listens for ended events on the audio element and updates the slider and song duration
  audio.addEventListener("ended", () => {
    slider.value = 0;
    songDuration.textContent = `00:00 / ${audio.duration}`;
    if (currentSongIndex < songs.length - 1) {
      currentSongIndex++;
      updateSong();
      audio.play();
    }
  });
  
  //Listens for click events on the previous button and updates the current song index
  prevBtn.addEventListener("click", () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = songs.length - 1;
    }
    updateSong();
    if (isPlaying) {
      audio.play();
    }
  });
  
  //Listens for click events on the next button and updates the current song index
  nextBtn.addEventListener("click", () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    updateSong();
    if (isPlaying) {
      audio.play();
    }
  });
  
  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.classList.remove("playing");
      playPauseBtn.textContent = "Play";
      isPlaying = false;
    } else {
      audio.play();
      playPauseBtn.classList.add("playing");
      playPauseBtn.textContent = "Pause";
      isPlaying = true;
    }
  });