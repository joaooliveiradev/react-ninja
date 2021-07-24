import React from 'react';
import Search from './index';
import { storiesOf, action } from '@kadira/storybook';
storiesOf('Search', module)
    .add('isDisabled false', () => (
        <Search
            isDisabled={false}
            handleSearch={action('OnKeyUp Press')}
        />
    ))
    .add('isDisabled true', () => (
        <Search
            isDisabled={true}
            handleSearch={action('OnKeyUp Press')}
        />
    ))