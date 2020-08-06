import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import { Column } from '../../components';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container.remove();
});

describe('<Column />', () => {
  test('Check column props', async () => {
    const testRenderer = TestRenderer.create(<Column sizes={{ xs: 12, sm: 6, md: 4 }}>Column Content</Column>);
    const rendererProps: any = testRenderer.toJSON();
    const { type, props, children } = rendererProps;
    expect(type).toBe('div');
    expect(children).toStrictEqual(['Column Content']);
    expect(props.className).toBe('o-column o-column-12@xs o-column-6@sm o-column-4@md');
  });

  test('Column render check', async () => {
    act(() => {
      ReactDOM.render(<Column sizes={{ xs: 12, sm: 6, md: 4 }}>Column Content</Column>, container);
    });
    const myColumn: any = container.querySelector('.o-column');
    expect(myColumn.textContent).toBe('Column Content');
  });
});
