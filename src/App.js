import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'
export default function App() {

    const cards = data.map(loc => {
        return <Card 
            key={loc.id}
            {...loc}
        />
    })
    return (
        <div className="font-inter">
            <Navbar />
            <section className='' id="locations">
                {cards}
            </section>
        </div>
    )
}