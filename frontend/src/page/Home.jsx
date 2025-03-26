import React from 'react'
import Opening from '../components/Layout/Opening'
import Services from '../components/Layout/services'
import Techstack from '../components/Layout/Techstack'
import Team from '../components/Layout/Team'

const Home = () => {
    return (
        <section>
            <Opening />
            <Services />
            <Techstack />
            <Team />
        </section>

    )
}

export default Home
