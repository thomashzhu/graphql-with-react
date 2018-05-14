const app = require('express')();
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// express + graphql
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const PORT = 4000; // process.env.PORT || 3000

app.listen(PORT, process.env.IP, () => {
  console.log(`Server has started on port ${PORT}!`);
});
