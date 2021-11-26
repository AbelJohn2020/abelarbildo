import React from 'react'
import Icons from '../Icons/Icons'
import { BoxIconsInput, BoxInput, DefaulPhoto, InputStyles } from './InputStyles'

type input = {
    inputType: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    isThereFirstIcon: boolean,
    firstIcon: string,
    isThereSecondIcon: boolean,
    secondIcon: string,
    photo: boolean,
    profile: string,
    width: string,
    color: string,
    border: string,
    inputPlaceholder: string,
    inputPadding: string,
    inputMargin: string,
    inputBackground: string,
}

export const Input = ({ 
    inputType,
    name,
    placeholder,
    value,
    onChange,
    isThereFirstIcon,
    isThereSecondIcon,
    firstIcon,
    secondIcon,
    photo,
    profile,
    width,
    color,
    border,
    inputPlaceholder,
    inputPadding, 
    inputMargin, 
    inputBackground,
}: input) => {
    return (
        <BoxInput isThereFirstIcon={isThereFirstIcon} isThereSecondIcon={isThereSecondIcon} photo={photo}>
            {
                isThereFirstIcon && <BoxIconsInput><Icons type={firstIcon} className="iconInput" /></BoxIconsInput>
            }
            <InputStyles 
                placeholder={placeholder}
                autoComplete='off'
                type={inputType} 
                name={name}
                value={value}
                onChange={onChange}
                width={width}
                color={color}
                border={border}
                inputPlaceholder={inputPlaceholder}
                inputPadding={inputPadding}
                inputMargin={inputMargin}
                inputBackground={inputBackground}
            />
            {
                isThereSecondIcon && <BoxIconsInput><Icons type={secondIcon} className="iconInput" /></BoxIconsInput>
            }
            {
                photo && <DefaulPhoto><Icons type="assignee" className="iconInput" /></DefaulPhoto>
            }
        </BoxInput>
    )
}

