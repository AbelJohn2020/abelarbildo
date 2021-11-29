import React from 'react'
import Logo from '../iconsImages/logo.png';
import { BoxImage, Img, NavbarStyles } from './NavbarStyles';
import { prevstate } from '../../App';
import NavbarOption from '../NavbarOption/NavbarOption';

export type navbar = {
    selected: prevstate[],
    setSelected: React.Dispatch<React.SetStateAction<prevstate[]>>,
    inputValueTaskTitle: string,
    setInputValueTaskTitle: React.Dispatch<React.SetStateAction<string>>
}

const options = [
    { id: "1", link: "/dashboard", name: "dashboard", type: "dashBoard"},
    { id: "2", link: "/mytask", name: "my task", type: "hamburger"},
    { id: "3", link: "/profile", name: "profile", type: "assignee" },
];

const Navbar = ({ selected, setSelected }: navbar) => {
    return (
        <NavbarStyles>
            <BoxImage>
                <Img src={Logo} alt="Ravn logo" />
            </BoxImage>
            <div>
                {
                    options.map(({ id, link, name, type }) => (
                        <NavbarOption
                            key={id}
                            id={id}
                            link={link}
                            name={name}
                            type={type}
                            selected={selected} 
                            setSelected={setSelected} 
                        />
                    ))
                }
            </div>
        </NavbarStyles>
    )
}

export default Navbar;
