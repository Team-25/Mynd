import React from "react"
import format from 'date-fns/format'
import './user-calendar.scss'
import Button from '@material-ui/core/Button';

interface IProps {
    date: Date;
    class: string;
}

const Day: React.FC<IProps> = (props: IProps) => {
    return (
        <Button>
            {/* TODO ONCLICK GET THE DAYS EVENTS  */}
            <div className={props.class}>
                {format(props.date,'dd')}
            </div>
        </Button>
    )
}

export default Day;