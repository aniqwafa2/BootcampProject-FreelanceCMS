const { job, category } = require("../models");

class JobController {
  static async getJob(req, res) {
    /* 
      #swagger.summary = "Get All Jobs"
      #swagger.parameters['limit'] = {
        type: 'integer',
      } 
      #swagger.parameters['page'] = {
        type: 'integer',
      } 
    */

    const limit = +req.query.limit;
    const pageCount = +req.query.page || 1;
    const offset = (pageCount - 1) * limit;
    let pages = {};
    let queryProperties = { include: [category] };
    if (limit && limit !== 0) {
      queryProperties = { limit, offset, include: [category] };
    }

    try {
      const result = await job.findAndCountAll(queryProperties);

      const totalPage = Math.ceil(result.count / limit);
      if (totalPage) {
        pages = { limitPage: limit, currentPage: pageCount, totalPage };
      }

      res.json({ pages, data: result.rows });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async getJobById(req, res) {
    // #swagger.summary = "Get Job by ID"

    let id = +req.params.id;

    try {
      const result = await job.findByPk(id, { include: [category] });

      if (!result) {
        return res.status(404).json({ message: "job id not found" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async postJob(req, res) {
    /*
    #swagger.summary = "Create new Job"
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              price: {
                type: "integer",
              },
              description: {
                type: "string",
              },
              categoryId: {
                type: "integer",
              },
              file: {
                type: "string",
                format: "binary",
              },
              dueDate: {
                type: "string",
              },
            },
            required: ["name", "price", "description", "dueDate"],
          },
        },
      },
    };
    */

    let { name, price, description, categoryId, file, dueDate } = req.body;
    let pathStatus;
    dueDate = new Date(Date.parse(dueDate));

    try {
      let { path } = req.file;
      pathStatus = path.split("\\").slice(1).join("/");
      file = `${req.headers.host}/${pathStatus}`;
    } catch (error) {}

    try {
      const result = await job.create({
        name,
        price,
        description,
        categoryId,
        file,
        dueDate,
      });

      res.json({
        message: "job successfully created",
        data: { result },
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async deleteJob(req, res) {
    // #swagger.summary = "Delete Job by ID"

    const id = +req.params.id;

    try {
      const result = await job.destroy({
        where: { id },
      });

      if (!result) {
        return res.status(404).json({ message: "job id not found" });
      }

      res.json({ message: `job id ${id} succesfully deleted` });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async putJob(req, res) {
    /*
    #swagger.summary = "Update Job by ID"
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              price: {
                type: "integer",
              },
              description: {
                type: "string",
              },
              categoryId: {
                type: "integer",
              },
              file: {
                type: "string",
                format: "binary",
              },
              dueDate: {
                type: "string",
              },
            },
            required: ["name", "price", "description", "dueDate"],
          },
        },
      },
    };
    */

    const id = +req.params.id;
    let { name, price, description, categoryId, file, dueDate } = req.body;
    dueDate = new Date(Date.parse(dueDate));
    let data;
    let pathStatus;
    let delFile;
    let delPath;

    try {
      let { path } = req.file;
      pathStatus = path.split("\\").slice(1).join("/");
      file = `${req.headers.host}/${pathStatus}`;
    } catch (error) {}

    try {
      if (pathStatus) {
        delFile = await job.findByPk(id, { raw: true });

        if (delFile.file || delFile.file === "") {
          delPath = "./public/" + delFile.file.split("/").slice(1).join("/");
        }
      }

      try {
        await fs.rm(delPath);
      } catch (error) {}

      const result = await job.update(
        {
          name,
          price,
          description,
          categoryId,
          file,
          dueDate,
        },
        { where: { id }, returning: true }
      );

      if (!result[0]) {
        return res.status(404).json({ message: "job id not found" });
      }

      data = result[1][0].dataValues;
      res.json({
        message: `job id ${id} successfully updated`,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }
}

module.exports = JobController;
