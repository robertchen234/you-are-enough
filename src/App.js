import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { bg: "2", bg2: "1", quote: "Be yourself" };

  change = () => {
    const bgOptions = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25"
    ];
    const quoteOptions = [
      "Follow your soul",
      "Begin",
      "Enjoy the present moment",
      "Be yourself",
      "Strive for greatness",
      "Be the change",
      "You've got this!",
      "Your potential is unlimited",
      "Value yourself",
      "Believe in yourself",
      "Every day is precious",
      "Act without expectation",
      "Take a deep breath",
      "Practice makes permanent",
      "Persistence powers passion",
      "Be at peace",
      "Practice kindness",
      "Live simply",
      "Spread your wings",
      "Start now",
      "Be a magnet for joy, love and abundance",
      "Action conquers fear",
      "Nature heals",
      "Sieze the day",
      "Make time",
      "Dream big",
      "Start with optimism",
      "Dream big dreams",
      "Trust yourself",
      "You become what you believe",
      "Change can happen now",
      "Stop all postponement"
    ];

    setInterval(() => {
      console.log(this.state.bg);
      this.setState({
        bg2: bgOptions[Math.floor(Math.random() * bgOptions.length)],
        bg: bgOptions[Math.floor(Math.random() * bgOptions.length)],
        quote: quoteOptions[Math.floor(Math.random() * quoteOptions.length)]
      });
    }, 5000);
  };

  render() {
    let bgImage = `/assets/${this.state.bg}.jpg`;
    let bg2Image = `/assets/${this.state.bg2}.jpg`;
    return (
      <div className="app">
        <section>
          <img className="bottom" src={bg2Image} />
          <img className="top" src={bgImage} />
        </section>
        <div className="text">
          <h1 className="title">You are enough.</h1>
          <h3 className="quote">{this.state.quote}</h3>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.change();
  }
}

export default App;
