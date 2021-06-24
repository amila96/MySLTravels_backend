const ContactUsMessageDTO= require('../model/ContactUsMessageDTO');



const saveMessage = (req, resp) => {
    try {

        console.log(req.body);

        const contactUsMessage = new ContactUsMessageDTO({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });

        contactUsMessage.save().then(result => {
            resp.status(200).json({message: 'Success!'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

const deleteMessage = (req, resp) => {
    try {

        ContactUsMessageDTO.deleteOne({_id: req.headers.id}).then(result => {

            if (result.deletedCount > 0) {
                resp.status(200).json({message: 'Deleted!'});
            } else {
                resp.status(500).json({message: 'Try Again!'});
            }

        }).catch(error => {
            resp.status(500).json({error: error});
        })

    } catch (e) {
        resp.status(500).json({error: e});
    }
}
const getAllMessages = (req, resp) => {
    try {
        // pagination
        ContactUsMessageDTO.find().then(result => {

            resp.status(200).json({dataSet: result});

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })

    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}
module.exports = {
    saveMessage,deleteMessage,getAllMessages
}
