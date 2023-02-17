import LintickServices from "../services/LintickServices.js";
import fs from "fs/promises";

const clas = "getData";
class LintickController {
  static async getData(req, res) {
    let response;
    try {
      const dataGeneral = await LintickServices.getDataGeneral();
      const finishData = dataGeneral.data.results;
      if (finishData) {
        await LintickController.writeToFile("Rick.zip", finishData[0]);
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
    const dataUrl = parseInt(req.params.id);
    try {
      const dataWithId = await LintickServices.getDataWithId(dataUrl);
      const finishDataWithId = dataWithId.data;
      if (finishDataWithId) {
        await LintickController.writeToFile("RickId.zip", finishDataWithId[0]);
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
    const dataUrl = req.params.name;
    const dataUrlTwo = req.params.status;
    try {
      const dataWithName = await LintickServices.getDataWithName(
        dataUrl,
        dataUrlTwo
      );
      const finishDataWithName = dataWithName.data;
      if (finishDataWithName) {
        await LintickController.writeToFile("RickName.zip", finishDataWithName);
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
    const dataUrl = req.params.species;
    const dataUrlTwo = req.params.gender;
    try {
      const dataWithType = await LintickServices.getDataWithType(
        dataUrl,
        dataUrlTwo
      );
      const finishDataWithType = dataWithType.data;
      if (finishDataWithType) {
        await LintickController.writeToFile("RickType.zip", finishDataWithType);
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

  static async writeToFile(fileName, data) {
    try {
      fs.writeFile(fileName, JSON.stringify(data));
      console.log("The zip has been saved!");
    } catch (error) {
      console.error(`Got an error trying to write the file: ${error.message}`);
    }
  }
}
export default LintickController;
