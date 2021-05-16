import React from "react";

interface IProps {
    title: string;
    description: string;
}

const Banner = (props: IProps) => {
    return (
        <div className="banner">
            <div className="homepage-banner-text">
                <div>
                    <h1>Mynd</h1>
                    <p>A place to socialise</p>
                </div>
            </div>
        </div>
    )
}


export default Banner;
