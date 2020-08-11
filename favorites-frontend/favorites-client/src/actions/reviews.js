fetch("https://tripadvisor1.p.rapidapi.com/photos/list?lang=en_US&currency=USD&limit=50&location_id=2233968", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "1c49dc7e16msh4f7dd74e5e0f653p1a1b7djsnc9a76c5e3122"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});