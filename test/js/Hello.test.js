import React from 'react';
import Hello from '../../frontend/components/hello'
import renderer from 'react-test-renderer';

test('Hello', () => {
    const component = renderer.create(
      <Hello />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
