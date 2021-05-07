import React from "react"
import { Timeline } from 'react-twitter-widgets'

interface IProps {
    account: String;
}

const TwitterContainer = (props: IProps) => {
    return (
        <>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: props.account
                }}
                options={{
                    height: '80vh',
                }}
            />
        </>
    )
}

export default TwitterContainer;
