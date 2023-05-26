const userInput = document.getElementById('user-input')
const sendBtn = document.getElementById('send-btn')
const bossSpeech = document.getElementById('boss-speech')
const inputBtnDiv = document.getElementById('input-btn-div')

sendBtn.addEventListener('click', () => {
    if(userInput.value){
        bossSpeech.innerHTML = `Ok, just wait a second while my digital brain digests that...`
        inputBtnDiv.innerHTML = `<img class="animation-img" src="https://www.bing.com/th/id/OGC.e4b6323e19e57f6761b1ce47b7d329e0?pid=1.7&rurl=https%3a%2f%2fwww.superiorlawncareusa.com%2fwp-content%2fuploads%2f2020%2f05%2floading-gif-png-5.gif&ehk=NIXzEs%2b6APtoTbdZeN3%2fmdlmOY2bjsqwn5r5%2bAKM%2fqw%3d">`
        // window.alert(userInput.value)

    }
    
})