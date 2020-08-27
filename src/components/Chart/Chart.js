import React, { useState, useEffect } from "react"
import { fetchDailyData } from "../../api"
import { Line, Bar } from "react-chartjs-2"
import styles from "./Chart.module.css"

const Chart = ({ data, country }) => {
  const {confirmed,recovered,deaths}=data
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchDailyData()
      setDailyData(fetchedData)
    }
    fetchAPI()
  }, [])

  const lineChart = dailyData.length? (
    <Line
          data={{
              labels: dailyData.map(data => data.date),
              datasets: [
                  {
                      data: dailyData.map((data) => data.confirmed),
                      label: "Infected",
                      borderColor: "#3333ff",
                      fill: true,
                  },
                  {
                      data: dailyData.map(data => data.deaths),
                      label: "Deaths",
                      borderColor: "red",
                      backgroundColor: "rgba(255, 0, 0, 0.5)",
                      fill: true,
                  },
              ],
          }}
    />
  ) : null
  const barChart = (
   confirmed? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [{
            label: 'People',
            backgroundColor: [
              "rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"
            ],
            data:[confirmed.value,recovered.value,deaths.value]
          }]
        }}
        options={{
          legends: { display: false },
          title:{display:true,text:`Current State in ${country}`}
        }}
      />
  ):null
)
  return <div className={styles.container}>
    {country?barChart:lineChart}</div>
}

export default Chart
