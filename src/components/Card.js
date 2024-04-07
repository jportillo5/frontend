import React, { useState } from 'react';
//import axios from 'axios';
//import SongForm from './SongForm';

const Card = ({ title, artist, album, id }) => {
    const [isDeleted, setIsDeleted] = useState(false);
    

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const onDelete = async () => {
        try {
            //const response = await axios.delete(`/api/songRoutes/${id}`); //port number does not need to be explicitly declared since we added it to package.json
            //console.log('Delete request successful:', response.data);
            //setIsDeleted(true);
        } catch (error) {
            console.error('Error fulfilling delete request:', error);
        }
    };

    function renderData() {
        return(
            <div style={cardStyle}>
                <h2>{title}</h2>
                <p>By: <strong>{artist}</strong></p>
                <p>Album: <strong>{album}</strong></p>

                <button onClick={onDelete}>Delete</button>
            </div>
        );
    }

    return (
        <div>
            {renderData()}
        </div>
    );
}

export default Card;