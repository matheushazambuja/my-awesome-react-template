import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import { Button } from '../../components';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container.remove();
});

describe('<Button />', () => {
  test('Check button props', async () => {
    const testRenderer = TestRenderer.create(<Button>TestButtonText</Button>);
    const rendererProps: any = testRenderer.toJSON();
    const { type, children } = rendererProps;
    expect(type).toBe('button');
    expect(children).toStrictEqual(['TestButtonText']);
  });

  test('Render check', async () => {
    act(() => {
      ReactDOM.render(<Button>My Button</Button>, container);
    });
    const myButton: any = container.querySelector('button');
    expect(myButton.textContent).toBe('My Button');
  });

  test('Test onClick', async () => {
    const mockFunction = jest.fn();
    act(() => {
      ReactDOM.render(<Button onClick={mockFunction}>My Button</Button>, container);
    });
    const myButton: any = container.querySelector('button');
    act(() => {
      myButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockFunction).toHaveBeenCalled();
  });
});
