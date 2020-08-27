import React, { Component } from "react"
import styles from "./App.module.css"
import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import Country from "./components//Country Picker/Country"
import "./components/Cards/Cards.module.css"
import "./components/Chart/Chart.module.css"
import "./components/Country Picker/Country.module.css"
import { fetchdata } from "./api/index"
class App extends Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const fetchedData = await fetchdata()

    this.setState({
      data: fetchedData,
    })
  }
  render() {
    const data = this.state.data

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <Country />
      </div>
    )
  }
}

export default App
