  const contentMap = {
    1:"INSERISCI CONTENUTO",
    2:"INSERISCI CONTENUTO",
    3:"INSERISCI CONTENUTO",
    4:"INSERISCI CONTENUTO".
    5:"INSERISCI CONTENUTO",
    6:"INSERISCI CONTENUTO",
    7:"INSERISCI CONTENUTO",
    8:"INSERISCI CONTENUTO",
    9:"INSERISCI CONTENUTO",
    10:"INSERISCI CONTENUTO",
    11:"INSERISCI CONTENUTO",
    12:"INSERISCI CONTENUTO",
    13:"INSERISCI CONTENUTO",
    14:"INSERISCI CONTENUTO",
    15:"INSERISCI CONTENUTO",
    16:"INSERISCI CONTENUTO",
    17:"INSERISCI CONTENUTO",
    18:"INSERISCI CONTENUTO",
    19:"INSERISCI CONTENUTO",
    20:"INSERISCI CONTENUTO",
    21:"INSERISCI CONTENUTO",
    22:"INSERISCI CONTENUTO",
    23:"INSERISCI CONTENUTO",
    24:"INSERISCI CONTENUTO",
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
  
