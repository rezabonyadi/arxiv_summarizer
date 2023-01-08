var serverPort = '3000';

chrome.storage.local.get(['summary'], function(result) {
	fetch(`http://localhost:${serverPort}/summarize`, {
	  method: 'POST',
	  headers: {'Content-Type': 'application/json'},
	  body: JSON.stringify({text: result.summary})
	})
	.then((response) => response.json())
	.then(data => {
	  // Update the inner HTML of the element with the 'value' ID to show the summary
	  document.getElementById('value').innerHTML = 'Here is the paper summary: ' + data.summary;
	})
	.catch(error => {
	  console.error(error);
	});  
	  
});

