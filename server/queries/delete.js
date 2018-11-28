const Delete = {

  deletemeal: 'DELETE FROM meal WHERE mealid = $1;',
  deleteRequest: 'DELETE FROM request WHERE requestid = $1'
};

export default Delete;
