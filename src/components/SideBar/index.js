import React, { useState } from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarMenu, SidebarLink, SidebarWrap, SidebarRoute } from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {

    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Dessers</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SidebarWrap>

        </SidebarContainer>
    )
}

export default Sidebar
