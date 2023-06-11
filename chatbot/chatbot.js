'use strict';
const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/keys');
const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;
const structjson = require('./structjson') //added in on top of sample code

const credentials = {
    client_email: config.googleClientEmail,
    private_key:  config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId,credentials});
//below is from latest doc
//removed after start using session uuid
//const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);


module.exports = {
    textQuery: async function(text, userID, parameters = {}) {
        const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId + userID); //from latest doc
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },

    eventQuery: async function(event, userID, parameters = {}) {
        const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId + userID); //from latest doc
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
                    languageCode: languageCode,
                },
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },



    handleAction: function(responses){
        return responses;
    },


}