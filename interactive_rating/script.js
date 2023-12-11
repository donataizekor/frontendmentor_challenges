const scoreNum = document.getElementsByClassName('num')
const feedbackScore = document.getElementsByClassName('feedback-score')

for (const i of scoreNum) {
    i.addEventListener('click', function handleClick() {
      i.classList.toggle('active');
      const numElement = i.innerHTML

  
      feedbackScore.innerHTML = `You selected ${numElement} out of 5`



    });
  }

