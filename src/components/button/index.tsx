import React from 'react';

const componentName: string = 'c-button';

const Button = ({ onClick, text, link, classList, className, children }: ButtonProps) => {
  const ButtonTag = link ? 'a' : 'button';
  const ButtonClass: Array<string> = [componentName];
  if (classList) {
    classList.forEach((Class) => {
      ButtonClass.push(`${componentName}--${Class}`);
    });
  }
  if (className) {
    ButtonClass.push(className);
  }

  return (
    <ButtonTag
      className={ButtonClass.join(' ')}
      href={link ? link : undefined}
      onClick={() => (onClick ? onClick() : null)}
    >
      {text ? text : children}
    </ButtonTag>
  );
};

export interface ButtonProps {
  onClick?: Function;
  text?: string;
  classList?: Array<string>;
  link?: string;
  className?: string;
  children?: any;
}

export default Button;
