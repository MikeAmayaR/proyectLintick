import axios from "axios";

const clas = "LintictkServices"
class LintickServices {
  static async getDataGeneral() {
    const baseUrl = process.env.URL_API;
    try {
      return await axios.get(baseUrl)
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  static async getDataWithId(id) {
    const baseUrl = process.env.URL_API;
    try {
      return await axios.get(`${baseUrl}/${id}`)
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  
  static async getDataWithName(name, status) {
    const baseUrl = process.env.URL_API;
    try {
     return await axios.get(`${baseUrl}/?name=${name}&status=${status}`)
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  static async getDataWithType(species, gender) {
    const baseUrl = process.env.URL_API;
    try {
     return await axios.get(`${baseUrl}/?species=${species}&gender=${gender}`)
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }
}

export default LintickServices;
