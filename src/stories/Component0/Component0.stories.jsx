import React from 'react';
import { Component0 } from '../../components/Component0/Component0';
import { customViewports } from './storiesConfiguration';

export default
{
    title: 'Component0',
    component: Component0,
    parameters:{
        viewport: {
            viewports: customViewports
        }
    }
}

const Template = args => <Component0 {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{

}