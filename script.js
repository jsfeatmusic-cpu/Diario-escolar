let points = 0;
let newsRead = 0;

function earnPoints(amount) {
    points += amount;
    newsRead++;
    updateUI();
    checkMissions();
}

function updateUI() {
    document.getElementById('user-points').innerText = points;
    
    // Lógica de Niveles
    let level = "Novato";
    let progress = (points % 100);
    
    if (points >= 100) level = "Redactor";
    if (points >= 300) level = "Cronista Senior";
    if (points >= 500) level = "Editor Jefe";
    
    document.getElementById('user-level').innerText = level;
    document.getElementById('progress').style.width = progress + "%";
}

function checkMissions() {
    if (newsRead >= 2) {
        document.getElementById('m1').checked = true;
        if (newsRead === 2) {
            alert("¡Misión Cumplida! Has leído 2 noticias. +50 puntos");
            points += 50;
            updateUI();
        }
    }
}
