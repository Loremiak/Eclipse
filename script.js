function getAPI() {
	fetch(
		`https://api.unsplash.com/photos/random?count=2&client_id=${env.UNSPLASH_API_KEY}`
	) //count=2&
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// console.log(data);
			// console.log(data[0].urls.full); // losowe img
			// console.log(data[0].user.name); // nazwa autora
			// console.log(data[0].created_at); // data i godzina
			// console.log(data[0].user.portfolio_url); // portfolio link
			// console.log(data[0].current_user_collections.title); // title

			const authorName = document.querySelector(".author-name");
			const createdDate = document.querySelector(".created-date");
			const imgTitle = document.querySelector(".img-title");
			const imgClass = document.querySelectorAll(".img-class");
			console.log(imgClass);
			data.forEach((photos, idx) => {
				console.log(photos);

				let userName = photos.user.name;
				authorName.innerText = userName;
				console.log(userName);

				let portfolioUrl = photos.user.portfolio_url;

				if (portfolioUrl !== null) {
					authorName.setAttribute("href", portfolioUrl);
					console.log(portfolioUrl);
				}

				let date = new Date(photos.created_at).toLocaleDateString("en-NZ");
				createdDate.innerText = date;
				console.log(date);

				let imgTitleAPI = photos.current_user_collections.title;
				if (imgTitleAPI === undefined) {
					imgTitle.innerText = "Brak nazwy";
					console.log(imgTitleAPI);
				} else {
					imgTitle.innerText = photos.current_user_collections.title;
					console.log(imgTitleAPI);
				}

				let imgSource = photos.urls.full;
				console.log(imgSource);

				// if (imgClass == true) {
				imgClass[idx].setAttribute("src", imgSource);
				console.log(imgSource);
				// }

				// imgClass.setAttribute("src", imgSource);
				// console.log(imgSource);
			});

			// for (let prop in data) {
			// 	prop;
			// 	data[prop];
			// 	console.log(prop);
			// 	console.log(data[prop]);

			// 	let userName = data[prop].user.name;
			// 	authorName.innerText = userName;
			// 	let portfolioUrl = data[prop].user.portfolio_url;
			// 	authorName.setAttribute("href", portfolioUrl);
			// 	let date = new Date(data[prop].created_at).toLocaleDateString("en-NZ");
			// 	createdDate.innerText = date;
			// 	imgTitle.innerText = data[prop].current_user_collections.title;
			// 	let imgSource = data[prop].urls.full;
			// 	imgClass.setAttribute("src", imgSource);
			// }

			// const img = document.querySelectorAll(".unsplash-img");

			// authorName.innerText = data[0].user.name;
			// authorName.setAttribute("href", data[0].user.portfolio_url);
			// let date = new Date(data[0].created_at).toLocaleDateString("en-NZ");
			// createdDate.innerText = date;
			// imgTitle.innerText = data[0].current_user_collections.title;
			// let imgSource = data[0].urls.full;
			// imgClass.setAttribute("src", imgSource);
		});
}

getAPI();
