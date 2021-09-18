import React from 'react';

const BotonEstudio = props => (

    <div className="flex justify-center mt-6 ">
        <a 
            href={props.href}
            className="text-white text-center font-elegant font-bold hover:text-greenEco   sm:text-xl md:text-2xl lg:text-4xl bg-blueEco rounded-full p-3"
            >
                {props.text}
        </a>

    </div>
        

);


export default BotonEstudio
