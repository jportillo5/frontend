//import { useEffect, useState } from 'react';
import SongContainer from '../components/SongContainer';
import SongForm from '../components/SongForm';

const Home = () => {

    return (
        <div className="home">
            <h2>Home</h2>
            <h5>Submit a Song</h5>
            <hr />
            <SongForm />
            <hr />
            <SongContainer />
        </div>
    );
}

export default Home;