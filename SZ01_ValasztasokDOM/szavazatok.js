const szavazatok = [
  { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
  { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
  { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
  { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
  { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
  { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
  { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
  { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
  { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
  { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
  { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
  { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
  { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
  { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
  { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
  { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
  { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
  { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
  { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
  { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
  { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
  { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
  { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
  { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
  { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
  { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
  { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
  { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
  { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
  { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
  { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
  { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
  { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
  { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
  { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
  { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
  { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
  { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
  { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
  { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];

// 1.
let kepviselokSzamaLekerdezGomb = document.querySelector(
  "#kepviselokSzamaLekerdez"
);
kepviselokSzamaLekerdezGomb.addEventListener("click", KepviselokSzama);

function KepviselokSzama() {
  let kepviselok = szavazatok.length;
  let divElem = document.querySelector("#kepviselokSzama");
  divElem.textContent = `A helyhatósági választáson ${kepviselok} képviselőjelölt indult.`;
}

// 2.
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
