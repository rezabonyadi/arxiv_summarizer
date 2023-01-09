# arxiv_summarizer
Arxiv is full of fantastic papers (well, some are more fantastic than others). I have been reading articles from arxiv more than usual, so, to save a bit of time, I wrote this Chrome Extension that summarizes the abstract of the arxiv article by clicking this chrome extension. It summarizes it to three sentences, less than 70 words. First sentence talking about the problem, second talking about the proposal, and third talking about the results/conclusion. 

This is a very simple extension, please do not expect anything fancy.

# Arxiv Abstract Summarizer
This Chrome extension summarizes abstracts from arxiv.org, making it easier to quickly understand the main points of a research paper.
![screen_shot](https://user-images.githubusercontent.com/25924343/211269759-c46557be-ae21-47f9-99f0-674bed22e2ba.png)



# How to use
- Clone the repository and install the dependencies by running npm install in the root directory of the project.
- Update the config.json file with your OpenAI API key.
- In the root directory of the project, install dependencies (run "npm install express body-parser openai cors fs")
- In the root directory of the project, run "node server.js" to start the server.
- In Google Chrome, go to the extensions page (chrome://extensions).
- Enable "Developer mode" in the top right corner of the page.
- Click on the "Load unpacked" button and select the root directory of the project.
- The extension icon should now appear in your Chrome toolbar.
- Navigate to an abstract on arxiv.org.
- Click on the extension icon in the toolbar to open the pop-up window.
-The summary of the abstract should be displayed in the pop-up window.

# Features
- Summarizes abstracts from arxiv.org
- Uses the OpenAI API to generate summaries
# Dependencies
Express
Body-parser
Cors
OpenAI API client
