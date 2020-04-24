import React from 'react';
import OpoI1 from '../Opos/OpoI1.png';
import OpoI2 from '../Opos/OpoI2.png';
import OpoI3 from '../Opos/OpoI3.png';
import OpoI4 from '../Opos/OpoI4.png';

import '../Opos/Opos.css';


function Opos(){
    return(
        <main className="page-content">
            <div className="card">
                <div className="content">
                    <h2 className="title">Mountain View</h2>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p><button class="btn">View Trips</button></div>
                </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">To The Beach</h2>
                    <p className="copy">Plan your next beach trip with these fabulous destinations</p><button class="btn">View Trips</button></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Desert Destinations</h2>
                    <p className="copy">It's the desert you've always dreamed of</p><button class="btn">Book Now</button></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Explore The Galaxy</h2>
                    <p className="copy">Seriously, straight up, just blast off into outer space today</p><button class="btn">Book Now</button></div>
            </div>
        </main>
    )
}
 
export default Opos;