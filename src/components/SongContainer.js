import React, { useState, useEffect } from 'react';
import Card from './Card';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await fetch('/api/songRoutes'); //port number does not need to be explicitly declared since we added it to package.json
            const json = await response.json();
                
            if (response.ok) {
                setSongs(json);
            }
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h1>Submitted Songs</h1>
            <div className="songs-container">
                {songs && songs.map((song) => (
                    <Card key={song.id} {...song} />
                ))}

<style jsx>{`
            .songs-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 20px;
            border: '1px solid #ccc';
            padding: '15px';
            margin: '10px';
            borderRadius: '8px';
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)';
            backgroundColor: '#fff';
            }
      `}</style>
            </div>
        </div>
    );
}

export default SongContainer;