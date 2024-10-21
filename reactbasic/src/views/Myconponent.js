import React, { Component, Fragment } from 'react';
import ChildConponent from './ChildConponent'
class Mycomponent extends Component {

    state = {
        fname: 'Vy',
        lname: 'le'
    }
    handleFname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }
    handleLname = (event) => {
        this.setState({
            lname: event.target.value
        })
    }
    handleSummit = (event) => {
        event.preventDefault()
        alert('click me')
    }

    render() {

        return (
            <>
                <div>
                    <form action="" >
                        <label>First name: </label><br />
                        <input type="text" value={this.state.fname}
                            onChange={(event) => this.handleFname(event)}
                        /><br />
                        <label>Last name: </label><br />
                        <input type="text" value={this.state.lname}
                            onChange={(event) => this.handleLname(event)}
                        /><br />
                        <input type="submit" value="Subscribe!"
                            onClick={(event => this.handleSummit(event))}
                        />
                    </form>
                </div>
                <ChildConponent name={'Le Vy'} age={'22'} />

            </>
        );
    }
}

export default Mycomponent;