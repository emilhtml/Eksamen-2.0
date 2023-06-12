window.addEventListener("DOMContentLoaded", function() {
  // Hent medlemsoplysninger fra localStorage
  var members = JSON.parse(localStorage.getItem("members")) || [];

  // Generer medlemsbokse baseret på medlemsoplysninger
  var container = document.querySelector(".container");
  for (var i = 0; i < members.length; i++) {
    var member = members[i];
    var medlemDiv = document.createElement("div");
    medlemDiv.classList.add("medlem");
    medlemDiv.innerHTML = `
      <h2>Navn: ${member.name}</h2>
      <h2>Klasse: ${member.class}</h2>
      <h2>Email: ${member.email}</h2>
      <h2>Sociale medier: <a href="${member.socialMedia}" target="_blank">${member.socialMedia}</a></h2>
    `;
    container.appendChild(medlemDiv);
  }
});
