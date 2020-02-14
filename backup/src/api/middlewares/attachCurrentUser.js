const typedi = require("typedi");
const attachCurrentUser = async (req, res, next) => {
    const Logger = typedi.Container.get('logger');
    try {
        const UserModel = typedi.Container.get('userModel');
        const userRecord = await UserModel.findById(req.token._id);
        if (!userRecord) {
            return res.sendStatus(401);
        }
        const currentUser = userRecord.toObject();
        Reflect.deleteProperty(currentUser, 'password');
        req.currentUser = currentUser;
        return next();
    }
    catch (e) {
        Logger.error('🔥 Error   user to req: %o', e);
        return next(e);
    }
};
module.exports = attachCurrentUser;