import express from "express";
import authHandler from "../../middlewares/auth.handler";
import controller from "./controller";

export default express
  .Router()
  .post("/initializeBooking",  controller.createBooking)
  .post("/verifyBooking", authHandler, controller.verifyBooking);