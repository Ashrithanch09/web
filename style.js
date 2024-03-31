const recommendedEventsContainer = document.querySelector(
  ".recommended-events-container"
);
const upcomingEventsContainer = document.querySelector(
  ".upcoming-events-container"
);
const loadingSpinner = document.querySelector(".loading-spinner");
let upcomingEventsPage = 1;
async function fetchRecommendedEvents() {
  try {
    const response = await fetch(
      "https://gg-backendassignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    );
    const data = await response.json();
    displayRecommendedEvents(data);
  } catch (error) {
    console.error("Error fetching recommended events:", error);
  }
}
function displayRecommendedEvents(events) {
  recommendedEventsContainer.innerHTML = events
    .map(
      (event) => `
 <div class="recommended-event">
 <img src="${event.img_url}" alt="${event.eventName}">
 <p>${event.eventName}</p>
 </div>
 `
    )
    .join("");
}
async function fetchUpcomingEvents(page) {
  try {
    const response =
      await fetch(`https://gg-backendassignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64
Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
    const data = await response.json();
    displayUpcomingEvents(data);
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
  }
}
function displayUpcomingEvents(events) {
  upcomingEventsContainer.innerHTML += events
    .map(
      (event) => `
 <div class="upcoming-event">
 <p>${event.eventName}</p>
 <p>${event.cityName}</p>
 <p>${event.date}</p>
 <p>${event.weather}</p>
 <p>${event.distanceKm}</p>
 <img src="${event.img_url}" alt="${event.eventName}">
 </div>
 `
    )
    .join("");
}
function checkScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadingSpinner.style.display = "block";
    fetchUpcomingEvents(upcomingEventsPage++);
  }
}
window.addEventListener("scroll", checkScroll);
fetchRecommendedEvents();
fetchUpcomingEvents(upcomingEventsPage);
