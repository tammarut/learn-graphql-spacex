const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const app = express();

// Allow Cross-Origin
app.use(cors());

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));
app.listen(5000, () => console.log("🚀Server Running.."));
