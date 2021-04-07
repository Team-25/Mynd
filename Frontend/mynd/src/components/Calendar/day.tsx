import React from "react"
import format from 'date-fns/format'
import './user-calendar.scss'
import Button from '@material-ui/core/Button';

interface IProps {
    date: Date;
}

const Day: React.FC<IProps> = (props: IProps) => {
    return (
        <Button>
            {/* TODO ONCLICK GET THE DAYS EVENTS  */}
            {format(props.date,'dd')}
        </Button>
    )
}

export default Day;