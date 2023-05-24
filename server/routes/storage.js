require("dotenv").config();
const route = require("express").Router();
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

let s3 = new S3Client();

route.get("/files/:filename", async (req, res) => {
  // #swagger.tags = ['Get Files']
  const { filename } = req.params;

  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: filename,
  });

  try {
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.redirect(signedUrl);
  } catch (error) {
    res.json(error);
  }
});

route.get("/images/:imagename", async (req, res) => {
  // #swagger.tags = ['Get Files']
  const { imagename } = req.params;

  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: imagename,
  });

  try {
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.redirect(signedUrl);
  } catch (error) {
    res.json(error);
  }
});

module.exports = route;
