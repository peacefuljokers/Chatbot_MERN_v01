const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/keys');
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(config.googleProjectID, config.dialogFlowSessionID);


module.exports = app => {
    //root handler
    app.get('/', (req, res) => {
        res.send({'hello': 'Johnny'})
    });
//dialogflow API - text query
    app.post('/api/df_text_query', async (req, res) => {

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: req.body.text,
                    languageCode: config.dialogFlowSessionLanguageCode
                }
            }
        };
        let responses = await sessionClient
            .detectIntent(request);

        res.send(responses[0].queryResult)
    });

    //dialogflow API - placeholder for event query
    app.post('/api/df_event_query', (req, res) => {
        res.send({'do': 'event query'})
    });
}