const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Read the API key and server port from the config file
const config = JSON.parse(fs.readFileSync('config.json'));
const apiKey = config.openai_api_key;
//const apiKey = process.env.openai_api_key;
console.log(`${apiKey}`);

const serverPort = config.server_port;

const gptPrompt = "Summarize this text to three sentences. First sentence summarizes the problem it has targeted, second sentence summarizes the solution it has proposed and how is it novel, and third sentence summarizes the high-level results, outcome, or conclusion of the proposed solution. Ensure the whole summary is shorter than 70 words. Here is the text: "


// Set up the OpenAI API client
const configuration = new Configuration({
  apiKey: apiKey,
  organization: "org-2bBPUYeGlPyLBF5gcZuXiVfa",
});
const openai = new OpenAIApi(configuration);

// Set up a route for the POST request that will receive the text to be summarized
app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  //console.log(`Received request to summarize: ${text}`);
    
  var completePrompt = gptPrompt+` ${text}`;  
  console.log(`Received request: ${completePrompt}`);
  
  // Use the OpenAI API to generate a summary
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: completePrompt,
    temperature: 0.5,
    max_tokens: 256,
  });

  const summary = response.data.choices[0].text;
  console.log(`Summary: ${summary}`);

  // Send the summary back to the client
  res.send({ summary });
});

// Start the server and listen for incoming requests
app.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
