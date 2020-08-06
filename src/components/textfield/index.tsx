import React from 'react';

const componentName: string = 'c-textfield';

const Textfield = ({ name, id, type = 'text', placeholder, classList, Icon }: TextfieldProps) => {
  const InputClass = [`${componentName}__input`, 'u-w-100'];
  if (classList) {
    classList.forEach((Class) => {
      InputClass.push(Class);
    });
  }

  return Icon ? (
    <div className={`${componentName} u-w-100`}>
      <div className="u-relative u-w-100">
        <div className={`${componentName}__icon o-icon`}>
          <Icon />
        </div>
        <input id={id} name={name} type={type} className={InputClass.join(' ')} placeholder={placeholder} />
      </div>
    </div>
  ) : (
    <input id={id} name={name} type={type} className={InputClass.join(' ')} placeholder={placeholder} />
  );
};

export interface TextfieldProps {
  placeholder: string;
  name: string;
  type: string;
  id: string;
  classList: Array<string>;
  Icon: Function;
}

export default Textfield;
