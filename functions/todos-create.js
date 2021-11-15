import faunadb from 'faunadb';

function configureFaunaDBClient() {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
    domain: 'db.us.fauna.com',
  });
  return { q, client };
}

exports.handler = (event, context, callback) => {
  const { q, client } = configureFaunaDBClient();

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
