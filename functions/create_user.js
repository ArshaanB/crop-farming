import faunadb from 'faunadb';

function configureFaunaDBClient() {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNADB_SECRET,
    domain: 'db.us.fauna.com',
  });
  return { q, client };
}

exports.handler = async (event, context, callback) => {
  const { q, client } = configureFaunaDBClient();

  // Parse the string body into a useable object.
  const data = JSON.parse(event.body);
  const customerItem = {
    data: data,
  };

  return client
    .query(q.Create(q.Collection('customers'), customerItem))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
