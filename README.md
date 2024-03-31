Event Website README

This repository contains the code for an event website. It provides information about recommended events and upcoming events. Users can view recommended events and scroll to load more upcoming events.

Files Included
index.html: This file contains the structure of the website written in HTML, including headers, sections for recommended and upcoming events, and references to CSS and JavaScript files.
styles.css: This file contains the styles for the website, including the layout, colors, and formatting.
scripts.js: This file contains the JavaScript code for fetching and displaying recommended and upcoming events, as well as implementing infinite scrolling functionality.
How to Run
To run this website locally, follow these steps:

Clone the repository to your local machine using Git:

bash
Copy code
git clone <https://github.com/Ashrithanch09/web>
Open the index.html file in a web browser.

Usage
Upon loading the website, users will see recommended events displayed.
As users scroll down, upcoming events will be loaded automatically through infinite scrolling.
Users can view details such as event name, city, date, weather, distance, and image for each upcoming event.
Dependencies
This project relies on the following dependencies:

Inter Font: This font is used for text elements on the website. It's linked via Google Fonts.
loading-spinner: The loading spinner is used to indicate when upcoming events are being fetched.
API Endpoints
Recommended Events Endpoint: https://gg-backendassignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco
Upcoming Events Endpoint: https://gg-backendassignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=<page_number>&type=upcoming
Contributors
[Nch Sri Ashritha] - (https://github.com/Ashrithanch09/web)
