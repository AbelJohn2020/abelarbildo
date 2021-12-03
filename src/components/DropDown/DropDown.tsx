import React from 'react';
import { globalstate } from '../../App';
import Icons from '../Icons/Icons';
import { drop } from '../TaskTitle/TaskTitle';
import { ContainerName, ContainerOptions, DivImageOption, DivName, DivNameOption, ImgDropDown, Name, Option } from './DropDownStyles';

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
    margin: string,
    padding: string,
    width: string,
    paddingOption: string,
}

const DropDown = ({options, image, nameImage, name, icon, dropdownState, setDropdownState, globalState, setGlobalData, keyState, margin, padding, width, paddingOption}: dropdown) => {
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
            <ContainerName onClick={handleClick} margin={margin} padding={padding}>
                {
                    noContent === ""
                        ?   <DivName>
                                <DivName>
                                    {
                                        image
                                            ?   <i className='iconImageTT'>
                                                    <ImgDropDown src={nameImage} alt="icon minus plus"/>
                                                </i>
                                            :   <Icons type={icon} className="icons" />
                                    }
                                </DivName>
                                <Name>{name}</Name>
                            </DivName>
                        :   <DivNameOption>{noContent}</DivNameOption>
                }
                
            </ContainerName>
            <ContainerOptions margin={margin} width={width}>
                {
                    showHide && showHide.id === name && showHide.isActive === true
                        &&  options && options.map( (option: owner | string) => (
                                <Option
                                    key={ typeof(option) === 'string' ? option :  option.fullName} 
                                    value={typeof(option) === 'string' ? option :  option.fullName}
                                    onClick={handleChange}
                                    margin={paddingOption}
                                >
                                    <DivImageOption 
                                        id={typeof(option) === 'string' ? option :  option.fullName}
                                        image={typeof(option) !== 'string' && option.avatar }
                                        objectImage={option}
                                    >
                                    </DivImageOption>
                                    {typeof(option) === 'string' ? option :  option.fullName}
                                </Option>
                            ))
                }
            </ContainerOptions>
        </div>
    )
}

export default DropDown;
