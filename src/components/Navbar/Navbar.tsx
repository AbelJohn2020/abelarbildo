import React from 'react'
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import Logo from '../iconsImages/logo.png';
import { BoxIcon, BoxImage, Img, NavbarStyles } from './NavbarStyles';
import { Title } from '../Titles/Titles';
import { colors } from '../UI/colors';

const Navbar = () => {
    return (
        <NavbarStyles>
            <BoxImage>
                <Img src={Logo} alt="Ravn logo" />
            </BoxImage>
            <Link to="/dashboard" className='navbarOption'>
                <BoxIcon background={colors.neutral4}>
                    <Icons type="dashBoard" className="icons" />
                </BoxIcon>
                <Title 
                    name="dashboard"
                    family="SF Pro Display" 
                    fontStyle="normal" 
                    weight="600" 
                    size="16px"
                    lineHeight="24px"
                    display="flex"
                    align="center"
                    spacing="0.75px"
                    transform="uppercase"
                    background={colors.neutral4}
                />
            </Link>
            <Link to="/hamburger" className='navbarOption'>
                <BoxIcon background={colors.neutral4}>
                    <Icons type="hamburger" className="icons" />
                </BoxIcon>
                <Title 
                    name="my task"
                    family="SF Pro Display" 
                    fontStyle="normal" 
                    weight="600" 
                    size="16px"
                    lineHeight="24px"
                    display="flex"
                    align="center"
                    spacing="0.75px"
                    transform="uppercase"
                    background={colors.neutral4}
                />
            </Link>
        </NavbarStyles>
    )
}

export default Navbar;
