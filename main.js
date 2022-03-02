let select1id = document.getElementById("select1id");
let select2id = document.getElementById("select2id");
let select3id = document.getElementById("select3id");
let select4id = document.getElementById("select4id");
let select5id = document.getElementById("select5id");
let select6id = document.getElementById("select6id");
let select7id = document.getElementById("select7id");
let select8id = document.getElementById("select8id");
let select9id = document.getElementById("select9id");
let select10id = document.getElementById("select10id");
let select11id = document.getElementById("select11id");

let select1name = document.getElementsByName("select1name");
let select2name = document.getElementsByName("select2name");
let select3name = document.getElementsByName("select3name");
let select4name = document.getElementsByName("select4name");
let select5name = document.getElementsByName("select5name");
let select6name = document.getElementsByName("select6name");
let select7name = document.getElementsByName("select7name");
let select8name = document.getElementsByName("select8name");
let select9name = document.getElementsByName("select9name");
let select10name = document.getElementsByName("select10name");
let select11name = document.getElementsByName("select11name");
let select12name = document.getElementsByName("select12name");
let select13name = document.getElementsByName("select13name");
let select14name = document.getElementsByName("select14name");
let select15name = document.getElementsByName("select15name");

// איפוס כל הבחירות הבאות אחרי אחרי הבחירה ששונתה
function reset(val) {
	switch (val) {
		case 2: { select2id.value = 0; select2id.style.display = "none"; }
		case 3: { select3id.value = 0; select3id.style.display = "none"; }
		case 4: { select4id.value = 0; select4id.style.display = "none"; }
		case 5: { select5id.value = 0; select5id.style.display = "none"; }
		case 6: { select6id.value = 0; select6id.style.display = "none"; }
		case 7: { select7id.value = 0; select7id.style.display = "none"; }
		case 8: { select8id.value = 0; select8id.style.display = "none"; }
		case 9: { select9id.value = 0; select9id.style.display = "none"; }
		case 10: { select10id.value = 0; select10id.style.display = "none"; }
		case 11: { select11id.value = 0; select11id.style.display = "none"; }
		case 12: { select12id.value = 0; select12id.style.display = "none"; }
		case 13: { select13id.value = 0; select13id.style.display = "none"; }
		case 14: { select14id.value = 0; select14id.style.display = "none"; }
		case 15: { select15id.value = 0; select15id.style.display = "none"; }
	}
}

// התחלת בחירת כותרת

// אירוע / תקרית
select1id.style.display = "inline-block";

select1id.onchange = function () {
	reset(2);
	let select = select1name[0];
	let intput = select.options[select.selectedIndex].text;
	let output = document.getElementById("articleHead");
	if (intput != "בחר/י") {
		select2id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
};

select2id.onchange = function () {
	reset(3);
	let select = select2name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput == "ידוי") {
		select3id.style.display = "inline-block";
	}
	if (intput == "השלכת") {
		select4id.style.display = "inline-block";
	}
	if (intput == "ירי") {
		select5id.style.display = "inline-block";
	}
	if (intput == "דקירה") {
		select6id.style.display = "inline-block";
	}

	articleHeadInnerHTML();
}

// אבן / אבנים
select3id.onchange = function () {
	reset(6);
	let select = select3name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select6id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// בקבוק / בקבוקי תבערה
select4id.onchange = function () {
	reset(6);
	let select = select4name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select6id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// זולג / תועה
select5id.onchange = function () {
	reset(6);
	let select = select5name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select6id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}
// סוף בחירת כותרת

// התחלת בחירת מבצע

// מבצע
select6id.onchange = function () {
	reset(7);
	let select = select6name[0];
	let intput = select.options[select.selectedIndex].text;

	if (intput == "צעיר" || intput == "פלסטיני" || intput == "תושב השטחים") {
		select7id.style.display = "inline-block";
	}
	if (intput == "צעירה" || intput == "פלסטינית" || intput == "תושבת השטחים") {
		select8id.style.display = "inline-block";
	}
	if (intput == "צעירים" || intput == "פלסטינים" || intput == "תושבי השטחים") {
		select9id.style.display = "inline-block";
	}
	if (intput == "צעירות" || intput == "פלסטיניות" || intput == "תושבות השטחים") {
		select10id.style.display = "inline-block";
	}
	if (intput == "אף אחד/ת" || intput == "אלמוני" || intput == "אלמונית" || intput == "אלמונים" || intput == "אלמוניות") {
		select11id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצע
select7id.onchange = function () {
	reset(11);
	let select = select7name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select11id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעת
select8id.onchange = function () {
	reset(11);
	let select = select8name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select11id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעים
select9id.onchange = function () {
	reset(11);
	let select = select9name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select11id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// רקע מבצעות
select10id.onchange = function () {
	reset(11);
	let select = select10name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select11id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

// פצוע/ה פצועים/עות
select11id.onchange = function () {
	reset(12);
	let select = select11name[0];
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
	let select = select12name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select13id.onchange = function () {
	reset(15);
	let select = select13name[0];
	let intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		select15id.style.display = "inline-block";
	}
	articleHeadInnerHTML();
}

select14id.onchange = function () {
	reset(15);
	let select = select14name[0];
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

	select = select1name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML = intput;
	}

	select = select2name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "דקירה")
			outputP1.innerHTML = "דקירה בוצעה";
		if (intput == "ירי")
			outputP1.innerHTML = "ירי בוצע";
	}

	select = select3name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "אבן")
			outputP1.innerHTML = "אבן יודתה";
		if (intput == "אבנים")
			outputP1.innerHTML = "אבנים יודו";
	}

	select = select4name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
		if (intput == "בקבוק תבערה")
			outputP1.innerHTML = "בקבוק תבערה הושלך";
		if (intput == "בקבוקי תבערה")
			outputP1.innerHTML = "בקבוקי תבערה הושלכו";
	}

	select = select5name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputH1.innerHTML += " " + intput;
	}

	select = select6name[0];
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

	select = select7name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = select8name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = select9name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = select10name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP1.innerHTML += " " + intput + ".";
	}

	select = select11name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput;
		if (intput == "אין פצועים") {
			outputP2.innerHTML += ".";
		}
	}

	select = select12name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = select13name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = select14name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP2.innerHTML += " " + intput + ".";
	}

	select = select15name[0];
	intput = select.options[select.selectedIndex].text;
	if (intput != "בחר/י") {
		outputP3.innerHTML += " " + intput + ".";
	}
}