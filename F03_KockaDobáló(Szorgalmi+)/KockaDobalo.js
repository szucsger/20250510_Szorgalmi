var dobasok = [];

function KockaDobas() {
  return Math.round(Math.random() * 5) + 1;
  //return Math.floor(Math.random() * 6) + 1;
}

function TobbKockaDobas(dobasokMennyisege) {
  let tobbDobas = [];
  for (let i = 0; i < dobasokMennyisege; i++) {
    tobbDobas.push(KockaDobas());
  }
  return tobbDobas;
}

kockaEldobasa.addEventListener("click", () => {
  KockaMegjelenites(3);
}); //PARAMÉTERES ADD EVENT LISTENER! BEST OF :) #ARROWFUNCTION

function KockaMegjelenites(dobasokMennyisege) {
  let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
  for (let i = 0; i < megtortentDobasok.length; i++) {
    dobasok.push(megtortentDobasok[i]);
  }
  document.querySelector("#kockaKep01").style.backgroundImage =
    "url(img/" + megtortentDobasok[0] + ".png)";
  document.querySelector("#kockaKep02").style.backgroundImage =
    "url(img/" + megtortentDobasok[1] + ".png)";
  document.querySelector("#kockaKep03").style.backgroundImage =
    "url(img/" + megtortentDobasok[2] + ".png)";

  document.querySelectorAll(".kocka").forEach((kocka) => {
    kocka.style.border = "2px solid black";
    kocka.style.boxShadow = "3px 3px 5px black";
  });

  //Feladatok megoldásai: 2-5
  MaxDobas(megtortentDobasok);
  HatosDobas(megtortentDobasok);
  TriplaHatos(megtortentDobasok);
  Egyformak(megtortentDobasok);

  //szorgalmi
  KulonbozoDobasok(megtortentDobasok);
  LegRitkabbKocka(megtortentDobasok);
  legGyakoribbKocka(megtortentDobasok);
  parosGyakorisag(megtortentDobasok);
  CsakParatlanok(megtortentDobasok);
  SorozatokSzama(megtortentDobasok);
}

function DobasokSzama() {
  let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < dobasok.length; i++) {
    dobasMennyiseg[0] += dobasok[i];
    dobasMennyiseg[dobasok[i]]++;
  }
  return dobasMennyiseg;
}

function AtlagSzamitas(eredmenyek) {
  return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
  document.querySelector("#egyes").innerHTML = eredmenyek[1];
  document.querySelector("#kettes").innerHTML = eredmenyek[2];
  document.querySelector("#harmas").innerHTML = eredmenyek[3];
  document.querySelector("#negyes").innerHTML = eredmenyek[4];
  document.querySelector("#otos").innerHTML = eredmenyek[5];
  document.querySelector("#hatos").innerHTML = eredmenyek[6];
  document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
  document.querySelector("#osszesen").innerHTML = eredmenyek[0];
  document.querySelector("#atlag").innerHTML =
    AtlagSzamitas(eredmenyek).toFixed(2);
}

kockaEldobasa.addEventListener("click", () => {
  StatisztikaKiir(DobasokSzama());
});

/*
    Feladat leírása:
    Lesz 3 darab kocka megjelenítve, mely kockákról statisztikák készülnek
    1. Mennyi vold a dobások átlaga? [megvan]
    2. Mennyi volt a legnagyobb dobás? 
    3. Hányszor volt 6-os dobás? 
    4. Volt-e tripla hatos? - 3 kockára 
    5. Hányszor volt három egyforma? - 3 kockára 
*/

//Mennyi volt a legnagyobb dobás?
function MaxDobas(aktDobasok) {
  let aktDobasokOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
  let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
  if (aktDobasokOsszege > eddigiLegnagyobb) {
    document.querySelector("#legnagyobb").innerHTML = aktDobasokOsszege;
  }
}

//Hányszor volt 6-os dobás?
function HatosDobas(aktDobasok) {
  for (let i = 0; i < aktDobasok.length; i++) {
    if (aktDobasok[i] == 6) {
      let aktMennyiseg = document.querySelector("#hatosok").innerHTML; //Kiolvaso,
      aktMennyiseg++;
      document.querySelector("#hatosok").innerHTML = aktMennyiseg; //Visszaírom
    }
  }
}

