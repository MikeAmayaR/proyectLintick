import { Router } from "express";
import LintickController from "../controller/LintickController.js"

const LintickRoutes = Router();

LintickRoutes.get('/', LintickController.getData)
LintickRoutes.get('/:id', LintickController.getDataWithId)
LintickRoutes.get('/:name/:status', LintickController.getDataWithName)
LintickRoutes.get('/other/:species/:gender', LintickController.getDataWithType)

export default LintickRoutes;