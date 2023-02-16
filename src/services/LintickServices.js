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
}

export default LintickServices;
