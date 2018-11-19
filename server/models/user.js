import model from './createtables';

const hi = model.signupTable().then(() => {
  console.log('user table created successfully');
}).catch((err) => {
  console.log(err.message);
});

export default hi;
