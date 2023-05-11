const { category } = require("../models");

class CategoryController {
  static async getCategory(req, res) {
    /* 
      #swagger.summary = "Get All Categories"
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
      const result = await category.findAndCountAll({
        limit,
        offset,
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

  static async getCategoryById(req, res) {
    // #swagger.summary = "Get Category by ID"

    let id = +req.params.id;

    try {
      const result = await category.findByPk(id);

      if (!result) {
        return res.status(404).json({ message: "category id not found" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async postCategory(req, res) {
    // #swagger.summary = "Create new Category"

    let { name, description } = req.body;

    try {
      const result = await category.create({
        name,
        description,
      });

      res.json({
        message: "category successfully created",
        data: { result },
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async deleteCategory(req, res) {
    // #swagger.summary = "Delete Category by ID"

    const id = +req.params.id;

    try {
      const result = await category.destroy({
        where: { id },
      });

      if (!result) {
        return res.status(404).json({ message: "category id not found" });
      }

      res.json({ message: `category id ${id} succesfully deleted` });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async putCategory(req, res) {
    // #swagger.summary = "Update Category by ID"

    const id = +req.params.id;
    let { name, description } = req.body;
    let data;

    try {
      const result = await category.update(
        {
          name,
          description,
        },
        { where: { id }, returning: true }
      );

      if (!result[0]) {
        return res.status(404).json({ message: "category id not found" });
      }

      data = result[1][0].dataValues;
      res.json({
        message: `category id ${id} successfully updated`,
        data,
      });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }
}

module.exports = CategoryController;
