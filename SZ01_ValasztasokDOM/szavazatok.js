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

function KepviselokSzama(vizsgaltTomb) {
  return vizsgaltTomb.length;
}

function KepviselokSzamaKiir() {
  let induloSzam = KepviselokSzama(szavazatok);
  document.querySelector(
    "#f1"
  ).innerHTML = `A helyhatósági választáson ${induloSzam} képviselőjelölt indult.`;
}

f1Gomb.addEventListener("click", KepviselokSzamaKiir);

// 2.

function PartKepviselok(vizsgaltTomb, valasztottPart) {
  let kepviseloSzam = 0;
  for (let i = 0; i < vizsgaltTomb.length; i++) {
    if (valasztottPart == vizsgaltTomb[i].part) {
      kepviseloSzam++;
    }
  }
  return kepviseloSzam;
}

function PartKepviselokKiir() {
  let valasztottPart = document.querySelector("#partKepviselok").value;
  let kepviseloSzam = PartKepviselok(szavazatok, valasztottPart);

  if (valasztottPart === "-") {
    document.querySelector(
      "#f2"
    ).innerHTML = `A függetlenként induló képviselők száma: ${kepviseloSzam}.`;
  } else if (valasztottPart) {
    document.querySelector(
      "#f2"
    ).innerHTML = `A ${valasztottPart} párt által induló képviselők száma: ${kepviseloSzam}.`;
  } else {
    document.querySelector("#f2").innerHTML =
      'Kérjük, válasszon egy pártot vagy a "független" opciót!';
  }
}

f2Gomb.addEventListener("click", PartKepviselokKiir);

// 3.
function KepviseloInfo(vizsgaltTomb) {
  let vezetekNev = document.querySelector("#vnev").value;
  let keresztNev = document.querySelector("#knev ").value;
  let keresettNev = vezetekNev + " " + keresztNev;

  let szerepelE = false;
  for (let i = 0; i < vizsgaltTomb.length; i++) {
    if (keresettNev == vizsgaltTomb[i].nev) {
      szerepelE = true;
      return vizsgaltTomb[i];
    }
  }
  return null;
}

function KepviseloInfoKiir() {
  let kepviselo = KepviseloInfo(szavazatok);
  if (kepviselo) {
    document.querySelector(
      "#f3"
    ).innerHTML = `${kepviselo.nev} nevezetű képviselő ${kepviselo.szavazat} szavazatott kapott`;
  }
  if (!kepviselo) {
    document.querySelector("#f3").innerHTML =
      "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
  }
}

f3Gomb.addEventListener("click", KepviseloInfoKiir);

//4.
function SzavazatokAranya(vizsgaltTomb) {
  let szavazasraJogosultak = 12345;
  let leadottSzavazatok = 0;
  for (let i = 0; i < vizsgaltTomb.length; i++) {
    leadottSzavazatok += vizsgaltTomb[i].szavazat;
  }
  let reszveteliArany = (leadottSzavazatok / szavazasraJogosultak) * 100;
  let reszveteliAranyKerekites = reszveteliArany.toFixed(2);
  return reszveteliAranyKerekites;
}

function SzavazatokAranyaKiir() {
  let szavazasraJogosultak = 12345;
  let arany = SzavazatokAranya(szavazatok);
  document.querySelector(
    "#f4"
  ).innerHTML = `A választáson ${szavazasraJogosultak} állampolgár, a jogosultak ${arany}%-a vett részt.`;
}

f4Gomb.addEventListener("click", SzavazatokAranyaKiir);

//5.
function SzavazatokMennyisege(vizsgaltTomb) {
  let statisztika = {};
  vizsgaltTomb.forEach(({ part, szavazat }) => {
    if (!statisztika[part]) {
      statisztika[part] = 0;
    }
    statisztika[part] += szavazat;
  });
  return statisztika;
}

