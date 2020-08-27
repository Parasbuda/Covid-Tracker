import React, { Component } from "react"
import styles from "./App.module.css"
import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import Country from "./components//Country Picker/Country"
import "./components/Cards/Cards.module.css"
import "./components/Chart/Chart.module.css"
import "./components/Country Picker/Country.module.css"
import { fetchdata } from "./api/index"
import Corona from "./assets/covidlogo.png"

class App extends Component {
  state = {
    data: {},
    country:""
  }
  async componentDidMount() {
    const fetchedData = await fetchdata()

    this.setState({
      data: fetchedData,
    })
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchdata(country)
    this.setState({
     data:fetchedData,country:country
   })
  }
  render() {
    const {data,country}= this.state

    return (
      <div className={styles.container}>
        <img src={Corona} alt="logo" className={styles.image}/>
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        
      </div>
    )
  }
}

export default App
