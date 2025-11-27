const API_URL = "https://script.google.com/macros/s/AKfycbzlgJA4Cz79DgBKEZVnDsIanf82XS7wTnLPRQ2TBum3yKVU0PDj2dPWyxdE9UDPmdBj/exec";

async function loadRooms() {
  const container = document.getElementById("rooms");
  container.innerText = "Räume werden geladen...";

  try {
    const res = await fetch(API_URL + "?action=rooms");
    const data = await res.json();
    container.innerHTML = "";

    data.rooms.forEach(room => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${room.name}</strong> — ${room.location} (Plätze: ${room.capacity})<br>
        <button onclick="alert('Hier kannst du später buchen')">Buchen</button>`;
      container.appendChild(div);
    });

  } catch (e) {
    container.innerText = "Fehler beim Laden der Räume.";
    console.error(e);
  }
}

loadRooms();

