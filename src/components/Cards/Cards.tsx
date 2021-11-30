import React from 'react'
import { useQuery } from '@apollo/client';
import CardModel from '../CardModel/CardModel';
import { TASKS } from '../queries/queries';
import { card, Task } from './TypeCard';
import { Title } from '../Titles/Titles';
import { ButtonHeaderCardStyles, HeaderModelCardStyles } from '../CardModel/CardModelStyles';
import { colors } from '../UI/colors';
import Icons from '../Icons/Icons';
import { Column, DashBoardStyles } from './CardsStyles';
import Loading from '../Loading/Loading';

const Cards = () => {
    const { loading, error, data } = useQuery(TASKS);
    const { tasks } = (data !== undefined) && data;
    
    const getBacklog = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "BACKLOG" );
        } else {
            return tasks;
        }
    }

    const getInProgress = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "IN_PROGRESS" );
        } else {
            return tasks;
        }
    }

    const getTodo = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "TODO" );
        } else {
            return tasks;
        }
    }

    const getCancelled = () => {
        if(tasks !== undefined) {
            return tasks.filter(({status}: Task) => status.toString() === "CANCELLED" );
        } else {
            return tasks;
        }
    }
    
    const backlog = getBacklog();
    const inProgress = getInProgress();
    const todo = getTodo();
    const cancelled = getCancelled();

    return (
        <div>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error 404</p>
            }
            <DashBoardStyles>
                <Column>
                    <HeaderModelCardStyles>
                        <Title
                            name={`backlog(${backlog && backlog.length})`}
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
                    <div>
                        {
                            loading ?   <Loading />
                                    :   backlog.map(({ id, dueDate, name, owner, pointEstimate, tags }: card) => (
                                            <div key={id}>
                                                <CardModel
                                                        dueDate={dueDate} 
                                                        name={name} 
                                                        pointEstimate={pointEstimate} 
                                                        tags={tags} 
                                                        owner={owner}
                                                    />
                                            </div>
                                        )) 
                        }
                    </div>
                </Column>

                <Column>
                    <HeaderModelCardStyles>
                        <Title
                            name={`todo(${todo && todo.length})`}
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
                    <div>
                        {
                            loading ?   <Loading />
                                    :   todo.map(({ id, dueDate, name, owner, pointEstimate, tags }: card) => (
                                            <div key={id}>
                                                <CardModel
                                                        dueDate={dueDate} 
                                                        name={name} 
                                                        pointEstimate={pointEstimate} 
                                                        tags={tags} 
                                                        owner={owner}
                                                    />
                                            </div>
                                        ))
                        }
                    </div>
                </Column>

                <Column>
                    <HeaderModelCardStyles>
                        <Title
                            name={`in progress(${inProgress && inProgress.length})`}
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
                    <div>
                        {
                            loading ?   <Loading />
                                    :   inProgress.map(({ id, dueDate, name, owner, pointEstimate, tags }: card) => (
                                            <div key={id}>
                                                <CardModel
                                                        dueDate={dueDate} 
                                                        name={name} 
                                                        pointEstimate={pointEstimate} 
                                                        tags={tags} 
                                                        owner={owner}
                                                    />
                                            </div>
                                        )) 
                        }
                    </div>
                </Column>

                <Column>
                    <HeaderModelCardStyles>
                        <Title
                            name={`cancelled(${cancelled && cancelled.length})`}
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
                    <div>
                        {
                            loading ?   <Loading />
                                    :   cancelled.map(({ id, dueDate, name, owner, pointEstimate, tags }: card) => (
                                            <div key={id}>
                                                <CardModel
                                                        dueDate={dueDate} 
                                                        name={name} 
                                                        pointEstimate={pointEstimate} 
                                                        tags={tags} 
                                                        owner={owner}
                                                    />
                                            </div>
                                        )) 
                        }
                    </div>
                </Column>
            </DashBoardStyles>
        </div>
    )
}

export default Cards
