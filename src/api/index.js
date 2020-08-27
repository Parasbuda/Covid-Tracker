import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchdata = async ( country) => {
  let changeableUrl = url
  if (country) {
    changeableUrl=`${url}/countries/${country}`
  }
  try {
    const response = await axios.get(changeableUrl)
    return response.data
  } catch (error) {
    return error.message
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
    return error.message
  }
}
export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`)
    const data = response.data.countries
   return data.map(country=>country.name)
  } catch (error) {
    return error.message
  }
}
