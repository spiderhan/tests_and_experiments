import React from 'react';
import ReactDOM from 'react-dom';


function Card (props) {
    return <h2 style={myelement_style}>Hi I am a { props.brand } car!</h2>;
}

const myelement = <Card brand="Ford" />;
const myelement_style = {
    fontFamily: 'arial',
    fontSize: '50px',
    color: 'green'
}

//ReactDOM.render (myfirstelement, document.getElementById('root'));
ReactDOM.render (myelement, document.getElementById('root'));