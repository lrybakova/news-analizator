export function submitter(e) {
  e.preventDefault()
  //textForm.addEventListener('click', submitter);
  let textQuery = document.querySelector('textarea')
  let messageOne = document.querySelector('#message-1')
  let messageTwo = document.querySelector('#message-2')
  let messageThree = document.querySelector('#message-3')
  const text = textQuery.value
 
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  messageThree.textContent = ''
  messageFour.textContent = ''
  fetch('http://localhost:3000/api?text=' + text, {headers: {'Access-Control-Allow-Origin':'*'}}).then((response) => {
    if (text.length <= 20) {
      messageOne.textContent = 'Text must be at least 20 characters long. Try again!'
    } else {
      Client.updater(response)
    }
  })
}

