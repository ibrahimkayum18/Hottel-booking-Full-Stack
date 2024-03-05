import axios from "axios"
import famous from './../../public/famous_locations.json'

export const getFavoritePlaces = async () => {
 axios.get(famous)
 .then(res => {
    return res.data
 })
}