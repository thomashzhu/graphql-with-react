const app = require('express')();
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// express + graphql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server has started on port ${process.env.PORT}!`);
});
