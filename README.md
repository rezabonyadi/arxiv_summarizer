# arxiv_summarizer
Summarize an abstract by clicking this chrome extension

# Arxiv Abstract Summarizer
This Chrome extension summarizes abstracts from arxiv.org, making it easier to quickly understand the main points of a research paper.

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
