import axios from 'axios'
const baseUrl = '/api/formations'

const getFormations = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getFormations }