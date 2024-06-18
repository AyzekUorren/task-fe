import React from 'react';
import DatePickers from './DatePickers'; // Шлях до вашого компонента

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Date Picker Example</h1>
        <DatePickers />
      </div>
    );
  }
}

export default App;
