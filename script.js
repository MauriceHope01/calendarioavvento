  const contentMap = {
    1: "Buongiorno amore, ecco il primo giorno! ❤️",
    2: "Un'altra giornata per sorridere insieme 😊",
    3: `<p>Ricordi questa giornata?</p> <img src="img/f1.jpeg" alt="Foto1" style="max-width: 100%; border-radius: 10px;">`,
    4: "Questa giornata hai vinto un coupon di bacini illimitati 😘",
    5: "Ogni giorno con te è un regalo. Ti amo più di ieri, ma meno di domani 💕",
    6: `<p>Ti ricordi le nostre prime uscite? un piccolo ricordo per te...</p> <img src="img/f2.jpeg" alt="Foto1" style="max-width: 100%; border-radius: 10px;">`,
    7: "Oggi è un altro giorno speciale da passare insieme. Sei la mia persona preferita in assoluto! 💖",
    8: "Prova a indovinare: qual è il nostro posto preferito dove ci sentiamo come a casa? 🏡",
    9: "Oggi hai vinto una cena speciale da preparare insieme a me. Cosa cuciniamo? 🍴❤️",
    10: "Ti prometto che oggi sarò buono buono, senza farti arrabbiare😜",
    11: "Immagina insieme a me: tra qualche anno, dove ci vediamo? Un viaggio, una casa, un’avventura insieme... 🌍💫",
    12: "Grazie per essere sempre al mio fianco, per ridere, amare e affrontare insieme tutto. Sei tutto ciò che desideravo e di più. 💞",
    13: "Oggi ti prometto che continuerò a lottare per te, per noi, e per la nostra felicità ogni singolo giorno. 💪💖",
    14: "Giornata di relax! Oggi si fa una maratona di film romantici, ti va? 🎬🍿",
    15: "Oggi, voglio che tu ti prenda una pausa e ti faccia coccolare... che ne dici di un massaggino? 💆‍♀️❤️",
    16: "Oggi sono 1 anno e 11 mesi di noi amore mio, Auguri a noi💖",
    17: "Oggi ti sfido a una gara di baci! Chi vince riceve un premio speciale... 😘",
    18: "Un pensiero solo per te: una lettera scritta a mano che ti dirò domani, con tanto amore. 📜❤️",
    19: "Ecco una foto di noi due insieme, un altro ricordo che tengo nel cuore... ❤️",
    20: "Immagina questo: tra 5 anni, dove saremo? Quale sogno realizzeremo insieme? 🌟",
    21: "Oggi ti sorprenderò con un piccolo regalino, preparati! 😄🎁",
    22: "Oggi ti do un piccolo indizio sul regalo che ti aspetta il 24: sarà qualcosa che ti farà sorridere! 🎁✨",
    23: "Il Natale è ancora più magico con te. Non vedo l'ora di passare queste feste insieme! 🎄",
    24: "Oggi non c'è niente da leggere, aspettami dopo lavoro che ti porto il regalino❤️"
};

  
  const days = document.querySelectorAll('.day');
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.getElementById('close');
  
  days.forEach(day => {
    day.addEventListener('click', () => {
      const dayNumber = day.getAttribute('data-day');
      modalText.innerHTML = contentMap[dayNumber];
      modal.style.display = 'flex';
    });
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  