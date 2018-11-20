import dropmodel from './deleteTable';

dropmodel.dropUserTable().then(() => {
  console.log('user table droped successfully');
}).catch((err) => {
  console.log(err.message);
});
