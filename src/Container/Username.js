import React, { Component } from 'react';
import Modal from '../Component/Modal';
import axios from 'axios';
import ActivityStatus from './ActivityStatus';

class Username extends Component {

    state = {
        displayModal: false,
        Id: null,
        details: [],
        displayCalender: false
    }

    componentDidMount() {
        axios.get('http://localhost:5000/members')
            .then((response) => {
                this.setState({ details: response.data });
            })
    }

    showModal = (recentId) => {
        this.setState({
            displayModal: true,
            Id: recentId
        })
    }

    calenderOpenHandler = () => {
        {
            this.setState({
                displayCalender: true
            })
        }
    }

    modalClosedHandler = () => {
        this.setState({
            displayModal: false,
            displayCalender: false
        })
    }

    calenderClosedHandler = () => {
        this.setState({
            displayCalender: false
        })
    }

    render() {
        const newdata = this.state.details.map((data) => {
            return (
                <tbody key={data.id}>
                    <tr >
                        <td onClick={() => this.showModal(data.id)}>{data.real_name}</td>
                    </tr>
                </tbody>
            )
        })

        return (
            <div>
                <Modal show={this.state.displayModal} ModalClosed={this.modalClosedHandler} >
                    <ActivityStatus id={this.state.Id} Details={this.state.details} show={this.state.displayCalender} calenderClose={this.calenderClosedHandler} CalenderOpen={this.calenderOpenHandler} ModalClosed={this.modalClosedHandler} />
                </Modal>
                <div className="App">
                    <h2>UserName</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Select Username</th>
                            </tr>
                        </thead>
                        {newdata}
                    </table>
                </div>
            </div>
        );
    }
}

export default Username;
