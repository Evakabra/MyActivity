import React, { Component } from 'react';
import Calendar from 'react-calendar';

class ActivityStatus extends Component {
    state =
        {
            date: new Date()
        }

    onChange = date => {
        this.props.calenderClose()
        this.setState({ date })
    }

    compareTime = (startTime) => {
        var todayDate = new Date(startTime.slice(0, -2));
        var dateObject = new Date(todayDate.getMonth() + " " + todayDate.getDate() + " " + todayDate.getFullYear())
        var nowObject = new Date(this.state.date.getMonth() + " " + this.state.date.getDate() + " " + this.state.date.getFullYear())
        return (dateObject.getTime() == nowObject.getTime());
    }

    render() {
        let calender = null;
        if (this.props.show) {
            calender = <Calendar onChange={this.onChange}
                value={this.state.date} />
        }

        let noActivity = true
        let element = (
            this.props.Details.map((data) => {
                if (data.id == this.props.id) {
                    return (
                        data.activity_periods.map((time, key) => {
                            if (this.compareTime(time.start_time)) {
                                noActivity = false
                                return (
                                    <div key={key}>
                                        <p>{time.start_time}</p>
                                        <p>{time.end_time}</p>
                                    </div>
                                )
                            }
                        })
                    )
                }
            }
        )
    )
        return (
            <div>
                <h1>Activity Details</h1>
                {element}
                {noActivity && <p>No Activity</p>}
                {calender}
                <button onClick={this.props.CalenderOpen}>View All Activity</button>
                <button onClick={this.props.ModalClosed}>CANCEL</button>
            </div>
        )
    }
}

export default ActivityStatus;

