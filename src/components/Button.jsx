import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({className, href, onClick, childre,px,white}) => {
 const renderButton = () => (
    <button><span>{Children}</span>
    {ButtonSvg(white)}
    </button>
 );
 return renderButton();
};

export default Button;
