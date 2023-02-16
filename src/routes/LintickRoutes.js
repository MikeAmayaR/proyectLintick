import { Router } from "express";
import LintickController from "../controller/LintickController.js"

const LintickRoutes = Router();

LintickRoutes.get('/', LintickController.getData)

export default LintickRoutes;