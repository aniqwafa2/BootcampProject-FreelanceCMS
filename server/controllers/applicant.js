const { applicant, job, user, sequelize } = require("../models");
const { Op } = require("sequelize");

class ApplicantController {
  static async getApplicant(req, res) {
    /* 
      #swagger.summary = "Get All Applicants"
      #swagger.parameters['limit'] = {
        type: 'integer',
      } 
      #swagger.parameters['page'] = {
        type: 'integer',
      } 
    */

    const limit = +req.query.limit || 10;
    const pageCount = +req.query.page || 1;
    const offset = (pageCount - 1) * limit;
    let pages = {};

    try {
      const result = await applicant.findAndCountAll({
        limit,
        offset,
        include: [job, user.scope("nopwd")],
      });

      const totalPage = Math.ceil(result.count / limit);
      if (totalPage !== 0) {
        pages = { limitPage: limit, currentPage: pageCount, totalPage };
      }

      res.json({ pages, data: result.rows });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async getApplicantById(req, res) {
    /* 
      #swagger.summary = "Get Applicant by Job ID and User ID"
      #swagger.parameters['jobId'] = {
        required: true,
        type: 'integer',
      } 
      #swagger.parameters['userId'] = {
        required: true,
        type: 'integer',
      } 
    */

    let { jobId, userId } = req.query;

    try {
      const result = await applicant.findOne({
        where: { jobId: +jobId, userId: +userId },
        include: [job, user.scope("nopwd")],
      });

      if (!result) {
        return res.status(404).json({ message: "applicant id not found" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async postApply(req, res) {
    // #swagger.summary = "Apply Job"

    let { jobId, userId } = req.body;

    try {
      const result = await applicant.create({
        jobId,
        userId,
      });

      res.json({
        message: `apply for jobID ${jobId} successfully created`,
        data: { result },
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async deleteApply(req, res) {
    /* 
      #swagger.summary = "Un-apply Job by Job ID and User ID"
      #swagger.parameters['jobId'] = {
        required: true,
        type: 'integer',
      } 
      #swagger.parameters['userId'] = {
        required: true,
        type: 'integer',
      } 
    */

    let { jobId, userId } = req.query;

    try {
      const result = await applicant.destroy({
        where: { [Op.and]: [{ jobId: +jobId }, { userId: +userId }] },
      });

      if (!result) {
        return res.status(404).json({ message: "applicant id not found" });
      }

      res.json({
        message: `remove apply for jobID ${jobId} successfully deleted`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }

  static async deleteApplicant(req, res) {
    // #swagger.summary = "Delete Applicant by User ID"

    const userId = +req.params.userId;

    try {
      const result = await applicant.destroy({
        where: { userId },
      });

      if (!result) {
        return res.status(404).json({ message: "applicant id not found" });
      }

      res.json({ message: `applicant id ${userId} succesfully deleted` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }

  static async acceptApplicant(req, res) {
    /* 
      #swagger.summary = "Accept Applicant by Job ID and User ID"
      #swagger.parameters['jobId'] = {
        required: true,
        type: 'integer',
      } 
      #swagger.parameters['userId'] = {
        required: true,
        type: 'integer',
      } 
    */

    let { jobId, userId } = req.query;
    let data;

    try {
      const result = await sequelize.transaction(async (t) => {
        const accUser = await applicant.update(
          { status: true },
          {
            where: {
              [Op.and]: [{ jobId: +jobId }, { userId: +userId }],
            },
            transaction: t,
            returning: true,
          }
        );

        if (!accUser[0]) {
          return [0];
        }

        await job.update(
          { status: true },
          {
            where: { id: accUser[1][0].dataValues.jobId },
            transaction: t,
          }
        );

        return accUser;
      });

      if (!result[0]) {
        return res.status(404).json({ message: "applicant id not found" });
      }

      data = result[1][0].dataValues;
      res.json({
        message: `applicant userId ${userId} successfully accepted`,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }
}

module.exports = ApplicantController;
