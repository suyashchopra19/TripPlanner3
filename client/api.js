const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = () =>
  fetch("/api/itineraries/1")
    .then(result => result.json())
    .catch(err => console.error(err));

const postItineraries = () =>
  fetch('/api/itineraries', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({
      // Itinerary Data
    })
  });
module.exports = {
  fetchAttractions,
  fetchItineraries,
  postItineraries
};
