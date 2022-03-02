"use strict"

let selectId1 = document.getElementById("selectId1");
let selectId2 = document.getElementById("selectId2");
let selectId3 = document.getElementById("selectId3");
let selectId4 = document.getElementById("selectId4");
let selectId5 = document.getElementById("selectId5");
let selectId6 = document.getElementById("selectId6");
let selectId7 = document.getElementById("selectId7");
let selectId8 = document.getElementById("selectId8");
let selectId9 = document.getElementById("selectId9");
let selectId10 = document.getElementById("selectId10");
let selectId11 = document.getElementById("selectId11");

let selectName1 = document.getElementsByName("selectName1");
let selectName2 = document.getElementsByName("selectName2");
let selectName3 = document.getElementsByName("selectName3");
let selectName4 = document.getElementsByName("selectName4");
let selectName5 = document.getElementsByName("selectName5");
let selectName6 = document.getElementsByName("selectName6");
let selectName7 = document.getElementsByName("selectName7");
let selectName8 = document.getElementsByName("selectName8");
let selectName9 = document.getElementsByName("selectName9");
let selectName10 = document.getElementsByName("selectName10");
let selectName11 = document.getElementsByName("selectName11");
let selectName12 = document.getElementsByName("selectName12");
let selectName13 = document.getElementsByName("selectName13");
let selectName14 = document.getElementsByName("selectName14");
let selectName15 = document.getElementsByName("selectName15");

// איפוס כל הבחירות הבאות אחרי אחרי הבחירה ששונתה
function reset(val) {
	switch (val) {
		case 2: { selectId2.value = 0; selectId2.style.display = "none"; }
		case 3: { selectId3.value = 0; selectId3.style.display = "none"; }
		case 4: { selectId4.value = 0; selectId4.style.display = "none"; }
		case 5: { selectId5.value = 0; selectId5.style.display = "none"; }
		case 6: { selectId6.value = 0; selectId6.style.display = "none"; }
		case 7: { selectId7.value = 0; selectId7.style.display = "none"; }
		case 8: { selectId8.value = 0; selectId8.style.display = "none"; }
		case 9: { selectId9.value = 0; selectId9.style.display = "none"; }
		case 10: { selectId10.value = 0; selectId10.style.display = "none"; }
		case 11: { selectId11.value = 0; selectId11.style.display = "none"; }
		case 12: { select12id.value = 0; select12id.style.display = "none"; }
		case 13: { select13id.value = 0; select13id.style.display = "none"; }
		case 14: { select14id.value = 0; select14id.style.display = "none"; }
		case 15: { select15id.value = 0; select15id.style.display = "none"; }
	}
}

// התחלת בחירת כותרת

// אירוע / תקרית
selectId1.style.display = "inline-block";

selectId1.onchange = function () {
	reset(2);
	let select = selectName1[0];
	let intput = select.options[select.selectedIndex].text;
	let output = document.getElementById("articleHead");
	if (intput != "בחר/י") {
		selectId2.style.display = "inline-block";
	}
	articleHeadInnerHTML();
};

selectId2.onchange = function () {
	reset(3);
	let select = selectName2[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput == "ידוי") {
		selectId3.style.display = "inline-block";
	}
	if (intput == "השלכת") {
		selectId4.style.display = "inline-block";
	}
	if (intput == "ירי") {
		selectId5.style.display = "inline-block";
	}
	if (intput == "דקירה") {
		selectId6.style.display = "inline-block";
	}

	articleHeadInnerHTML();
}