//Volt-e tripla hatos? - 3 kockára
function TriplaHatos(aktDobasok) {
  if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
    document.querySelector("#triplahatos").innerHTML = "Volt";
  }
}

//Hányszor volt három egyforma? - 3 kockára
function Egyformak(aktDobasok) {
  if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
    let aktMennyiseg = document.querySelector("#egyformak").innerHTML; //Kiolvasom
    aktMennyiseg++;
    document.querySelector("#egyformak").innerHTML = aktMennyiseg; //Visszaírom
  }
}

/*
    (SZORGALMIK:)
    6. Hányszor volt három különböző? - 3 kockára
    7. Melyik kocka összeg fordul elő legkevesebbszer?
    8. Melyik kocka összeg fordul elő legtöbbször?
    9. Hány százalékában szerepelt a kettes a négyes vagy a hatos?
    10. Hányszor dobtunk csak páratlant?
    11. Mikor dobtunk ki sorozatot?  pl.: 123 234 345 456 és ugyanez visszafelé
*/
//6.
function KulonbozoDobasok(aktDobasok) {
  if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2]) {
    let aktMennyiseg = document.querySelector("#kulonbozo").innerHTML;
    aktMennyiseg++;
    document.querySelector("#kulonbozo").innerHTML = aktMennyiseg;
  }
}
//7.
function LegRitkabbKocka() {
  let dobasMennyiseg = DobasokSzama();
  let minElofordulas = Infinity;
  let legritkabbak = [];

  for (let i = 1; i < dobasMennyiseg.length; i++) {
    if (dobasMennyiseg[i] < minElofordulas) {
      minElofordulas = dobasMennyiseg[i];
    }
  }

  for (let i = 1; i < dobasMennyiseg.length; i++) {
    if (dobasMennyiseg[i] === minElofordulas) {
      legritkabbak.push(i);
    }
  }

  document.getElementById("legRitkabbKocka").textContent =
    legritkabbak.join(", ");
  return legritkabbak;
}
//8.
function legGyakoribbKocka() {
  let dobasMennyiseg = DobasokSzama();
  let maxElofordulas = 0;
  let leggyakoribbak = [];

  for (let i = 1; i < dobasMennyiseg.length; i++) {
    if (dobasMennyiseg[i] > maxElofordulas) {
      maxElofordulas = dobasMennyiseg[i];
    }
  }

  for (let i = 1; i < dobasMennyiseg.length; i++) {
    if (dobasMennyiseg[i] === maxElofordulas) {
      leggyakoribbak.push(i);
    }
  }

  document.getElementById("legGyakoribbKocka").textContent =
    leggyakoribbak.join(", ");
  return leggyakoribbak;
}

//9.
function parosGyakorisag() {
  let parosDobasok = 0;
  for (let i = 0; i < dobasok.length; i++) {
    if (dobasok[i] == 2 || dobasok[i] == 4 || dobasok[i] == 6) {
      parosDobasok++;
    }
  }
  let szazalek = (parosDobasok / dobasok.length) * 100;
  document.querySelector("#parosGyakorisag").textContent =
    szazalek.toFixed(2) + "%";
  return szazalek.toFixed(2) + "%";
}

//10.
function CsakParatlanok() {
  let paratlanok = 0;
  for (let i = 0; i < dobasok.length; i++) {
    if (dobasok[i] % 2 !== 0) {
      paratlanok++;
    }
  }
  document.querySelector("#paratlanokSzama").textContent = paratlanok;
  return paratlanok;
}

//11.
function SorozatokSzama(aktDobasok) {
  if (
    aktDobasok[0] + 1 === aktDobasok[1] &&
    aktDobasok[1] + 1 === aktDobasok[2]
  ) {
    document.querySelector("#sorozatokSzama").textContent = "Növekvő sorozat!";
    return "Növekvő sorozat!";
  }

  if (
    aktDobasok[0] - 1 === aktDobasok[1] &&
    aktDobasok[1] - 1 === aktDobasok[2]
  ) {
    document.querySelector("#sorozatokSzama").textContent = "Csökkenő sorozat!";
    return "Csökkenő sorozat!";
  }

  document.querySelector("#sorozatokSzama").textContent = "Nincs sorozat!";
  return "Nincs sorozat!";
}
