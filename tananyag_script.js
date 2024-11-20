function gomb() {
    const felhasznaloNev = document.getElementById('felhasznaloNev').value.trim();
    const hibaUzenet = document.getElementById('hibaUzenet');
    const koszonokartya = document.getElementById('koszonokartya');
    const koszonolista = document.getElementById('koszonolista');
    const kepkartyaC = document.getElementById('kepkartya-c');
    const kepkartyaJs = document.getElementById('kepkartya-js');

    
    if (felhasznaloNev === '') {
        hibaUzenet.textContent = 'Kérlek, add meg a neved!';
        koszonokartya.style.display = 'none';
        kepkartyaC.style.display = 'none'; 
        kepkartyaJs.style.display = 'none'; 
        return;
    } else {
        hibaUzenet.textContent = '';
    }

    let koszones = '';
    for (let i = 1; i <= 10; i++) {
        koszones += `<p>${i}. Helló, ${felhasznaloNev}!</p>`;
    }

    koszonolista.innerHTML = koszones;
    koszonokartya.style.display = 'block';
    
    const imgC = document.createElement('img');
    imgC.src = 'c_ciklus.png';
    imgC.alt = 'C# ciklus';
    imgC.classList.add('img-fluid', 'm-3','mx-auto','d-block');

    const cardBodyC = kepkartyaC.querySelector('.card-body');
    cardBodyC.innerHTML = ''; 
    cardBodyC.appendChild(imgC);
    kepkartyaC.style.display = 'block'; 

    
    const imgJs = document.createElement('img');
    imgJs.src = 'js_ciklus.png';
    imgJs.alt = 'JavaScript ciklus';
    imgJs.classList.add('img-fluid', 'm-3','mx-auto','d-block'); 

    const cardBodyJs = kepkartyaJs.querySelector('.card-body');
    cardBodyJs.innerHTML = ''; 
    cardBodyJs.appendChild(imgJs);
    kepkartyaJs.style.display = 'block'; 
}


function jelenitsdMegDatumot() {
    const datumElem = document.getElementById('aktualisDatum');

    const most = new Date();
    const ev = most.getFullYear();
    const honap = (most.getMonth() + 1).toString().padStart(2, '0');
    const nap = most.getDate().toString().padStart(2, '0');

    datumElem.textContent = `${ev}.${honap}.${nap}.`;
}

document.addEventListener('DOMContentLoaded', jelenitsdMegDatumot);
