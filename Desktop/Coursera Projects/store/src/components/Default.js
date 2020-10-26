import { render } from '@testing-library/react';
import React from 'react';

export default class Default extends React.Component {
    render() {
        console.log(this.props);    
        return (
            <div>
                <h3>Page not found</h3>
            </div>
        );
    }
}