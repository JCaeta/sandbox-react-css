import React from 'react';
import { Component2 } from '../../components/Component2/Component2'

export default
{
    title: 'Component2',
    Component2: Component2,
}

const Template = args => <Component2 {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{

}