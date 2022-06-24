import TOKEN from "./config.js";

function getAPI() {
	fetch(`https://api.unsplash.com/photos/random?count=4&client_id=${TOKEN}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const mainContainer = document.querySelector(".main-container");

			data.forEach((photos) => {
				const boxDOM = document.createElement("div");
				boxDOM.setAttribute("class", "box");
				mainContainer.appendChild(boxDOM);

				const boxTitleDOM = document.createElement("p");
				boxTitleDOM.setAttribute("class", "box-title");
				let imgTitleAPI = photos.current_user_collections.title;
				if (imgTitleAPI === undefined) {
					boxTitleDOM.innerText = "No name :(";
				} else {
					boxTitleDOM.innerText = imgTitleAPI;
				}
				boxDOM.appendChild(boxTitleDOM);

				let imgSource = photos.urls.full;
				const imgDOM = document.createElement("img");
				imgDOM.setAttribute("class", "unsplash-img");
				imgDOM.setAttribute("alt", "Example Unsplash Image");
				imgDOM.setAttribute("src", imgSource);
				boxDOM.appendChild(imgDOM);

				const boxDesc = document.createElement("div");
				boxDesc.setAttribute("class", "box-description-container");
				boxDOM.appendChild(boxDesc);

				const authorInfo = document.createElement("div");
				boxDesc.appendChild(authorInfo);

				const boxDescBy = document.createElement("span");
				boxDescBy.setAttribute("class", "by-on");
				boxDescBy.innerText = "by";
				authorInfo.appendChild(boxDescBy);

				let userName = photos.user.name;
				const boxDescLink = document.createElement("a");
				boxDescLink.setAttribute("class", "description");
				boxDescLink.innerText = userName;
				authorInfo.appendChild(boxDescLink);

				let portfolioUrl = photos.user.portfolio_url;
				if (portfolioUrl !== null) {
					boxDescLink.setAttribute("href", portfolioUrl);
				}

				const dateInfo = document.createElement("div");
				boxDesc.appendChild(dateInfo);

				const boxDescOn = document.createElement("span");
				boxDescOn.setAttribute("class", "by-on");
				boxDescOn.innerText = "on";
				dateInfo.appendChild(boxDescOn);

				const boxDescDate = document.createElement("p");
				boxDescDate.setAttribute("class", "description");
				let date = new Date(photos.created_at).toLocaleDateString("en-NZ");
				boxDescDate.innerText = date;
				dateInfo.appendChild(boxDescDate);
			});
		});
}

getAPI();
