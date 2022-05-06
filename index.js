/* eslint-disable no-undef */
"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
	const selectBoxes = document.querySelectorAll(`[id^="selectId"]`);
	selectBoxes.forEach(item => {
		this[item.id] = item;
	});

	// איפוס כל הבחירות הבאות אחרי אחרי הבחירה ששונתה
	function reset(val) {
		for (let i = val; i < 15; i++) {
			const selectedElem = window["selectId" + i];
			selectedElem.value = 0;
			selectedElem.classList.add("hide_select");
		}
	}

	// התחלת בחירת כותרת אירוע / תקרית
	const show = (elem) => {
		elem.classList.remove("hide_select");
		elem.classList.add("show_select");
		if (elem.selectedIndex === -1) {
			elem.selectedIndex = 0;
		}
	};

	selectId1.addEventListener("change", function () {
		show(selectId2);
	});

	selectId2.addEventListener("change", function () {
		reset(3);
		const option2 = selectId2.options[selectId2.selectedIndex].text;

		if (option2 == "ידוי") {
			show(selectId3);
		} else if (option2 == "השלכת") {
			show(selectId4);
		} else if (option2 == "ירי") {
			show(selectId5);
		} else if (option2 == "דקירה") {
			show(selectId6);
		}
	});

	// אבן / אבנים
	// בקבוק / בקבוקי תבערה
	// // זולג / תועה
	[selectId3, selectId4, selectId5].forEach(item => {
		item.addEventListener("change", () => {
			show(selectId6);
		});
	});
	// סוף בחירת כותרת

	// התחלת בחירת מבצע
	// מבצע
	selectId6.addEventListener("change", function () {
		reset(7);
		const intput = selectId6.options[selectId6.selectedIndex].text;

		if (intput == "צעיר" || intput == "פלסטיני" || intput == "תושב השטחים") {
			show(selectId7);
		}
		if (intput == "צעירה" || intput == "פלסטינית" || intput == "תושבת השטחים") {
			show(selectId8);
		}
		if (intput == "צעירים" || intput == "פלסטינים" || intput == "תושבי השטחים") {
			show(selectId9);
		}
		if (intput == "צעירות" || intput == "פלסטיניות" || intput == "תושבות השטחים") {
			show(selectId10);
		}
		if (intput == "אף אחד/ת" || intput == "אלמוני" || intput == "אלמונית" || intput == "אלמונים" || intput == "אלמוניות") {
			show(selectId11);
		}
	});

	// רקע מבצע
	// רקע מבצעת
	// רקע מבצעים
	// רקע מבצעות
	[selectId7, selectId8, selectId9, selectId10].forEach(item => {
		item.addEventListener("change", () => {
			reset(11);
			show(selectId11);
		});
	});

	// פצוע/ה פצועים/עות
	selectId11.addEventListener("change", function () {
		reset(12);
		const intput = selectId11.options[selectId11.selectedIndex].text;

		if (intput == "פצוע") {
			show(selectId12);
		}
		if (intput == "פצועה") {
			show(selectId13);
		}
		if (intput == "מספר פצועים" || intput == "מספר פצועות") {
			show(selectId14);
		}
		if (intput == "אין פצועים") {
			show(selectId15);
		}
	});

	[selectId12, selectId13, selectId14].forEach(item => {
		item.addEventListener("change", () => {
			reset(15);
			show(selectId15);
		});
	});

	selectId15.addEventListener("change", function () {
	});

	// observeDOM(document.getElementById("output"), function (e) {
	// 	//articleOutput();
	// 	articleTemplateOutput();
	// });

	selectBoxes.forEach(item => {
		item.addEventListener("change", function (e) {
			articleOutput();
			articleTemplateOutput();
		});
	});

	function articleTemplateOutput() {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const width = 500;
		const height = 500;
		canvas.width = canvas.height = width;

		const tempImg = document.createElement("img");
		tempImg.addEventListener("load", onTempImageLoad);
		// <div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style><em>I</em> lick <span>cheese</span></div>
		// tempImg.src = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style><em>I</em> lick <span>cheese</span></div></foreignObject></svg>`);
		const output = document.getElementById("output");
		tempImg.src = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%">${output.outerHTML}</foreignObject></svg>`);

		const { body } = document;
		const targetImg = document.getElementById("canvasOutput") || document.createElement("img");
		targetImg.id = "canvasOutput";
		body.appendChild(targetImg);

		function onTempImageLoad(e) {
			ctx.drawImage(e.target, 0, 0);
			targetImg.src = canvas.toDataURL();
		}
	}

	// כתיבת הידיעה ע"פ הבחירות
	function articleOutput() {
		const outputH1 = document.getElementById("title") || document.createElement("h1");
		outputH1.id = "title";
		const outputP1 = document.getElementById("p1") || document.createElement("p");
		outputP1.id = "p1";
		const outputP2 = document.getElementById("p2") || document.createElement("p");
		outputP2.id = "p2";
		const outputP3 = document.getElementById("p3") || document.createElement("p");
		outputP3.id = "p3";

		const output = document.getElementById("output");
		output.appendChild(outputH1);
		output.appendChild(outputP1);
		output.appendChild(outputP2);
		output.appendChild(outputP3);

		outputH1.innerHTML = selectId1.options[selectId1.selectedIndex].text;

		//Option 2
		if (selectId2.selectedIndex < 1) {
			return;
		}

		const choice = selectId2.options[selectId2.selectedIndex].text;
		if (choice === "דקירה")
			outputP1.innerHTML = "דקירה בוצעה";
		else if (choice === "ירי")
			outputP1.innerHTML = "ירי בוצע";
		else
			outputH1.innerHTML += " " + choice;

		if (selectId3.selectedIndex > 0) {
			const option = selectId3.options[selectId3.selectedIndex].text;
			outputH1.innerHTML += " " + option;
			if (option === "אבן")
				outputP1.innerHTML = "אבן יודתה";
			if (option === "אבנים")
				outputP1.innerHTML = "אבנים יודו";
		}

		if (selectId4.selectedIndex > 0) {
			const option = selectId4.options[selectId4.selectedIndex].text;
			outputH1.innerHTML += " " + option;
			if (option === "בקבוק תבערה")
				outputP1.innerHTML = "בקבוק תבערה הושלך";
			if (option === "בקבוקי תבערה")
				outputP1.innerHTML = "בקבוקי תבערה הושלכו";
		}

		if (selectId5.selectedIndex > 0) {
			outputH1.innerHTML += " " + selectId5.options[selectId5.selectedIndex].text;
		}

		if (selectId6.selectedIndex < 1) {
			return;
		}

		const option6 = selectId6.options[selectId6.selectedIndex].text;
		if (option6 !== "אף אחד/ת") {
			outputP1.innerHTML += ` ע"י ${option6}`;
			if (option6 !== "אלמוני" || option6 !== "אלמונית" || option6 !== "אלמונים" || option6 !== "אלמוניות") {
				[7, 8, 9, 10].forEach(val => {
					const selectedItem = window["selectId" + val];
					if (selectedItem.selectedIndex > 0) {
						outputP1.innerHTML += " " + selectedItem.options[selectedItem.selectedIndex].text;
						return;
					}
				});
			}
		}

		outputP1.innerHTML += ".";

		if (selectId11.selectedIndex < 1) {
			return;
		}

		outputP2.innerHTML = "";
		[11, 12, 13, 14].forEach(val => {
			const selectedItem = window["selectId" + val];
			if (selectedItem.selectedIndex > 0) {
				outputP2.innerHTML += " " + selectedItem.options[selectedItem.selectedIndex].text;
				return;
			}
		});
		outputP2.innerHTML += ".";

		if (selectId15.selectedIndex < 1) {
			return;
		}
		const intput = selectId15.options[selectId15.selectedIndex].text;
		outputP3.innerHTML = intput + ".";
	}
});