function TablazatLetrehoz(statisztika) {
  let tablazatHelye = document.querySelector("#f5Tabla");

  let letezoTabla = tablazatHelye.querySelector("table");
  if (letezoTabla) {
    tablazatHelye.removeChild(letezoTabla);
  }

  let tablazat = document.createElement("table");
  tablazat.classList.add(
    "table",
    "table-bordered",
    "table-dark",
    "table-striped"
  );

  let fejlec = document.createElement("tr");

  let fejlecPart = document.createElement("th");
  fejlecPart.textContent = "Párt";

  let fejlecSzavazat = document.createElement("th");
  fejlecSzavazat.textContent = "Szavazatok száma";

  fejlec.appendChild(fejlecPart);
  fejlec.appendChild(fejlecSzavazat);
  tablazat.appendChild(fejlec);

  Object.entries(statisztika).forEach(([part, szavazat]) => {
    let sor = document.createElement("tr");

    let partNev = document.createElement("td");
    partNev.textContent = part;

    let szavazatokSzama = document.createElement("td");
    szavazatokSzama.textContent = szavazat;

    sor.appendChild(partNev);
    sor.appendChild(szavazatokSzama);
    tablazat.appendChild(sor);
  });

  tablazatHelye.appendChild(tablazat);
}

document.querySelector("#f5Gomb").addEventListener("click", () => {
  const statisztika = SzavazatokMennyisege(szavazatok);
  TablazatLetrehoz(statisztika);
});

// 6.
function legtobbSzavazat(vizsgaltTomb) {
  let jeloltek = [];
  let szavazatiErtek = 0;
  for (let i = 1; i < vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i].szavazat > szavazatiErtek) {
      maxSzavazat = vizsgaltTomb[i].szavazat;
      jeloltek = [vizsgaltTomb[i]];
    } else if (jeloltek.szavazat === szavazatiErtek) {
      jeloltek.push(vizsgaltTomb[i]);
    }
  }
  return jeloltek;
}

function legtobbSzavazatKiir() {
  let jeloltek = legtobbSzavazat(szavazatok);

  let jeloltekSzoveg = jeloltek
    .map((jelolt) => `${jelolt.nev} (${jelolt.part})`)
    .join(", ");

  document.querySelector(
    "#f6"
  ).innerHTML = `A választáson a legtöbb szavazatot kapott jelölt(ek): ${jeloltekSzoveg}`;
}

f6Gomb.addEventListener("click", legtobbSzavazatKiir);

// 7.

function Nyertesek(vizsgaltTomb) {
  let nyertesek = {};
  for (let i = 0; i < vizsgaltTomb.length; i++) {
    let jelolt = vizsgaltTomb[i];
    let korzet = jelolt.korzet;
    if (!nyertesek[korzet] || jelolt.szavazat > nyertesek[korzet].szavazat) {
      nyertesek[korzet] = jelolt;
    }
  }
  return Object.values(nyertesek).sort((a, b) => a.korzet - b.korzet);
}

function TablazatLetrehoz2(nyertesekLista) {
  let tablazatHelye = document.querySelector("#f7Tabla");

  let letezoTabla = tablazatHelye.querySelector("table");
  if (letezoTabla) {
    tablazatHelye.removeChild(letezoTabla);
  }

  let tablazat = document.createElement("table");
  tablazat.classList.add(
    "table",
    "table-bordered",
    "table-dark",
    "table-striped"
  );

  let fejlec = document.createElement("tr");

  let fejlecKorzet = document.createElement("th");
  fejlecKorzet.textContent = "Körzet";

  let fejlecJelolt = document.createElement("th");
  fejlecJelolt.textContent = "Név";

  let fejlecPart = document.createElement("th");
  fejlecPart.textContent = "Párt";

  let fejlecSzavazat = document.createElement("th");
  fejlecSzavazat.textContent = "Szavazatok száma";

  fejlec.appendChild(fejlecKorzet);
  fejlec.appendChild(fejlecJelolt);
  fejlec.appendChild(fejlecPart);
  fejlec.appendChild(fejlecSzavazat);
  tablazat.appendChild(fejlec);

  nyertesekLista.forEach(({ korzet, nev, part, szavazat }) => {
    let sor = document.createElement("tr");

    let korzetElem = document.createElement("td");
    korzetElem.textContent = korzet;

    let jeloltnevElem = document.createElement("td");
    jeloltnevElem.textContent = nev;

    let partElem = document.createElement("td");
    partElem.textContent = part;

    let szavazatokSzamaElem = document.createElement("td");
    szavazatokSzamaElem.textContent = szavazat;

    sor.appendChild(korzetElem);
    sor.appendChild(jeloltnevElem);
    sor.appendChild(partElem);
    sor.appendChild(szavazatokSzamaElem);
    tablazat.appendChild(sor);
  });
  tablazatHelye.appendChild(tablazat);
}

document.querySelector("#f7Gomb").addEventListener("click", () => {
  let nyertesekLista = Nyertesek(szavazatok);
  TablazatLetrehoz2(nyertesekLista);
});
