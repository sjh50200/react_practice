import React from 'react';
import Style from './Box.module.scss';
console.log(Style);

const Box = ({ size }) => {
	if(size === 'big') {
    	return <div className={`${Style.box} ${Style.big}`}>큰 박스</div>;
    } else {
    	return <div className={`${Style.box} ${Style.small}`}>작은 박스</div>;
    }
}

export default Box;