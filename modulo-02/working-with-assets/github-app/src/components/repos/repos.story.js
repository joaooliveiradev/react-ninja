import { storiesOf } from "@kadira/storybook";
import React from 'react';
import Repos from './index';

storiesOf('Repos', module)
    .add('With title prop', () => (
        <Repos Title="Favoritos" />
    ))
    .add('With title repos', () => (
        <div style={{ paddingLeft: '10px' }}>
            <Repos
                Title="Favoritos"
                repos={[{
                    link: 'https://www.google.com.br',
                    name: 'Google'
                }]}
            />
        </div >
    ))