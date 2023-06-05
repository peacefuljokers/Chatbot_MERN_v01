const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
