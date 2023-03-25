import jst from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findOne({
            _id: decoded._id,
        });
        if(!user) throw new Error('please authenticate');
        req.token = token ;
        req.user = user ;
        next();

    } catch (e) {
        res.status(401).send({error : e.message})
    }
}


export default auth;