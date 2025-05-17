function SzinKinyero() {
  let r = document.querySelector("#redValue").innerHTML;
  let g = document.querySelector("#greenValue").innerHTML;
  let b = document.querySelector("#blueValue").innerHTML;
  let kinyertSzin = { red: r, green: g, blue: b };
  return kinyertSzin;
}

function SzinKevero(szin) {
  let setColor = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
  document.body.style.backgroundColor = setColor;
}

function SzinkodRGB(szin) {
  document.querySelector("#RGBkodMegjelenito").innerHTML =
    "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
}

function LathatoBetuszin(szin) {
  if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
    document.body.style.color = "black";
    document.querySelector("#keveroFelulet").style.borderColor = "black";
  } else {
    document.body.style.color = "white";
    document.querySelector("#keveroFelulet").style.borderColor = "white";
  }
}

//Szorgalmi:

//Gombokhoz rendelt event függvény, próbáljátok meg paraméteresen elkészíteni
//HEXA kód megjelenítése RGB alatt - van beépített átváltó függvény
//MAZOISTÁKNAK: szöveg kifejezés megjelenítése szintén(objektumos adatokkal, nevezetes színekkel)
let redSet = document.querySelector("#redSet");
let greenSet = document.querySelector("#greenSet");
let blueSet = document.querySelector("#blueSet");

function SzinValasztoCsuszkak(event) {
  let csuszkaElem = event.target;
  let ertekKijelzo = csuszkaElem.dataset.ertekKijelzoId;
  let szinKomponens = csuszkaElem.dataset.szinKomponens;
  let valtozasJelzo = csuszkaElem.value;

  if (ertekKijelzo) {
    document.querySelector(`#${ertekKijelzo}`).innerHTML = valtozasJelzo;
  }
  let aktSzin = SzinKinyero();
  SzinKevero(aktSzin);
  SzinkodRGB(aktSzin);
  LathatoBetuszin(aktSzin);
  let hexKod = rgbToHex(aktSzin);
  megjelenitHexKod(hexKod);
}

redSet.addEventListener("input", SzinValasztoCsuszkak);

greenSet.addEventListener("input", SzinValasztoCsuszkak);

blueSet.addEventListener("input", SzinValasztoCsuszkak);

function rgbToHex(szinObjektum) {
  let red = parseInt(szinObjektum.red);
  let green = parseInt(szinObjektum.green);
  let blue = parseInt(szinObjektum.blue);
  let toHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + toHex(red) + toHex(green) + toHex(blue);
}

function megjelenitHexKod(hexKod) {
  document.querySelector("#HEXkodMegjelenito").innerHTML = hexKod;
}
