import React from 'react'
import { prevstate } from '../../App'
import { Button } from '../Buttons/Buttons'
import Icons from '../Icons/Icons'
import { Input } from '../Input/Input'
import TaskTitle from '../TaskTitle/TaskTitle'
import { colors } from '../UI/colors'
import { HeaderIcons, HeaderIconsPLus, PlusBox, PlusButton } from './HeaderStyles'

type navIcons = {
    id: string,
    type: string,
}

type header = {
    inputValue: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    navbarIcons: navIcons[],
    selected: prevstate[],
    plus: boolean,
    setPlus: React.Dispatch<React.SetStateAction<boolean>>,
    inputValueTaskTitle: string,
    setInputValueTaskTitle: React.Dispatch<React.SetStateAction<string>>,
}

const Header = ({inputValue, handleChange, navbarIcons, selected, plus, setPlus, inputValueTaskTitle, setInputValueTaskTitle}: header) => {
    const handleClick = () => {
      setPlus(!plus)
    }
    return (
        <div className="App__right--icons">
          <Input 
            inputType="text"
            name="search"
            placeholder="search"
            value={inputValue}
            onChange={handleChange}
            isThereFirstIcon={true}
            firstIcon="search"
            isThereSecondIcon={true}
            secondIcon="notifications"
            photo={true}
            profile="gaa" //modificar
            width="100%"
            color={colors.neutral2}
            inputPlaceholder={colors.neutral2}
            border="none"
            inputPadding="20px 0"
            inputMargin="0"
            inputBackground="transparent"
            radius="16px"
            background={colors.neutral4}
          />
          <HeaderIconsPLus plus={plus} width="66.2">
            <HeaderIcons>
              {
                navbarIcons.map(({id, type}) => (
                  <Button 
                    key={id}
                    id={id} 
                    type={type} 
                    border={colors.primary4}
                    clickedColor={colors.primary4}
                    color={colors.neutral2}
                    selected={selected}
                  />
                ))
              }
            </HeaderIcons>
              <PlusBox>
              {
                plus && <TaskTitle inputValueTaskTitle={inputValueTaskTitle} setInputValueTaskTitle={setInputValueTaskTitle} />
              }
                <PlusButton onClick={handleClick}>
                  <Icons type="plus" className="plusIcon" />
                </PlusButton>
              </PlusBox>
          </HeaderIconsPLus>
        </div>
    )
}

export default Header
