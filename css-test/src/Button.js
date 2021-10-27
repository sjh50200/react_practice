import React from 'react';
import Style from './Button.module.scss';
console.log(Style);

const Button = ({ size }) => {
	if(size === 'big') {
    	return <button className={`${Style.button} ${Style.big}`}>큰 버튼</button>;
    } else {
    	return <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>;
    }
}

export default Button;