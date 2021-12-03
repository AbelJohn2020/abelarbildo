import React from 'react';
import { globalstate } from '../../App';
import Icons from '../Icons/Icons';
import { drop } from '../TaskTitle/TaskTitle';
import { DivImageOption, DivName, Option } from './DropDownStyles';

type owner = {
    avatar: string,
    fullName: string,
}

type dropdown = {
    options: owner[] | string[],
    image: boolean,
    nameImage: string,
    name: string,
    icon: string,
    dropdownState: drop[],
    setDropdownState: React.Dispatch<React.SetStateAction<drop[]>>,
    globalState: globalstate,
    setGlobalData: React.Dispatch<React.SetStateAction<globalstate>>,
    keyState: string,
}

const DropDown = ({options, image, nameImage, name, icon, dropdownState, setDropdownState, globalState, setGlobalData, keyState}: dropdown) => {
    const handleClick = () => {
        const activeDeactivate = dropdownState && dropdownState.map( prevState => {
            if(prevState.id === name) {
                return { ...prevState, isActive: !prevState.isActive }
            } else {
                return { ...prevState, isActive: false }
            }
        })

        setDropdownState(activeDeactivate);
    }

    const handleChange = (e: any ) => {
        setGlobalData({...globalState, [keyState]: e.target.value || e.target.id })

        const activeDeactivate = dropdownState && dropdownState.map( prevState => {
            return { ...prevState, isActive: false }
        })

        setDropdownState(activeDeactivate);
    }

    const blankSpace = (state: any) => {
        return state[keyState];
    }

    const getId = () => {
        return dropdownState.find( ({id}) => id === name )
    }
    
    const showHide = getId();
    const noContent = blankSpace && blankSpace(globalState)

    return (
        <div>
            <div onClick={handleClick}>
                {
                    noContent === ""
                        ?   <DivName>
                                <div>
                                    {
                                        image
                                            ?   <i className='iconImageTT'>
                                                    <img src={nameImage} alt="icon minus plus"/>
                                                </i>
                                            :   <Icons type={icon} className="icons" />
                                    }
                                </div>
                                <div>{name}</div>
                            </DivName>
                        :   <DivName>{noContent}</DivName>
                }
                
            </div>
            <div>
                {
                    showHide && showHide.id === name && showHide.isActive === true
                        &&  options && options.map( (option: owner | string) => (
                                <Option
                                    key={ typeof(option) === 'string' ? option :  option.fullName} 
                                    value={typeof(option) === 'string' ? option :  option.fullName}
                                    onClick={handleChange}
                                >
                                    <DivImageOption 
                                        id={typeof(option) === 'string' ? option :  option.fullName}
                                        image={typeof(option) !== 'string' && option.avatar } 
                                    >
                                    </DivImageOption>
                                    {typeof(option) === 'string' ? option :  option.fullName}
                                </Option>
                            ))
                }
            </div>
        </div>
    )
}

export default DropDown;
