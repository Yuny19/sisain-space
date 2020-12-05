const multer = require('multer');
const imgur = require('imgur');

imgur.setClientId(process.env.CLIENTID_IMGUR);

const storage = multer.memoryStorage()
let upload = multer({
    storage: storage
});
const uploadImage = upload.single('gambar');

function uploaded(req, res, next) {
    uploadImage(req, res, function (err) {
        if (req.file != null || req.file != undefined) {
            if (err) {
                return res.end('error: ', err);
            }
            else {

                imgur
                    .uploadBase64(req.file.buffer.toString('base64'))
                    .then(function (json) {
                        req.body.gambar = json.data.link;
                        next();
                    })
                    .catch(function (err) {
                        console.error(err.message);
                    });

            };
        } else {
            next();
        }

    })
}
module.exports = uploaded;