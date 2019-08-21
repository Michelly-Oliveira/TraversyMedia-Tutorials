// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(event) {
	// Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	if(!validateForm(siteName, siteUrl)) {
		return false;
	}

	// Save in local storage
	var bookmark = {
		name: siteName,
		url: siteUrl
	};

	/*
		// Local Storage Test - only store strings
		localStorage.setItem('test', 'Hello World');
		console.log(localStorage.getItem('test'));
		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

	// Test if bookmarks is null
	if(localStorage.getItem('bookmarks') === null) {
		// Init array
		var bookmarks = [];
		// Add to array
		bookmarks.push(bookmark);
		//Set to LocalStorage - transform a json array into an string
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		// Get bookmarks from LocalStorage - turn a string into json array
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		// Add bookmark(object) to array
		bookmarks.push(bookmark);
		// Re-set back to LocalStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	// Clear form
	document.getElementById('myForm').reset();

	// Re-fecth bookmarks
	fetchBookmarks();

	// Prevent form from submiting
	event.preventDefault();
}

function validateForm(siteName, siteUrl) {
	if(!siteName || !siteUrl) {
		alert('Please fill in the form');
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  	var regex = new RegExp(expression);

  	if(!siteUrl.match(regex)) {
  		alert('Please use a valid URL');
  		return false;
  	}

  	return true;
}

// Delete bookmark
function deleteBookmark(url) {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// Loop through bookmarks
	for(var i = 0; i < bookmarks.length; i++) {
		if(bookmarks[i].url == url) {
			// Remove from array
			bookmarks.splice(i, 1);
		}
	}

	// Re-set back to LocalStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// Re-fecth bookmarks
	fetchBookmarks();
}

function fetchBookmarks() {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	// Build output
	bookmarksResults.innerHTML = '';
	for(var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		// +: append to the element
		bookmarksResults.innerHTML += '<div class="card bg-light text-dark card-body mt-3">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> '+
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '+
                                 	'</h3>'+
                                 	'</div>';
	}
}
