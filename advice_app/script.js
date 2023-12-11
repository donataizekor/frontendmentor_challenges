let titleEl = document.getElementById("title-el")
let msgEl = document.getElementById("msg-el")

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {   
    console.log(data); 
    displayAdvice(data);
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });
  // 👆🏾 code from https://dev.to/michaelburrows/fetch-display-data-from-a-remote-api-using-javascript-2p9o

  function displayAdvice(data){
    const advice = data.slip
    const adviceTitle = advice.id
    const adviceBody = advice.advice

    titleEl.textContent += adviceTitle
    msgEl.textContent = '"' + adviceBody + '"'
  }
 
  function refresh(){
    location.reload()
  }
  
// 👇🏾 fetch method
// async function getAdvice(){
//     let response = await fetch("https://api.adviceslip.com/advice")
//     let data = await response.json()
//     return data
// }

// getAdvice().then(response =>{
//     console.log(response)
// })

// 👇🏾 XMLHttpRequest method
// const request = new XMLHttpRequest()
// request.open("GET", "https://api.adviceslip.com/advice")
// request.send()

// request.onload = () => {
//     console.log(request)
//     if(request.status === 200){
//         console.log(JSON.parse(request.response))
//     }else{
//         console.log(`error ${request.status}`)
//     }
// }

