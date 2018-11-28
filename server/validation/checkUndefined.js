/* eslint-disable require-jsdoc */

export default class checkNull {
  static fieldUndefined(req, res, next) {
    // const body = req.body;
    const {
 mealname, price, image, description 
} = req.body;

    if (!mealname) {
      return res.status(422).json({ message: 'meal Name field is needed ' });
    }
    if (!price) {
      return res.status(422).json({ message: ' price field is needed ' });
    } if (!image) {
      return res.status(422).json({ message: ' image field is needed ' });
    } if (!description) {
      return res.status(422).json({ message: ' Description field is needed ' });
    }
    next();
  }
}

// check for null and undefined in signup and login fields

// export class checknull {
//   static checkuserNull(req, res) {
//     const body = req.body;

//     const { username, password, email } = body;

//     if (!username) {
//       return res.status(424).json({
//         message: 'username field is needed'
//       });
//     }

//     if (!password) {
//       return res.status(424).json({
//         message: 'password field is needed'
//       });
//     }

//     if (!email) {
//       return res.status(424).json({
//         message: 'password field is needed'
//       });
//     }
//   }
// }
