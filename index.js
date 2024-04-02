const goodbye = (namePerson) => {
  const pozdrav = document.body.querySelector('.email__closing')
  pozdrav.innerHTML = 'S pozdravem, ' + namePerson
};

const fillSubject = (subject) => {
  const emailSubject = document.body.querySelector('.email__subject')
  emailSubject.innerHTML = subject
};

const fillBody = (body, namePerson) => {
  const emailBody = document.body.querySelector('.email__body')
  emailBody.innerHTML = body

  const name = document.body.querySelector('.email__closing')
  name.innerHTML = 'S pozdravem, ' + namePerson

}

goodbye('Pavel Veselý');
fillSubject('Odpověď na nabídku práce');
fillBody('Chci práci!', 'Eliška Krásnohorská');
