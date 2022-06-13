function getAPI() {
	fetch(
		"https://api.unsplash.com/photos/random?count=2&client_id="
	) //count=2&
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data[0]);
			console.log(data[0].urls.full); // losowe img
			console.log(data[0].user.name); // nazwa autora
			console.log(data[0].created_at); // data i godzina
			console.log(data[0].user.portfolio_url); // portfolio link
			console.log(data[0].current_user_collections.title); // title

			const authorName = document.querySelectorAll(".author-name");
			const createdDate = document.querySelectorAll(".created-date");
			const imgTitle = document.querySelectorAll(".img-title");
			const imgClass = document.querySelectorAll(".img-class");
			// const img = document.querySelectorAll(".unsplash-img");

			authorName.innerText = data[0].user.name;
			authorName.setAttribute("href", data[0].user.portfolio_url);
			let date = new Date(data[0].created_at).toLocaleDateString("en-NZ");
			createdDate.innerText = date;
			imgTitle.innerText = data[0].current_user_collections.title;
			let imgSource = data[0].urls.full;
			imgClass.setAttribute("src", imgSource);
		});
}

getAPI();