// אבן / אבנים
selectId3.onchange = function () {
	reset(6);
	let select = selectName3[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId6.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// בקבוק / בקבוקי תבערה
selectId4.onchange = function () {
	reset(6);
	let select = selectName4[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId6.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// זולג / תועה
selectId5.onchange = function () {
	reset(6);
	let select = selectName5[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId6.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}
// סוף בחירת כותרת

// התחלת בחירת מבצע

// מבצע
selectId6.onchange = function () {
	reset(7);
	let select = selectName6[0];
	let intput = select.options[select.selectedIndex].text;

	if (intput == "צעיר" || intput == "פלסטיני" || intput == "תושב השטחים") {
		selectId7.style.display = "inline-block";
	}
	if (intput == "צעירה" || intput == "פלסטינית" || intput == "תושבת השטחים") {
		selectId8.style.display = "inline-block";
	}
	if (intput == "צעירים" || intput == "פלסטינים" || intput == "תושבי השטחים") {
		selectId9.style.display = "inline-block";
	}
	if (intput == "צעירות" || intput == "פלסטיניות" || intput == "תושבות השטחים") {
		selectId10.style.display = "inline-block";
	}
	if (intput == "אף אחד/ת" || intput == "אלמוני" || intput == "אלמונית" || intput == "אלמונים" || intput == "אלמוניות") {
		selectId11.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצע
selectId7.onchange = function () {
	reset(11);
	let select = selectName7[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId11.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעת
selectId8.onchange = function () {
	reset(11);
	let select = selectName8[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId11.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעים
selectId9.onchange = function () {
	reset(11);
	let select = selectName9[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId11.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעות
selectId10.onchange = function () {
	reset(11);
	let select = selectName10[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		selectId11.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// פצוע/ה פצועים/עות
selectId11.onchange = function () {
	reset(12);
	let select = selectName11[0];
	let intput = select.options[select.selectedIndex].text;

	if (intput == "פצוע") {
		select12id.style.display = "inline-block";
	}
	if (intput == "פצועה") {
		select13id.style.display = "inline-block";
	}
	if (intput == "מספר פצועים" || intput == "מספר פצועות") {
		select14id.style.display = "inline-block";
	}
	if (intput == "אין פצועים") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select12id.onchange = function () {
	reset(15);
	let select = selectName12[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select13id.onchange = function () {
	reset(15);
	let select = selectName13[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select14id.onchange = function () {
	reset(15);
	let select = selectName14[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select15id.onchange = function () {
	articleHeadInnerHTML();
}

// כתיבת הידיעה ע"פ הבחירות
function articleHeadInnerHTML() {
	let select;
	let intput;
	let outputH1 = document.getElementById("title");
	let outputP1 = document.getElementById("p1");
	let outputP2 = document.getElementById("p2");
	let outputP3 = document.getElementById("p3");

	outputH1.innerHTML = "";
	outputP1.innerHTML = "";
	outputP2.innerHTML = "";
	outputP3.innerHTML = "";

	select = selectName1[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML = intput;
	}

	select = selectName2[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "דקירה")
			outputP1.innerHTML = "דקירה בוצעה";
		if (intput == "ירי")
			outputP1.innerHTML = "ירי בוצע";
	}

	select = selectName3[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "אבן")
			outputP1.innerHTML = "אבן יודתה";
		if (intput == "אבנים")
			outputP1.innerHTML = "אבנים יודו";
	}

	select = selectName4[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "בקבוק תבערה")
			outputP1.innerHTML = "בקבוק תבערה הושלך";
		if (intput == "בקבוקי תבערה")
			outputP1.innerHTML = "בקבוקי תבערה הושלכו";
	}

	select = selectName5[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
	}

	select = selectName6[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		if (intput == "אף אחד/ת") {
			outputP1.innerHTML += ".";
		}
		else {
			outputP1.innerHTML += " ע''י " + intput
		}
		if (intput == "אלמוני" || intput == "אלמונית" || intput == "אלמונים" || intput == "אלמוניות") {
			outputP1.innerHTML += ".";
		}
	}

	select = selectName7[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = selectName8[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = selectName9[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = selectName10[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = selectName11[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput;
		if (intput == "אין פצועים") {
			outputP2.innerHTML += ".";
		}
	}

	select = selectName12[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = selectName13[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = selectName14[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = selectName15[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP3.innerHTML += " " + intput + ".";
	}
}