"use strict";

window.addEventListener("DOMContentLoaded", (event) => {

	const selectId1 = document.getElementById("selectId1");
	const selectId2 = document.getElementById("selectId2");
	const selectId3 = document.getElementById("selectId3");
	const selectId4 = document.getElementById("selectId4");
	const selectId5 = document.getElementById("selectId5");
	const selectId6 = document.getElementById("selectId6");
	const selectId7 = document.getElementById("selectId7");
	const selectId8 = document.getElementById("selectId8");
	const selectId9 = document.getElementById("selectId9");
	const selectId10 = document.getElementById("selectId10");
	const selectId11 = document.getElementById("selectId11");
	const selectId12 = document.getElementById("selectId12");
	const selectId13 = document.getElementById("selectId13");
	const selectId14 = document.getElementById("selectId14");
	const selectId15 = document.getElementById("selectId15");

	// איפוס כל הבחירות הבאות אחרי אחרי הבחירה ששונתה
	function reset(val) {
		for (let i = val; i < 15; i++) {
			const selectedElem = window["selectId" + i];
			selectedElem.value = 0;
			//selectedElem.style.display = "none";
			selectedElem.classList.add("hide_select");
		}
	}

	// התחלת בחירת כותרת אירוע / תקרית
	// selectId1.style.display = "inline-block";

	const show = (elem) => {
		elem.classList.remove("hide_select");
		elem.classList.add("show_select");
		if (elem.selectedIndex === -1) {
			elem.selectedIndex = 0;
		}
	};

	selectId1.onchange = function () {
		// console.log("Start");
		show(selectId2, true);
		articleHeadInnerHTML();
		// console.log("End");
	};

	selectId2.onchange = function () {
		reset(3);
		const intput = selectId2.options[selectId2.selectedIndex].text; //TOOD: change var name

		if (intput == "ידוי") {
			show(selectId3);
		} else if (intput == "השלכת") {
			show(selectId4);
		} else if (intput == "ירי") {
			show(selectId5);
		} else if (intput == "דקירה") {
			show(selectId6);
		}

		articleHeadInnerHTML();
	};

	// אבן / אבנים
	selectId3.onchange = function () {
		show(selectId6, true);
		articleHeadInnerHTML();
	};

	// בקבוק / בקבוקי תבערה
	selectId4.onchange = function () {
		// reset(6);
		show(selectId6);
		articleHeadInnerHTML();
	};

	// זולג / תועה
	selectId5.onchange = function () {
		// reset(6);
		show(selectId6);
		articleHeadInnerHTML();
	};
	// סוף בחירת כותרת

	// התחלת בחירת מבצע

	// מבצע
	selectId6.onchange = function () {
		// reset(7);
		// const select = selectName6[0];
		const intput = selectId6.options[selectId6.selectedIndex].text;

		if (intput == "צעיר" || intput == "פלסטיני" || intput == "תושב השטחים") {
			show(selectId7);
			// selectId7.style.display = "inline-block";
		}
		if (intput == "צעירה" || intput == "פלסטינית" || intput == "תושבת השטחים") {
			// selectId8.style.display = "inline-block";
			show(selectId8);
		}
		if (intput == "צעירים" || intput == "פלסטינים" || intput == "תושבי השטחים") {
			// selectId9.style.display = "inline-block";
			show(selectId9);
		}
		if (intput == "צעירות" || intput == "פלסטיניות" || intput == "תושבות השטחים") {
			// selectId10.style.display = "inline-block";
			show(selectId10);
		}
		if (intput == "אף אחד/ת" || intput == "אלמוני" || intput == "אלמונית" || intput == "אלמונים" || intput == "אלמוניות") {
			// selectId11.style.display = "inline-block";
			show(selectId11);
		}
		articleHeadInnerHTML();
	};

	// רקע מבצע
	selectId7.onchange = function () {
		reset(11);
		// const intput = selectId7.options[selectId7.selectedIndex].text;
		// if (intput != "בחר/י") {
		// 	selectId11.style.display = "inline-block";
		// }
		show(selectId11);
		articleHeadInnerHTML();
	};

	// רקע מבצעת
	selectId8.onchange = function () {
		reset(11);
		// const intput = selectId8.options[selectId8.selectedIndex].text;
		// if (intput != "בחר/י") {
		// 	selectId11.style.display = "inline-block";
		// }
		show(selectId11);
		articleHeadInnerHTML();
	};

	// רקע מבצעים
	selectId9.onchange = function () {
		reset(11);
		// const intput = selectId9.options[selectId9.selectedIndex].text;
		// if (intput != "בחר/י") {
		// 	selectId11.style.display = "inline-block";
		// }
		show(selectId11);
		articleHeadInnerHTML();
	};

	// רקע מבצעות
	selectId10.onchange = function () {
		reset(11);
		// const intput = selectId10.options[selectId10.selectedIndex].text;
		// if (intput != "בחר/י") {
		// 	selectId11.style.display = "inline-block";
		// }
		show(selectId11);
		articleHeadInnerHTML();
	};

	// פצוע/ה פצועים/עות
	selectId11.onchange = function () {
		reset(12);
		const intput = selectId11.options[selectId11.selectedIndex].text;

		if (intput == "פצוע") {
			show(selectId12);
			// selectId12.style.display = "inline-block";
		}
		if (intput == "פצועה") {
			show(selectId13);
			// selectId13.style.display = "inline-block";
		}
		if (intput == "מספר פצועים" || intput == "מספר פצועות") {
			// selectId14.style.display = "inline-block";
			show(selectId14);
		}
		if (intput == "אין פצועים") {
			// selectId15.style.display = "inline-block";
			show(selectId15);
		}
		articleHeadInnerHTML();
	};

	selectId12.onchange = function () {
		reset(15);
		const intput = selectId12.options[selectId12.selectedIndex].text;
		if (intput != "בחר/י") {
			selectId15.style.display = "inline-block";
		}
		articleHeadInnerHTML();
	};

	selectId13.onchange = function () {
		reset(15);
		const intput = selectId13.options[selectId13.selectedIndex].text;
		if (intput != "בחר/י") {
			selectId15.style.display = "inline-block";
		}
		articleHeadInnerHTML();
	};

	selectId14.onchange = function () {
		reset(15);
		const intput = selectId14.options[selectId14.selectedIndex].text;
		if (intput != "בחר/י") {
			selectId15.style.display = "inline-block";
		}
		articleHeadInnerHTML();
	};

	selectId15.onchange = function () {
		articleHeadInnerHTML();
	};

	// כתיבת הידיעה ע"פ הבחירות
	function articleHeadInnerHTML() {
		const outputH1 = document.getElementById("title") || document.createElement("h1");
		outputH1.id = "title";
		const outputP1 = document.getElementById("p1") || document.createElement("p");
		outputP1.id = "p1";
		const outputP2 = document.getElementById("p2") || document.createElement("p");
		outputP2.id = "p2";
		const outputP3 = document.getElementById("p3") || document.createElement("p");
		outputP3.id = "p3";

		document.getElementById("output").appendChild(outputH1);
		document.getElementById("output").appendChild(outputP1);
		document.getElementById("output").appendChild(outputP2);
		document.getElementById("output").appendChild(outputP3);
		// outputH1.innerHTML = "";
		// outputP1.innerHTML = "";
		// outputP2.innerHTML = "";
		// outputP3.innerHTML = "";

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
		if (option6 === "אף אחד/ת") {
			outputP1.innerHTML += ".";
		}
		else {
			outputP1.innerHTML += " ע''י " + option6;
		}
		if (option6 === "אלמוני" || option6 === "אלמונית" || option6 === "אלמונים" || option6 === "אלמוניות") {
			outputP1.innerHTML += ".";
		}

		if (selectId7.selectedIndex > 0) {
			intput = selectId7.options[selectId7.selectedIndex].text;
			outputP1.innerHTML += " " + intput + ".";
		}

		if (selectId8.selectedIndex > 0) {
			intput = selectId8.options[selectId8.selectedIndex].text;
			outputP1.innerHTML += " " + intput + ".";
		}


		if (selectId9.selectedIndex > 0) {
			intput = selectId9.options[selectId9.selectedIndex].text;
			outputP1.innerHTML += " " + intput + ".";
		}

		if (selectId10.selectedIndex > 0) {
			intput = selectId10.options[selectId10.selectedIndex].text;
			outputP1.innerHTML += " " + intput + ".";
		}

		if (selectId10.selectedIndex < 1) {
			return;
		}

		intput = selectId11.options[selectId11.selectedIndex].text;
		if (intput != "בחר/י") {
			outputP2.innerHTML += " " + intput;
			if (intput == "אין פצועים") {
				outputP2.innerHTML += ".";
			}
		}

		intput = selectId12.options[selectId12.selectedIndex].text;
		if (intput != "בחר/י") {
			outputP2.innerHTML += " " + intput + ".";
		}

		intput = selectId13.options[selectId13.selectedIndex].text;
		if (intput != "בחר/י") {
			outputP2.innerHTML += " " + intput + ".";
		}

		intput = selectId14.options[selectId14.selectedIndex].text;
		if (intput != "בחר/י") {
			outputP2.innerHTML += " " + intput + ".";
		}

		intput = selectId15.options[selectId15.selectedIndex].text;
		if (intput != "בחר/י") {
			outputP3.innerHTML += " " + intput + ".";
		}
	}
});