import React from 'react';

const objectName = 'o-column';

const Column = ({ tag, classList, children, sizes }: ColumnProps) => {
  const ComponentTag = tag ? tag : 'div';
  let ComponentClass = [objectName];

  if (classList) {
    classList.forEach((Class) => {
      ComponentClass.push(Class);
    });
  }
  if (sizes) {
    Object.entries(sizes).forEach(([column, size]) => {
      let classToAdd = `${objectName}-${size}`;
      if (['xs', 'sm', 'md', 'lg'].includes(column)) {
        classToAdd += `@${column}`;
      }
      if (!ComponentClass.includes(classToAdd)) {
        ComponentClass.push(classToAdd);
      }
    });
  }

  return <ComponentTag className={ComponentClass.join(' ')}>{children}</ComponentTag>;
};

export interface ColumnProps {
  tag?: any;
  classList?: Array<string>;
  children?: any;
  sizes: object;
}

export default Column;
