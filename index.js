
const goodbye = (jmenoUzivatele) => {
  const pozdrav = document.body.querySelector('.email__closing')
  pozdrav.innerHTML = 'S pozdravem, ' + jmenoUzivatele
};

goodbye('Pavel Veselý');
