import React from 'react';
import './Bar.css';

const Bar = ({ lang }) => {
    let skill_level = `${lang.level}%`;
    return (
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': skill_level
            }}>
                <span className="bar__name">
                    <img src={lang.icon} className="bar__icon mr-2" alt="icon" />{lang.name}
                </span>
            </div>
        </div>
    )
}

export default Bar;
