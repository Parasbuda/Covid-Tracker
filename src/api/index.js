import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchdata = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    return error
  }
}

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`)
    const data = response.data
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch (error) {
    return
  }
}
