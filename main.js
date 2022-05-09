// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
const clickGlyph = document.querySelector(".like-glyph")
const allGlyphs = document.querySelectorAll(".like-glyph")

const addHidden = () => errorModal.className = "hidden"

function clickGlyphs(arr){
    arr.addEventListener('click', e => {
      mimicServerCall()
      .then(e =>{
        if (arr.innerHTML === EMPTY_HEART){
          arr.innerHTML = FULL_HEART
        }
        else{
          arr.innerHTML = EMPTY_HEART
        }
      })
      .catch(error => {
        errorModal.className = ""
        setTimeout(addHidden, 3000)
      })
    })
  }

clickGlyphs(allGlyphs[0])
clickGlyphs(allGlyphs[1])
clickGlyphs(allGlyphs[2])
clickGlyphs(allGlyphs[3])
clickGlyphs(allGlyphs[4])


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
