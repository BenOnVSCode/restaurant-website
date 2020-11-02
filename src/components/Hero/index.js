import React, { useState } from 'react'
import Navbar from '../Navbar' 
import Sidebar from '../SideBar'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn, HeroItems } from './HeroElements'

const Hero = () => {
    const [isOpen, setisOpen] = useState(false) ;

    const handleSidebar = () => {
        setisOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={handleSidebar} />
            <Sidebar isOpen={isOpen} toggle={handleSidebar} />
            <HeroContent>
                <HeroItems> 
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order </HeroBtn>
                </HeroItems>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
