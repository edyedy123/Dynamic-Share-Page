const devMode = false;

function start() {
	const footerHeight = 74;
	const headerHeight = 64;
	const headerMargin = 20;
	const linksHeight = 75;
	const linksMargin = 10;

	document.body.style.backgroundImage = 'url("assets/blue.jpg")';
	document.body.style.backgroundSize = "150% 170%";

	const makeItem = function (type, parent, className) {
		const item = document.createElement(type);
		if (className) {
			item.className = className;
		}
		if (parent) {
			parent.appendChild(item);
		}
		return item;
	}

	let tableItem = function (item, className) {
		this.item = item;
		this.className = className;
	}

	const makeTable = function (rows, parent, className) {
		const table = document.createElement("table");
		table.className = className;
		parent.appendChild(table);

		for (let i = 0, ilen = rows.length; i < ilen; i++) {
			let rowItems = rows[i];
			const row = table.insertRow(-1);
			for (let j = 0, jlen = rowItems.length; j < jlen; j++) {
				let tableItem = rowItems[j];

				const cell = row.insertCell(-1);
				cell.appendChild(tableItem.item);
				cell.className = tableItem.className;
			}
		}
		return table;
	}

	//MAIN DIVS
	const header = makeItem("div", document.body, "header item");
	header.style.height = headerHeight + 'px';

	let content, linksPage, footer;

	if (window.platform === 0) {
		content = makeItem("div", document.body, "content item");
		content.style.bottom = linksHeight + headerMargin + footerHeight + linksMargin + 'px';
		content.style.marginBottom = headerMargin - 20 + 'px';


		linksPage = makeItem("div", document.body, "linksPage item");
		linksPage.style.height = linksHeight + 'px';
		linksPage.style.bottom = footerHeight + 'px';
		linksPage.style.marginTop = headerMargin + 'px';
		linksPage.style.marginBottom = headerMargin + 'px';

		linksPageInner = makeItem("div", linksPage, "linksPageInner item");

		footer = makeItem("div", document.body, "footer");

	}
	if (window.platform === 2 || window.platform === 1) {
		content = makeItem("div", document.body, "contentMobile item");
		content.style.marginBottom = headerMargin - 20 + footerHeight + 'px';


		footer = makeItem("div", document.body, "footerMedia");
	}

	//Content
	content.style.top = headerHeight + 'px';
	content.style.marginTop = headerMargin + 'px';
	content.style.marginBottom = headerMargin - 20 + 'px';


	const teamContent = makeItem("div", content);

	//Footer
	footer.style.height = footerHeight + 'px';



	let buildTeam = function (image, name) {


		const avatar = makeItem("img", teamContent);
		avatar.src = image;
		avatar.style.borderRadius = "50%";
		avatar.style.width = 90 + "px";
		avatar.style.height = 90 + "px";
		avatar.style.marginTop = 20 + 'px';
		avatar.style.marginBottom = 20 + 'px';

		const teamName = name;

		//Content Provider
		const providerContainer = makeItem("div", teamContent, "container");
		providerContainer.style.marginTop = 0 + 'px';

		const team = makeItem("h3", providerContainer);
		team.appendChild(document.createTextNode(teamName));
		team.style.color = "#1aa3ff";
		team.style.marginTop = 0 + 'px';

		let providerMessage;
		if (window.platform === 2 || window.platform === 1) {
			providerMessage = makeItem("h3", providerContainer, "text");
			providerMessage.appendChild(document.createTextNode(" wants to share 360FLIX "));
			makeItem("br", providerMessage);
			providerMessage.appendChild(document.createTextNode("content with you"));
		}
		if (window.platform === 0) {
			providerMessage = makeItem("h6", providerContainer, "text");
			providerMessage.appendChild(document.createTextNode(" wants to share 360FLIX content with you"));
		}


		providerMessage.style.marginBottom = 60 + 'px';
		providerMessage.style.marginTop = 0 + 'px';
	}

	const buildUI = function (short_code, error, teamId) {

		if (!error) {
			let watch;
			//Mobile Steps
			if (window.platform === 2 || window.platform === 1) {
				//Mobile Step 1
				{
					const step1Div = makeItem("div", content, "stepDivs");

					const one = makeItem("div", step1Div, "rounded item");
					one.appendChild(document.createTextNode("1"));

					const msg1 = makeItem("h3", step1Div);
					msg1.style.color = "#1aa3ff";
					msg1.style.margin = 0;
					msg1.style.transform = "translateY(-110%)";
					msg1.appendChild(document.createTextNode("Get the 360FLIX App"));

					const msg2 = makeItem("h6", step1Div, "text");
					msg2.style.margin = 0;
					msg2.style.transform = "translateY(-100%)";
					msg2.appendChild(document.createTextNode("Download from the store"));

					//apple
					if (window.platform === 1) {
						const appleLogo = new tableItem(makeItem("img", step1Div, "scaleMedia linkHand"));
						appleLogo.item.style.marginBottom = "20px";
						appleLogo.item.src = "assets/appleStore.png";
						appleLogo.item.onclick = function () {
							window.open("https://itunes.apple.com/app/360flix/id1421982386?mt=8", '_blank');
						}
					}
					//android
					if (window.platform === 2) {
						const AndroidLogo = new tableItem(makeItem("img", step1Div, "scaleMedia linkHand"));
						AndroidLogo.item.style.marginBottom = "20px";
						AndroidLogo.item.src = "assets/androidStore.png";
						AndroidLogo.item.onclick = function () {
							window.open("https://play.google.com/store/apps/details?id=com.threesixtyflix.android", '_blank');
						}
					}
				}
				{
					//Step 2
					const step2Div = makeItem("div", content, "stepDivs");
					step2Div.style.paddingBottom = "40px";
					step2Div.style.marginTop = "40px";
					const two = makeItem("div", step2Div, "rounded item");
					two.appendChild(document.createTextNode("2"));

					const msg1 = makeItem("h3", step2Div);
					msg1.style.color = "#1aa3ff";
					msg1.style.margin = 0;
					msg1.style.transform = "translateY(-110%)";
					msg1.appendChild(document.createTextNode("Watch"));

					const msg2 = makeItem("h6", step2Div, "text");
					msg2.style.marginTop = "0px";
					msg2.style.marginBottom = "10px";
					msg2.style.transform = "translateY(-100%)";
					msg2.appendChild(document.createTextNode("Enjoy your content"));

					if (window.platform === 2 || window.platform === 1) {
						watch = makeItem("span", step2Div, "watch");
					}
				}
			}
			//BUTTON
			if (window.platform === 0) {
				watch = makeItem("span", content, "watch");
			}
			watch.appendChild(document.createTextNode("WATCH"));
			watch.style.align = "center";

			watch.onclick = function () {
				// WEB
				if (window.platform === 0) {
					window.open("https://cms.360flix.com/player/" + window.location.search, '_blank');
				}
				if (window.platform === 1) {
					window.location = "https://sharing.360flix.com/link/" + window.location.search;
				}
				if (window.platform === 2) {
					window.location = "intent://sharing.360flix.com/#Intent;scheme=https;package=com.threesixtyflix.android;S.sharingteam="+teamId+";end";
				}
			}
		}
		if (error) {
			let errorIcon;

			if (window.platform === 0) {
				errorIcon = makeItem("img", content, "errorImg");
			}

			if (window.platform === 2 || window.platform === 1) {
				errorIcon = makeItem("img", content, "errorImgMobile");
			}
			errorIcon.src = "assets/error.png";


			const errorMsg = makeItem("h3", content, "text");
			errorMsg.appendChild(document.createTextNode("Somthing Went Wrong..."));
			errorMsg.style.color = "#1aa3ff";


			const errorMsg2 = makeItem("h4", content, "text");
			errorMsg2.appendChild(document.createTextNode(short_code));
			errorMsg2.style.marginTop = "0px";

			if (window.platform === 0) {
				errorMsg2.style.marginBottom = "100px";
			}
			if (window.platform === 2 || window.platform === 1) {
				errorMsg2.style.marginBottom = "60px";
			}
		}

		const alsoOnMessage = makeItem("h6", content, "text");
		alsoOnMessage.appendChild(document.createTextNode("Also Available On"));
		alsoOnMessage.style.marginTop = 60 + 'px';

		if (error) {
			alsoOnMessage.style.marginBottom = 40 + 'px';
		}

		let AndroidLogo, appleLogo;
		if (window.platform === 0) {
			//AndroidLogo
			const AndroidLogo = new tableItem(makeItem("img", content, "scale linkHand"));
			AndroidLogo.item.src = "assets/android.png";
			AndroidLogo.item.onclick = function () {
				window.open("https://play.google.com/store/apps/details?id=com.threesixtyflix.android", '_blank');
			}
			//appleLogo
			const appleLogo = new tableItem(makeItem("img", content, "scale linkHand"));
			appleLogo.item.src = "assets/iosx.png";
			appleLogo.item.onclick = function () {
				window.open("https://itunes.apple.com/app/360flix/id1421982386?mt=8", '_blank');
			}


			//appletvLogo
			const appletvLogo = new tableItem(makeItem("img", content, "scale"));
			appletvLogo.item.src = "assets/appletv.png";


			makeTable([
				[AndroidLogo, appleLogo, appletvLogo]
			], content, "iconsTable item");
		}
		if (window.platform === 1 || window.platform === 2) {

			const appletvLogo = new tableItem(makeItem("img", content, "scaleMedia"));
			appletvLogo.item.src = "assets/appletv.png";

			//gearVrLogo
			const gearVrLogo = new tableItem(makeItem("img", content, "scaleMedia linkHand"));
			gearVrLogo.item.src = "assets/gearvr.png";
			gearVrLogo.item.onclick = function () {
				window.open("https://www.oculus.com/experiences/gear-vr/1930437420375372", '_blank');
			}

			//OculucLogo
			const OculucLogo = new tableItem(makeItem("img", content, "scaleMedia linkHand"));
			OculucLogo.item.src = "assets/oculusgo.png";
			OculucLogo.item.onclick = function () {
				window.open("https://www.oculus.com/experiences/gear-vr/1930437420375372", '_blank');
			}

			//DayLogo
			const DayLogo = new tableItem(makeItem("img", content, "scaleMedia linkHand"));
			DayLogo.item.src = "assets/daydream.png";
			DayLogo.item.onclick = function () {
				window.open("https://play.google.com/store/apps/details?id=com.threesixtyflix.daydream", '_blank');
			}


			makeTable([
				[gearVrLogo, OculucLogo],
				[DayLogo, appletvLogo]
			], content, "iconsTable scaleMedia item");

			makeItem("br", content)
			const webLogo = makeItem("img", content, "scaleMedia item");
			webLogo.style.display = 'block';
			webLogo.src = "assets/360player.png";
			webLogo.style.width = "50%";
			if (error) {
				webLogo.style.marginBottom = "20px";
			}

		}

		{
			if (!error) {
				const tokenContainer = makeItem("div", content, "tokenContainer text");
				tokenContainer.style.align = "center";
				tokenContainer.appendChild(document.createTextNode("Your VR/AppleTV Activation Code"));

				const token = makeItem("h2", tokenContainer);
				token.style.align = "center";
				token.appendChild(document.createTextNode(short_code));
				token.style.marginTop = 10 + 'px';
				token.style.color = "#1aa3ff";

				if (window.platform === 2 || window.platform === 1) {
					tokenContainer.style.marginBottom = "40px";
				}
			}
		}

		if (window.platform === 0) {
			if (!error) {
				const alsoOnMessage = makeItem("h6", content, "text");
				alsoOnMessage.appendChild(document.createTextNode("Use Code to Watch in VR on"));
				alsoOnMessage.style.marginTop = 20 + 'px';
				alsoOnMessage.style.marginBottom = 20 + 'px';
			}
			//gearVrLogo
			const gearVrLogo = new tableItem(makeItem("img", content, "scale linkHand"));
			gearVrLogo.item.src = "assets/gearvr.png";
			gearVrLogo.item.onclick = function () {
				window.open("https://www.oculus.com/experiences/gear-vr/1930437420375372", '_blank');
			}

			//OculucLogo
			const OculucLogo = new tableItem(makeItem("img", content, "scale linkHand"));
			OculucLogo.item.src = "assets/oculusgo.png";
			OculucLogo.item.style.transform = "translateY(30%)";
			OculucLogo.item.onclick = function () {
				window.open("https://www.oculus.com/experiences/gear-vr/1930437420375372", '_blank');
			}

			//DayLogo
			const DayLogo = new tableItem(makeItem("img", content, "scale linkHand"));
			DayLogo.item.src = "assets/daydream.png";
			DayLogo.item.onclick = function () {
				window.open("https://play.google.com/store/apps/details?id=com.threesixtyflix.daydream", '_blank');
			}

			const logos2 = makeTable([
				[gearVrLogo, OculucLogo, DayLogo]
			], content, "iconsTable2 item");

		}
		{
			//HeaderLogo
			let headerLogo;
			if (window.platform === 0) {
				headerLogo = makeItem("img", header, "vertical linkHand logoScale");
			}
			if (window.platform === 2 || window.platform === 1) {
				headerLogo = makeItem("img", header, "vertical linkHand logoScaleMedia");
			}

			headerLogo.src = "assets/headLogo.png";


			headerLogo.onclick = function () {
				window.open("http://360flix.com", '_blank');
			}
		}
		{
			//Links Page Links
			const linkSpace = 25;
			let infoLink1, infoLink2, rectangle1, rectangle2;

			if (window.platform === 0) {
				rectangle1 = new tableItem(makeItem("img", "", "rectanges"), "rectangle1");
				rectangle2 = new tableItem(makeItem("img", "", "rectanges"));


				infoLink1 = new tableItem(makeItem("a"));
				infoLink2 = new tableItem(makeItem("a"));
			}


			if (window.platform === 2 || window.platform === 1) {
				makeItem("br", content)

				infoLink1 = new tableItem(makeItem("a", content));
				rectangle1 = new tableItem(makeItem("img", content, "rectanges"));

				makeItem("br", content)
				makeItem("br", content)

				infoLink2 = new tableItem(makeItem("a", content));
				rectangle2 = new tableItem(makeItem("img", content, "rectanges"));

			}

			rectangle1.item.src = "assets/rectangle.png";
			rectangle2.item.src = "assets/rectangle.png";

			infoLink1.item.setAttribute("href", "http://360flix.com" + window.location.search);
			infoLink1.item.setAttribute("target", "_blank");
			infoLink1.item.appendChild(document.createTextNode("Learn how to use activation codes"));
			infoLink1.item.style.marginRight = 10 + 'px';



			infoLink2.item.setAttribute("href", "http://360flix.com" + window.location.search);
			infoLink2.item.setAttribute("target", "_blank");
			infoLink2.item.style.marginRight = 10 + 'px';
			infoLink2.item.appendChild(document.createTextNode("Learn more about 360FLIX"));


			//Links Page Table
			if (window.platform === 0) {
				makeTable([
					[infoLink1, rectangle1, infoLink2, rectangle2]
				], linksPageInner, "linksPageTable");
			}

		}
		//Footer
		{
			let footerMsg1, footerLogo;


			//FooterLogo
			if (window.platform === 0) {
				footerLogo = new tableItem(makeItem("img", footer, "footerLogo linkHand"));

				footerMsg1 = new tableItem(makeItem("div", footer, "footerLogo"));
			}

			if (window.platform === 2 || window.platform === 1) {
				footer.style.height = footerHeight + 30 + 'px';

				footerLogo = new tableItem(makeItem("img", footer, "footerLogoMedia2 linkHand"));

				footerMsg1 = new tableItem(makeItem("div", footer, "footerLogoMedia text"));
			}

			footerMsg1.item.appendChild(document.createTextNode("2019 @ 360FLIX - All Rights Reserved"));

			footerLogo.item.src = "assets/footerLogo.png";
			footerLogo.item.onclick = function () {
				window.open("http://360flix.com", '_blank');
			}

			if (window.platform === 0) {
				//FooterLogo
				const footerMsg2 = new tableItem(makeItem("div", footer, "footerLogo linkHand"));
				footerMsg2.item.appendChild(document.createTextNode("FAQs - Frequently Asked Questions"));
				footerMsg2.item.onclick = function () {
					window.open("https://site.360flix.com/support-articles/faqs/", '_blank');
				}

				makeTable([
					[footerLogo, footerMsg1, footerMsg2]
				], footer, "footerTable item scale");
			}
		}
	}

	let valid = false;

	const errorServer = "Please Try Again Later";
	const errorInvalid = "Invalid Share Link";

	if (window.location.search.length > 1) {
		const params = window.location.search.substr(1).split("=")
		if (params.length === 2) {
			const key = params[0]
			if (key === "team" || key === "lc" || key === "collection") {
				const val = params[1]
				if (val.length === 36) {
					valid = true;
					let xhttp = new XMLHttpRequest()
					xhttp.onreadystatechange = function () {
						if (xhttp.readyState === 4) {
							let validServer = false;
							if (xhttp.status === 200) {
								var parsedObject = JSON.parse(xhttp.responseText);
								if (parsedObject && parsedObject.data && parsedObject.data.short !== undefined) {
									validServer = true;
									if (parsedObject.data.short === null) {
										buildUI(errorInvalid, true);
									} else {
										buildTeam(parsedObject.data.photo_url, parsedObject.data.name);
										buildUI(parsedObject.data.short, false, val);
									}
								}
							} else if (xhttp.status === 404) {
								validServer = true;
								buildUI(errorInvalid, true);
							}
							if (!validServer) {
								buildUI(errorServer, true);
							}
						}
					};
					if (devMode) {
						xhttp.open("GET", "/token.json?" + val, true);
					} else {
						xhttp.open("GET", "https://cms.360flix.com/api/published/team/" + val + "/info", true);
					}
					xhttp.send();
				}
			}
		}
	}
	if (!valid) {
		buildUI(errorInvalid, true);
	}
}