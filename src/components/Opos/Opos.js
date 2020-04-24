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
                    <h2 className="title">Estudios 1</h2>
                    <p className="copy">Aenean velit felis, interdum tristique odio eget, tempor convallis felis. Phasellus et dui purus.</p><button class="btn">Más información</button></div>
                </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Estudios 2</h2>
                    <p className="copy">Proin odio neque, mattis eu augue eu, lacinia lacinia augue. Aliquam euismod nibh quis purus euismod bibendum. </p><button class="btn">Suscríbete</button></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Estudios 3</h2>
                    <p className="copy">Pellentesque sit amet luctus sem, sit amet mollis libero. Fusce in maximus lacus.</p><button class="btn">Reserva</button></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Estudios 4</h2>
                    <p className="copy">Maecenas vitae nisi sit amet purus egestas tincidunt sed condimentum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><button class="btn">Contacta</button></div>
            </div>
        </main>
    )
}
 
export default Opos;