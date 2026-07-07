let loadedSongs = [];

const loadBtn = document.getElementById('load-songs-btn');
const randomBtn = document.getElementById('random-song-btn');
const playlistUI = document.getElementById('playlist');
const randomBox = document.getElementById('random-box');
const randomSongTitle = document.getElementById('random-song-title');

loadBtn.addEventListener('click', () => {
    fetch('songs.txt')
        .then(response => {
            if (!response.ok) throw new Error('Файл songs.txt не знайдено.');
            return response.text();
        })
        .then(text => {
            loadedSongs = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
            playlistUI.innerHTML = '';
            
            loadedSongs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = song;
                playlistUI.appendChild(li);
            });

            if (loadedSongs.length > 0) {
                randomBtn.style.display = 'inline-block';
            }
        })
        .catch(error => alert('Помилка: ' + error.message));
});
randomBtn.addEventListener('click', () => {
    if (loadedSongs.length === 0) return;
    const randomIndex = Math.floor(Math.random() * loadedSongs.length);
    randomSongTitle.textContent = loadedSongs[randomIndex];
    randomBox.style.display = 'block';
});
