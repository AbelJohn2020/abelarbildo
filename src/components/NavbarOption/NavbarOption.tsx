import React from 'react'
import { Link } from 'react-router-dom'
import { prevstate } from '../../App'
import Icons from '../Icons/Icons'
import { Title } from '../Titles/Titles'
import { colors } from '../UI/colors'
import { BoxIcon, NavbarOptionStyles } from './NavbarOptionStyles'

export type navbarOption = {
    selected: prevstate[],
    setSelected: React.Dispatch<React.SetStateAction<prevstate[]>>,
    id: string,
    link: string,
    name: string,
    type: string,
}

const NavbarOption = ({ id, link, name, type, selected, setSelected }: navbarOption) => {
    
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newArr = selected.map((prevState) => {
            if(prevState.id === event.currentTarget.id ) {
                return { id: prevState.id, active: prevState.active = true }
            } else {
                return { id: prevState.id, active: prevState.active = false }
            }
        });

        const add = [...selected, ...newArr];
        const newState = add.filter( (addStates, index, self) => index === self.findIndex((s) => s.id === addStates.id && s.active === addStates.active));

        setSelected(newState);
    }

    const findTrue = (divId: string) => {
        if((e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)) {
            return selected.find(({id, active}) => divId === id && active === true)
        }
    }
    
    const blankSpace = findTrue(id) !== undefined && findTrue(id);

    return (
        <NavbarOptionStyles id={id} state={blankSpace}>
            <Link to={link} className='navbarOption' id={id} onClick={handleClick}>
                <BoxIcon background={colors.neutral4}>
                    <Icons type={type} className="icons" />
                </BoxIcon>
                <Title 
                    name={name}
                    family="SF Pro Display" 
                    fontStyle="normal"
                    weight="600" 
                    size="16px"
                    lineHeight="24px"
                    display="flex"
                    align="center"
                    transform="uppercase"
                    spacing="0.75px"
                />
            </Link>
            <div className="red"></div>
        </NavbarOptionStyles>
    )
}

export default NavbarOption
