let PartKepviselok = document.querySelector("#partok");
let PartKepviselokGomb = document.querySelector("#partokGomb");

PartKepviselokGomb.addEventListener("click", () => {
  let PartKivalasztas = document.querySelector("#partok");
  let eredmeny = document.querySelector("#partokEredmeny");
  let valasztottPart = PartKivalasztas.value;
  let kepviseloSzam = 0;

  for (let i = 0; i < szavazatok.length; i++) {
    if (valasztottPart == szavazatok[i].part) {
      kepviseloSzam++;
    }
  }
  let kiirandoSzoveg = "";
  if (valasztottPart === "-") {
    kiirandoSzoveg = `A függetlenként induló képviselők száma: ${kepviseloSzam}.`;
  } else if (valasztottPart) {
    kiirandoSzoveg = `A ${valasztottPart} párt által induló képviselők száma: ${kepviseloSzam}.`;
  } else {
    kiirandoSzoveg = 'Kérjük, válasszon egy pártot vagy a "független" opciót!';
  }
  eredmeny.textContent = kiirandoSzoveg;
});

// 3.
let kepviseloNev = document.querySelector("#kepviseloNev");
let kepViseloNevEredmeny = document.querySelector("#kepviseloNevEredmeny");
let kepviselolekerdezesGomb = document.querySelector("#kepviseloLekerdez");

kepviselolekerdezesGomb.addEventListener("click", () => {
  let keresettNev = kepviseloNev.value;
  let szerepelE = false;
  for (let i = 0; i < szavazatok.length; i++) {
    if (keresettNev == szavazatok[i].nev) {
      kepViseloNevEredmeny.textContent = `${keresettNev} nevezetű képviselő ${szavazatok[i].szavazat} szavazatott kapott`;
      szerepelE = true;
      break;
    }
    if (!szerepelE) {
      kepViseloNevEredmeny.textContent =
        "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
    }
  }
});

// 4.
let jogosultakSzama = 12345;
let szavazatokAranyaEredmeny = document.querySelector(
  "#szavazatokAranyaEredmeny"
);
let szavazatokAranyaGomb = document.querySelector("#szavazatokAranyaLekerdez");

szavazatokAranyaGomb.addEventListener("click", SzavazatokAranya);

function SzavazatokAranya() {
  let leadottSzavazatok = 0;
  for (let i = 0; i < szavazatok.length; i++) {
    leadottSzavazatok += szavazatok[i].szavazat;
  }

  let reszveteliArany = (leadottSzavazatok / jogosultakSzama) * 100;
  let reszveteliAranyKerekites = reszveteliArany.toFixed(2);
  szavazatokAranyaEredmeny.textContent = `A részvételi arány: ${reszveteliAranyKerekites}%`;
}

// 5.
let szavazatTablazatGomb = document.querySelector(
  "#szavazatokTablazatLekerdez"
);
let szavazatTablazatHelye = document.querySelector(
  "#szavazatokMennyisegeTablazat"
);

szavazatTablazatGomb.addEventListener("click", szavazatokMennyisegeTablazat);

function szavazatokMennyisegeTablazat() {
  szavazatTablazatHelye.innerHTML = "";
  let tablazat = document.createElement("table");
  tablazat.classList.add("table", "table-bordered", "table-dark");

  let thead = document.createElement("thead");
  let fejlec = document.createElement("tr");

  let fejlecPartok = document.createElement("th");
  fejlecPartok.textContent = "Párt neve";
  fejlec.appendChild(fejlecPartok);

  let fejlecSzavazat = document.createElement("th");
  fejlecSzavazat.textContent = "Összes szavazat";
  fejlec.appendChild(fejlecSzavazat);

  thead.appendChild(fejlec);
  tablazat.appendChild(thead);

  let tbody = document.createElement("tbody");
  let partSzavazatok = {};

  for (let i = 0; i < szavazatok.length; i++) {
    let szavazat = szavazatok[i];
    if (szavazat.part) {
      if (!partSzavazatok[szavazat.part]) {
        partSzavazatok[szavazat.part] = 0;
      }
      partSzavazatok[szavazat.part] += szavazat.szavazat;
    }
  }

  for (const part in partSzavazatok) {
    let sor = document.createElement("tr");
    let sorElem = document.createElement("td");
    sorElem.textContent = part;
    sor.appendChild(sorElem);

    let SzavazatSora = document.createElement("td");
    SzavazatSora.textContent = partSzavazatok[part];
    sor.appendChild(SzavazatSora);
    tbody.appendChild(sor);
  }
  tablazat.appendChild(tbody);
  szavazatTablazatHelye.appendChild(tablazat);
}
// 6.

let legtobbSzavazat = document.querySelector("#legtobbSzavazatEredmeny");
let legtobbSzavazatGomb = document.querySelector("#legtobbSzavazatLekerdez");

legtobbSzavazatGomb.addEventListener("click", MegjelenitlegtobbSzavazatok);

function MegjelenitlegtobbSzavazatok() {
  let legtobbSzavazatok = -1;
  let legtobbSzavazatotKapottJeloltek = [];

  for (let i = 0; i < szavazatok.length; i++) {
    if (szavazatok[i].szavazat > legtobbSzavazatok) {
      legtobbSzavazatok = szavazatok[i].szavazat;
      legtobbSzavazatotKapottJeloltek = [szavazatok[i]];
    } else if (szavazatok[i].szavazat === legtobbSzavazatok) {
      legtobbSzavazatotKapottJeloltek.push(szavazatok[i]);
    }
  }

  legtobbSzavazat.textContent = "";
  if (legtobbSzavazatotKapottJeloltek.length > 0) {
    for (let i = 0; i < legtobbSzavazatotKapottJeloltek.length; i++) {
      let jelolt = legtobbSzavazatotKapottJeloltek[i];
      let partKiiras = jelolt.part == "-" ? "független" : jelolt.part;
      legtobbSzavazat.textContent += `${jelolt.nev} (${partKiiras}) - ${jelolt.szavazat} szavazat \n`;
      legtobbSzavazat.style.whiteSpace = "pre-line";
    }
  } else {
    legtobbSzavazatElem.textContent = "Nincsenek érvényes szavazatok.";
  }
}
