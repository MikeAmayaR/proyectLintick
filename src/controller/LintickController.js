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

  static async getDataWithId(req, res) {
    let response;
    const dataUrl = parseInt(req.params.id)
    try {
      const dataWithId = await LintickServices.getDataWithId(dataUrl);
      const finishDataWithId = dataWithId.data
      if (finishDataWithId) {
        response = {
          status: 202,
          code: "LT01",
          message: "Data found succesfully",
          data: finishDataWithId,
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

  static async getDataWithName(req, res) {
    let response;
    const dataUrl = req.params.name
    const dataUrlTwo = req.params.status
    try {
      const dataWithName = await LintickServices.getDataWithName(dataUrl, dataUrlTwo);
      const finishDataWithName = dataWithName.data
      if (finishDataWithName) {
        response = {
          status: 202,
          code: "LT01",
          message: "Data found succesfully",
          data: finishDataWithName,
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

  static async getDataWithType(req, res) {
    let response;
    const dataUrl = req.params.species
    console.log('dataUrl', dataUrl)
    const dataUrlTwo = req.params.gender
    console.log('dataUrlTwo', dataUrlTwo)

    try {
      const dataWithType = await LintickServices.getDataWithType(dataUrl, dataUrlTwo);
      const finishDataWithType= dataWithType.data
      if (finishDataWithType) {
        response = {
          status: 202,
          code: "LT01",
          message: "Data found succesfully",
          data: finishDataWithType,
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
