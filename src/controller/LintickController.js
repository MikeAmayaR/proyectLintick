import LintickServices from "../services/LintickServices.js";

const clas = "getData";

class LintickController {
  static async getData(req, res) {
    let response;
    try {
      const dataGeneral = await LintickServices.getDataGeneral();
      const finishData = dataGeneral.data.results
      if (finishData) {
        response = {
          status: 202,
          code: "LT01",
          message: "Data found succesfully",
          data: finishData,
        };
      } else {
        response = {
          status: 400,
          code: "LT02",
          message: "Data not found",
          data: {},
        };
      }
      return res.send(response);
    } catch (error) {
      console.log(clas, error);
    }
  }
}
export default LintickController;
