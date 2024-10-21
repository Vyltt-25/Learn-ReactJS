import React, { Component, Fragment } from 'react';

class ChildConponent extends Component {

    render() {
        const {name, age} = this.props
        return (
            <>
                <div>
                    ChildConponent: {name} - {age}
                </div>
            </>
        );
    }
}

export default ChildConponent;