import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DatePickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: null,
      secondDate: null,
    };
  }

  handleFirstDateChange = (event, date) => {
    this.setState({ firstDate: date });
  };

  handleSecondDateClick = () => {
    const newDate = new Date(this.state?.firstDate);
    this.setState({ secondDate: newDate });
  };

  handleSecondDateShow = () => {
    this.setState({ secondDate: null });
  };

  render() {
    const { firstDate, secondDate } = this.state;

    return (
      <MuiThemeProvider>
        <div>
          <DatePicker
            hintText="Select the first date"
            value={firstDate}
            onChange={this.handleFirstDateChange}
          />
          <DatePicker
            hintText="Select the second date"
            value={secondDate}
            onClick={this.handleSecondDateClick}
            onShow={this.handleSecondDateShow}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DatePickers;
