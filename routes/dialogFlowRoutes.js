const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/keys');
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);


module.exports = app => {
    //root handler
app.get('/',(req,res)=>{
    res.send({'hello':'there'}) //display a simple json
});

app.post('/api/df_text_query',(req,res)=>{
    res.send({'do':'text query'}) //api text query placeholder
});

app.post('/api/df_event_query',(req,res)=>{
    res.send({'do':'event query'}) //api event query placeholder
});
}