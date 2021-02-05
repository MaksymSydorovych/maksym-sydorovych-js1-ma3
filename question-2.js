//Question 2
//Make a call to the following API endpoint:
//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating
//Loop through the results and display the following properties in HTML, but only for the first eight results:
//name
//rating
//number of tags (not the tag details, just the amount of tags)
//The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.
//Be sure to handle any potential errors in the code.
//You can use either regular promise or async/await syntax to make the call.
//Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

element.classList.add(“results”) 

const resultContainer = document.querySelector(".results");

async function getFacts() {
	const response = await fetch(url);
	const results = await responce.json();
	const facts = results;

	resultContainer.innerHTML = "";

	for (let i = 0; i < facts.lenght; i++) {
		console.log (facts[i].name; facts[i].rating; facts[i].tags.lenght);
		if (i === 8) {
			break;
		}
		resultContainer.innerHTML += `
		<div class = "results">${facts[i]).name}</div>
		<div class = "results">${facts[i]).rating}</div>
		<div class = "results">${facts[i]).tags.lenght}</div>`;
	}
}
getFacts();
