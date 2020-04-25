export function updater (response) {
  response.json().then((data) => {
  if(data.error) {
    messageOne.textContent = data.error
  } else { 
    const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
    
    messageOne.textContent = 'Text polarity: ' + data.polarity
    messageTwo.textContent = 'Polarity confidence: ' + data.polarityConfidence
    messageThree.textContent = 'Subjectivity confidence: ' + data.subjectivityConfidence
    
  }
  
})}



