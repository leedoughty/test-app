import React from 'react'
import Note from './Note'
import {mount, shallow} from 'enzyme'

describe('<Note />', () => {
  it('render default note with New Note', () => {
    const wrapper = mount(<Note note=''>New Note</Note>);
    expect(wrapper.find('p').text()).toBe('New Note');
  });
});
