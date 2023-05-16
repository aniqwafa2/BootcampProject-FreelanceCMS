const { messageContact, messageRecord } = require("../models");
const { Op } = require("sequelize");

class MessageController {
  static async getMessageById(req, res) {
    /* 
      #swagger.summary = "Get All Messages by User ID"
    */

    // const limit = +req.query.limit || 10;
    // const pageCount = +req.query.page || 1;
    // const offset = (pageCount - 1) * limit;
    // let pages = {};

    const id = +req.params.userId;

    try {
      const result = await messageContact.findAndCountAll({
        where: { [Op.or]: [{ senderId: id }, { recipientId: id }] },
        include: [
          { model: messageRecord, limit: 1, order: [["createdAt", "DESC"]] },
        ],
      });

      // const totalPage = Math.ceil(result.count / limit);
      // if (totalPage !== 0) {
      //   pages = { limitPage: limit, currentPage: pageCount, totalPage };
      // }

      res.json({
        message: `all messages from userId ${id}`,
        data: result.rows,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error", error });
    }
  }

  static async getMessageConvo(req, res) {
    /* 
      #swagger.summary = "Get Message Conversation by messageContact ID"
      #swagger.parameters['contactId'] = {
        required: true,
        type: 'integer',
      } 
    */

    const messageContactId = +req.params.contactId;

    try {
      const contactId = await messageContact.findOne({
        where: { id: messageContactId },
      });
      const result = await messageRecord.findAll({
        where: { messageContactId },
        order: [["createdAt", "ASC"]],
        // include: [messageContact],
      });

      if (!result) {
        return res.status(404).json({ message: "message id not found" });
      }

      res.json({ contactId, data: result });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async postMessage(req, res) {
    // #swagger.summary = "Create new Message by messageContact ID & User ID"

    let { senderId, recipientId, messageContent } = req.body;

    try {
      senderId = +senderId;
      recipientId = +recipientId;

      let findContact = await messageContact.findOne({
        where: {
          [Op.or]: [
            { senderId, recipientId },
            { senderId: recipientId, recipientId: senderId },
          ],
        },
      });

      // console.log(findContact);
      if (!findContact) {
        findContact = await messageContact.create({ senderId, recipientId });
      }

      const result = await messageRecord.create({
        messageContactId: findContact.dataValues.id,
        userId: senderId,
        messageContent,
      });

      res.json({
        message: "message successfully created",
        data: { result },
      });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error });
    }
  }

  // NOTE: delete dan put belum dirubah
  static async deleteMessage(req, res) {
    // #swagger.summary = "Delete Message by ID"

    const id = +req.params.id;

    try {
      const result = await message.destroy({
        where: { id },
      });

      if (!result) {
        return res.status(404).json({ message: "message id not found" });
      }

      res.json({ message: `message id ${id} succesfully deleted` });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }

  static async putMessage(req, res) {
    // #swagger.summary = "Update Message by ID"

    const id = +req.params.id;
    let { name, price, description, categoryId, file, dueDate } = req.body;
    let data;

    try {
      const result = await message.update(
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
        return res.status(404).json({ message: "message id not found" });
      }

      data = result[1][0].dataValues;
      res.json({
        message: `message id ${id} successfully updated`,
        data,
      });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }
}

module.exports = MessageController;
