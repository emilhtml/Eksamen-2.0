function createUser() {
    var name = document.getElementById("name").value;
    var className = document.getElementById("class").value;
    var email = document.getElementById("email").value;
    var socialMedia = document.getElementById("social-media").value;
  
    // Validering af felter
    if (name === '' || className === '' || email === '' || socialMedia === '') {
      alert("Alle felter skal udfyldes.");
      return; // Stop funktionen, hvis ikke alle felter er udfyldt
    }

    if (!email.includes('@')) {
        alert("Email skal indeholde '@'.");
        return;
      }
      
      var linktilsc = /^(https?:\/\/)?(www\.)?(facebook\.com|instagram\.com)\/.+$/i;
      if (!socialMedia.match(linktilsc)) {
        alert("Sociale medier skal være en gyldig URL til enten Facebook eller Instagram.");
        return;
      }
  
    // Opret et medlem objekt
    var member = {
      name: name,
      class: className,
      email: email,
      socialMedia: socialMedia
    };
  
    // Gem medlemmet i localStorage
    var members = JSON.parse(localStorage.getItem("members")) || [];
    members.push(member);
    localStorage.setItem("members", JSON.stringify(members));
  
    // Nulstil form
    document.getElementById("member-form").reset();
  }
  