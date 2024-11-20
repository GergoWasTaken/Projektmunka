function kuldes() {
    const jovalasz1 = document.getElementById("valasz3").value;
    const jovalasz2 = document.getElementById("feladat2_valasz1").value;

    const kerdes1valasz = document.querySelector('input[name="valaszok"]:checked')?.value;
    const eredmeny1 = document.getElementById('eredmeny1');
    
    if (kerdes1valasz) {
        if (kerdes1valasz == jovalasz1) {
            eredmeny1.innerText = "Helyes válasz!";
            eredmeny1.style.color = "green";
        } else {
            eredmeny1.innerText = "Rossz válasz!";
            eredmeny1.style.color = "red";
        }
    } else {
        eredmeny1.innerText = "Kérlek válaszolj a kérdésre!";
        eredmeny1.style.color = "orange";
    }

    // Második kérdés
    const kerdes2valasz = document.querySelector('input[name="valaszok2"]:checked')?.value;
    const eredmeny2 = document.getElementById('eredmeny2');
    if (kerdes2valasz) {
        if (kerdes2valasz == jovalasz2) {
            eredmeny2.innerText = "Helyes válasz!";
            eredmeny2.style.color = "green"
        } else {
            eredmeny2.innerText = "Rossz válasz!";
            eredmeny2.style.color = "red";
        }
    } else {
        eredmeny2.innerText = "Kérlek válaszolj a kérdésre!";
        eredmeny2.style.color = "orange";
    }
}