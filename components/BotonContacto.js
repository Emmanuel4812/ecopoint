    import React from 'react'
    
    const BotonContacto = props => (

        <div className="flex justify-center mt-6 ">
            <a 
                href={props.href}
                className="text-white text-center font-elegant font-bold hover:text-blueEco   sm:text-xl md:text-2xl lg:text-4xl bg-greenEco rounded-full p-3"
                >
                    {props.text}
            </a>
    
        </div>
            
    
    );
    
    export default BotonContacto
    