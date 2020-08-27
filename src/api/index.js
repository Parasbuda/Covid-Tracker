import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchdata = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {}
}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`)
        return response.data
    } catch (error) {
        
    }
}
