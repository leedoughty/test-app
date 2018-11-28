import React from 'react'
import Note from './Note'
import {mount, shallow} from 'enzyme'

describe('<Note />', () => {
  it('render default note with New Note', () => {
    const wrapper = mount(<Note note=''>New Note</Note>);
    expect(wrapper.find('p').text()).toBe('New Note');
  });
  it('places note in random location', () => {
    const firstNote = mount(<Note >New Note</Note>);
    const secondNote = mount(<Note >New Note</Note>);
    expect(firstNote.find('.note').prop('style')).not.toBe(secondNote.find('.note').prop('style'))
  })
});
