import dropmodel from './deleteTable';

const print = console;
setTimeout(() => {
  dropmodel.dropUserTable().then(() => {
    print.log('user table droped successfully');
  });
}, 2000);

setTimeout(() => {
  dropmodel.dropMealTable().then(() => {
    print.log('meal table droped successfully');
  });
}, 4000);
setTimeout(() => {
  dropmodel.dropOderTable().then(() => {
    print.log('order table droped successfully');
  });
}, 5000);

setTimeout(() => {
  dropmodel.dropRequestTable().then(() => {
    print.log('request table droped successfuly');
    process.exit();
  });
}, 6000);
