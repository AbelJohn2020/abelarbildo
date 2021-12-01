import React from 'react';
import Icons from '../Icons/Icons';
import { Title } from '../Titles/Titles';
import wordsToNumbers from 'words-to-numbers';
import { cardmodel } from '../Cards/TypeCard';
import { BoxDay, BoxIconCardStyles, BoxImg, BoxTagCard, ButtonHeaderCardStyles, ContainerModelCard, FooterIconsCardStyles, HeaderModelCardStyles, Img, Tags } from './CardModelStyles';
import { colors } from '../UI/colors';

const footerIconsCard = [
    {id: 1, number: '', type: "clip"},
    {id: 2, number: 5, type: "share"},
    {id: 3, number: 3, type: "message"},
]

const CardModel = ({ dueDate, name, pointEstimate, tags, owner }: cardmodel) => {
    const converEestimate = () => {
        const lower =  pointEstimate.toString().toLowerCase();
        return wordsToNumbers(lower);
    }
    
    const estimate = converEestimate();

    const convertDueDate = () => {
        const date = new Date();
        const today = date.toDateString();

        const newDate = new Date(dueDate);
        const day = newDate.toDateString();

        const arrToday = today.split(' ');
        const arrDay = day.split(' ');

        if(arrToday[1] === arrDay[1] && arrToday[3] === arrDay[3]) {
            if(Number(arrToday[2]) === Number(arrDay[2])) {
                return 'today';
            } else {
                if(Number(arrToday[2]) === (Number(arrDay[2]) + 1)) {
                    return 'yesterday';
                } else {
                    if((Number(arrToday[2]) + 1) === Number(arrDay[2])) {
                        return 'tomorrow'
                    } else {
                        return day;
                    }
                }
            }
        } else {
            return day;
        }
    }

    const dueDt = convertDueDate();

    return (
        <ContainerModelCard>
            <HeaderModelCardStyles>
                <Title
                    name={name}
                    family="SF Pro Display"
                    fontStyle="normal" 
                    weight="600" 
                    size="18px" 
                    lineHeight="32px" 
                    display="flex" 
                    align="flex-start" 
                    spacing="0.75px" 
                    transform="capitalize"
                />
                <div>
                    <ButtonHeaderCardStyles color={colors.neutral2} size="18px">
                        <Icons type="ellipsis" className="cardIcon" />
                    </ButtonHeaderCardStyles>
                </div>
            </HeaderModelCardStyles>
            <HeaderModelCardStyles>
                <Title
                    name={estimate && estimate > 1 ? `${estimate} points` : `${estimate} point`}
                    family="SF Pro Display"
                    fontStyle="normal" 
                    weight="600" 
                    size="15px" 
                    lineHeight="24px" 
                    display="flex" 
                    align="flex-start" 
                    spacing="0.75px" 
                    transform="capitalize"
                />
                <BoxDay>
                    <BoxIconCardStyles padding="0" margin="0 8px 0 0">
                        <ButtonHeaderCardStyles color={colors.neutral} size="20px">
                            <Icons type="alarm" className="cardIcon" />
                        </ButtonHeaderCardStyles>
                    </BoxIconCardStyles>
                    <Title
                        name={dueDt}
                        family="SF Pro Display"
                        fontStyle="normal" 
                        weight="600" 
                        size="12px" 
                        lineHeight="20px" 
                        display="flex" 
                        align="flex-start" 
                        spacing="0.75px" 
                        transform="uppercase"
                    />
                </BoxDay>
            </HeaderModelCardStyles>
            <Tags>
                {
                    tags.length > 0 && tags.map(tag => (
                        <BoxTagCard key={tag} tag={tag.toString()}>{tag}</BoxTagCard>
                    ))
                }
            </Tags>
            <HeaderModelCardStyles>
                <BoxImg>
                    <Img src={owner.avatar} alt="profile" />
                </BoxImg>
                <FooterIconsCardStyles>
                    {
                        footerIconsCard.map(({id, number, type}) => (
                            <FooterIconsCardStyles key={id}>
                                <BoxIconCardStyles padding="0" margin="0 6px 0 0">{ number }</BoxIconCardStyles>
                                <BoxIconCardStyles padding="0" margin="0 18px 0 0">
                                    <ButtonHeaderCardStyles color={colors.neutral} size="18px">
                                        <Icons type={type} className="cardIcon" />
                                    </ButtonHeaderCardStyles>
                                </BoxIconCardStyles>
                            </FooterIconsCardStyles>
                        ))
                    }
                </FooterIconsCardStyles>
            </HeaderModelCardStyles>
        </ContainerModelCard>
    )
}

export default CardModel
