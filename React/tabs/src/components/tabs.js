import React from "react";

const Tabs = (props) => {

    const handleClicks = (e, val) => {
        props.clickHandler(e, val);
        let clicked = document.querySelector('.tab-click');
        e.currentTarget.className='tab-click';
        clicked.className='tab';
    }

    const ani = e => {
        let clicked = document.querySelector('.tab-click');
        e.target.className='tab-click';
        clicked.className='tab';
    }

    return (
        <div className="tabs">
        {props.titles.map( (item, index) => {
        return (
            <div className="tab" onClick={(e) => {handleClicks(e, item[1])}}>
            <p>{item[0]}</p>
            </div>
        )
        })}
        </div>
    )
}

export default Tabs;