const abstractElement = document.querySelector('.abstract');

if (abstractElement) {
  const myAbstract = abstractElement.textContent;
  
  chrome.storage.local.set({ 'summary': myAbstract }).then(() => {
	  console.log("myAbstract captured");
	});
} else {
	chrome.storage.local.set({ 'myAbstract': "empty" }).then(() => {
	  console.log("myAbstract is empty");
	});
}

