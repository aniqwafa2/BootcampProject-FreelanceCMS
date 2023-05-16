const { user, userProfile, sequelize } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { signJwt } = require("../helpers/jwt");
const fs = require("fs/promises");

class UserController {
  static async getUser(req, res) {
    /* 
      #swagger.summary = "Get All Users"
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
      // NOTE: default scopes exclude password field
      // scope defined in model
      const result = await user.findAndCountAll({
        limit,
        offset,
        include: [userProfile],
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

  static async getUserById(req, res) {
    // #swagger.summary = "Get User by ID"

    let id = +req.params.id;

    try {
      const result = await user.findByPk(id, {
        include: [userProfile],
      });

      if (!result) {
        return res.status(404).json({ message: "user id not found" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async postUser(req, res) {
    /*
    #swagger.summary = "Create / Register new User"
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              email: {
                type: "string",
              },
              password: {
                type: "string",
              },
              
            },
            required: ["name", "email", "password"],
          },
        },
      },
    };
    */

    let { name, email, password, address, image, skill } = req.body;

    try {
      await user.create(
        {
          name,
          email,
          password,
          userProfile: {
            address,
            image,
            skill,
          },
        },
        { include: [userProfile] }
      );

      res.json({
        message: "user successfully created",
        data: { name, email, address, image, skill },
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async deleteUser(req, res) {
    // #swagger.summary = "Delete User by ID"

    const id = +req.params.id;

    try {
      // REF: why use transaction?
      // https://stackoverflow.com/a/55554107
      const result = await sequelize.transaction(async (t) => {
        const userDelete = await user.destroy({
          where: { id },
          transaction: t,
        });

        await userProfile.destroy({
          where: { id },
          transaction: t,
        });

        return userDelete[0];
      });

      if (!result) {
        return res.status(404).json({ message: "user id not found" });
      }

      res.json({ message: `user id ${id} succesfully deleted` });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async putUser(req, res) {
    /*
    #swagger.summary = "Update User by ID"
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
              email: {
                type: "string",
              },
              password: {
                type: "string",
              },
              address: {
                type: "string",
              },
              image: {
                type: "string",
                format: "binary",
              },
              skill: {
                type: "string",
              },
            },
            required: ["name", "email", "password"],
          },
        },
      },
    };
    */

    const id = +req.params.id;
    let { name, email, password, address, image, skill } = req.body;
    let pathStatus;
    let delFile;
    let delPath;

    try {
      let { path } = req.file;
      pathStatus = path.split("\\").slice(1).join("/");
      image = `${req.headers.host}/${pathStatus}`;
    } catch (error) {}

    try {
      if (pathStatus) {
        delFile = await userProfile.findByPk(id, { raw: true });

        if (delFile.image || delFile.image === "") {
          delPath = "./public/" + delFile.image.split("/").slice(1).join("/");
        }
      }

      try {
        await fs.rm(delPath);
      } catch (error) {}

      // REF: why use individualHooks?
      // https://github.com/sequelize/sequelize/issues/6253
      const result = await sequelize.transaction(async (t) => {
        const userUpdate = await user.update(
          {
            name,
            email,
            password,
          },
          { where: { id }, individualHooks: true, transaction: t }
        );

        await userProfile.update(
          {
            address,
            image,
            skill,
          },
          { where: { id }, individualHooks: true, transaction: t }
        );

        return userUpdate[0];
      });

      if (!result) {
        return res.status(404).json({ message: "user id not found" });
      }

      res.json({
        message: `user id ${id} successfully updated`,
        data: { name, email, address, image, skill },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }

  static async login(req, res) {
    // #swagger.summary = "Login to get User Access Token"

    let { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email or password not provided" });
    }

    try {
      const findEmail = await user.findOne({ where: { email } });

      if (!findEmail) {
        return res.status(404).json({ message: "user email not found" });
      }

      let verifyPwd = await decryptPass(password, findEmail.password);
      if (!verifyPwd) {
        return res.status(401).json({ message: "user password invalid" });
      }

      let { id, name, role } = findEmail;
      let signed = await signJwt({ id, name, role });
      res.json({ type: "Bearer", access_token: signed });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }
}

module.exports = UserController;
