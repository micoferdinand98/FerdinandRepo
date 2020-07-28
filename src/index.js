import React from "react";
import ReactDOM from "react-dom"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: [
        { id: "1", page: "5" },
        { id: "2", page: "10" },
        { id: "3", page: "25" },
        { id: "4", page: "100" },
      ],
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    alert("Items per page: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          items per page
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="5"> 5 </option>
            <option value="10"> 10 </option>
            <option value="25"> 25 </option>
            <option value="100"> 100 </option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Looping through Array
          <select>
            {this.state.page.map((item) => (
              <option key={item.id} value={item.page}>
                {item.page}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
