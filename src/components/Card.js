import React from 'react'
export default function Card(props) {
    return (
        <div className="gap-8 my-8 mx-12 md:flex md:items-center md:max-w-3xl md:mx-auto">
            <div className="shrink-0 md:w-56 md:h-72 overflow-hidden">
                <img src={props.image} alt={props.destination} className="object-cover rounded-xl md:w-56 md:h-72" />
            </div>
            <div className="">
                <h5 className="flex items-center justify-start mt-4 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f55a5a]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="uppercase tracking-widest ml-2">
                        {props.location}
                    </span>
                    <span className="ml-4 underline text-[#91839b]">View on google maps</span>
                </h5>
                <h1 className="font-bold text-4xl mt-2 mb-8">
                    {props.destination}
                </h1>
                <div className="font-bold">
                    {props.dates.start} - {props.dates.end}
                </div>
                <p className="text-[#91839b]">
                    {props.description}
                </p>
            </div>
        </div>
    )
};
