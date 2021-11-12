/* code from functions/todos-create.js */
import faunadb from 'faunadb'; /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: 'db.fauna.com',
  scheme: 'https',
});

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  //   return callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify('testing testing'),
  //   });
  return client
    .query(q.Get(q.Ref(q.Collection('customers'), '101')))
    .then((response) => {
      console.log('success', response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log('error', error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
