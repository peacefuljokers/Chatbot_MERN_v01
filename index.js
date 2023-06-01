const express = require('express');
const app = express();

//root handler
app.get('/',(req,res)=>{
    res.send({'hello':'there'}) //display a simple json
}
);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
//test comment