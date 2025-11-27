const API_URL = "https://script.google.com/macros/s/AKfycbxepabsGH7h9cMLS2qFNH9xjrH2zrT4tB00AVhGMsgh9mi-m03ljBq5BNRVP8qYTBoJ/exec";

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

