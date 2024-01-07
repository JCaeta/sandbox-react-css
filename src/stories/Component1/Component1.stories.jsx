import React from 'react';
import { Component1 } from '../../components/Component1/Component1'

export default
{
    title: 'Component1',
    Component1: Component1,
}

const Template = args => <Component1 {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{

}