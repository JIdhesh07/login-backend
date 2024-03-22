const Formdata = require('../Models/FormDataSchema')

exports.addForm = async (req, res) => {
    console.log('inside addform');

    const userId = req.payload

    const file = req.file.filename
    console.log(req.body);
    const {
        username,
        email,
        name,
        password,
        date,
        number,
        gender,
        address,
        location
    } = req.body

    console.log(username, email, name, password, date, number, gender, address, location, file);
    try {
        const existForm = await Formdata.findOne({
            password
        });
        // console.log(existForm);
        if (existForm) {
            res.status(401).json('already exist')
        } else {
            const newform = new Formdata({
                username,
                email,
                name,
                password,
                date,
                number,
                gender,
                address,
                location,
                userId
            });
            await newform.save()
            console.log(newform);
            res.status(200).json(newform)
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: err.message
        })
    }

}