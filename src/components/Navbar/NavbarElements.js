import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components' 
import { FaPizzaSlice } from 'react-icons/fa'


export const Nav = styled.div `
    background: transparent ;
    height: 80px ;
    display: flex ;
    justify-content: center ;
    font-weight: 700 ;
`

export const NavLink = styled(Link) `
    color: #fff ;
    font-size: 2rem ;
    display: flex ;
    align-items: center ;
    text-decoration: none ;
    cursor: pointer ;



    @media screen and (max-width: 400px) {
        position: absolute ;
        top: 10px ;
        left: 25px ;
    }
`

export const NavIcon = styled.div `
    display: block ;
    position: absolute ;
    top: .4rem ;
    right: 0 ;
    cursor: pointer ;
    color: #fff ;

    p {
        transform: translate(-170%, 100%) ;
        font-weight: bold ;
    }

`

export const Bars = styled(FaPizzaSlice) `
    font-size: 2rem ;
    margin-top: .7rem ;
    transform: translate(-50%, -50%) ;
`