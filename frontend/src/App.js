import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Widget } from '../src/models';

class WidgetList extends React.Component {
  constructor() {
    super();
    this.state = {
      widgets: []
    };
  }

  componentDidMount() {
    Widget.find()
      .then(res => this.setState({ widgets: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { widgets } = this.state;
    const widgetList =
      <ul>
        {
          widgets.map((widget, i) => <ul key={i}>{widget.name}</ul>)
        }
      </ul>;
    return widgetList;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WidgetList></WidgetList>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
