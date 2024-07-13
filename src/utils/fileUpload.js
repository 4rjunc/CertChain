const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const JWT = process.env.JWT;

async function fileUpload(file, name) {
  try {
    const formData = new FormData();

    const file = fs.createReadStream(file);
    formData.append("file", file);

    const pinataMetadata = JSON.stringify({
      name: `${name}_certificate`,
    });
    formData.append("pinataMetadata", pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 1,
    });
    formData.append("pinataOptions", pinataOptions);

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

export default fileUpload;
