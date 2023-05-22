require("dotenv").config();
const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");

let uploadtype;
let storage;
let imageTypes = [".jpg", ".jpeg", ".png", ".svg", ".webp"];
let fileTypes = [
  ".doc",
  ".docx",
  ".ppt",
  ".pptx",
  ".xls",
  ".xlsx",
  ".txt",
  ".csv",
  ".zip",
  ".rar",
  ".7z",
];
let s3 = new S3Client();

if (process.env.NODE_ENV === "production") {
  storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
} else {
  storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      let dest = `./public/${uploadtype}s`;
      await fs.mkdir(dest, { recursive: true });
      cb(null, dest);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
}

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);

  if (uploadtype === "image") {
    if (!imageTypes.includes(ext)) {
      return cb("input the correct image format file", false);
    }

    cb(null, true);
  } else {
    if (!fileTypes.includes(ext)) {
      return cb("your file format is not supported by server", false);
    }

    cb(null, true);
  }
};

const multerUpload = multer({
  storage,
  limits: 1024 * 1024 * 5, // 5mb
  fileFilter,
});

const upload = (type) => {
  // NOTE: console req.body dibawah return malah kosong,
  // kalo dibawah uploadHandler malah ada isinya
  return (req, res, next) => {
    uploadtype = type;
    const uploadHandler = multerUpload.single(uploadtype);

    uploadHandler(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          message: err.message,
          error: `make sure file input placed on ${uploadtype} field`,
        });
      } else if (err) {
        console.log(err);
        return res.status(500).json({ message: err });
      }

      next();
    });
  };
};

module.exports = upload;
