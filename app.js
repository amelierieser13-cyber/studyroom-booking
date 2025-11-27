const API_URL = https://script.google.com/macros/s/AKfycbzlgJA4Cz79DgBKEZVnDsIanf82XS7wTnLPRQ2TBum3yKVU0PDj2dPWyxdE9UDPmdBj/exec; // hier später Apps Script URL einfügen

async function loadRooms() {
  document.getElementById("rooms").innerText = "Räume werden geladen...";
}

loadRooms();
