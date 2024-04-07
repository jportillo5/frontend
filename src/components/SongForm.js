import React, { useState } from 'react';
import { Form, Button, Alert, Container,  Row, Col } from 'react-bootstrap';
//import axios from 'axios';






const SongForm = ({ }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [error, setError] = useState('');

    //handle submission logic
    const handleSubmit = async (event) => {
        event.preventDefault();

        const song = {title, artist, album};

        const response = await fetch('/api/songRoutes', { //port number does not need to be explicitly declared since we added it to package.json
            method: 'POST',
            body: JSON.stringify(song),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
            
        if(!response.ok) {
            setError(json.error);
        } else {
            setTitle('');
            setArtist('');
            setAlbum('');
            setError(null);
            console.log('Song created successfully: ', json);
        }
        //onClose();
        
    };
    

    //form content
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Song Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Artist:
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Album Name:
                    <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
                </label>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
      <button type="submit">Submit</button>
        </form>
    );
};

export default SongForm;