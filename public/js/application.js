const count = 0
console.log(5)

const container = document.querySelector('.theme-container')
  // console.log(container)
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('link-theme')) {
      event.preventDefault()
      console.log('done')
      // console.log(event.target.href)
      const res = await fetch(event.target.href, {
        method: 'POST'
      })
      const {
        questionsList
      } = await res.json()
      console.log(questionsList)


      const html = `
    <form class='answer-form reg-form' method="post" action="/check/answer">
    <div>${questionsList[count].description}</div>
            <input type="text" class="form-control" placeholder = 'Введите ответ' id="exampleInputEmail1" aria-describedby="emailHelp" name="name"/>
          
          <button type="submit" class="btn btn-primary">Следующий</button>
          <a href='/home' class= "link-theme btn btn-outline-dark">Выбрать тему</a>
        </form>
        
        `

      const answerField = document.querySelector('.theme-container')
      answerField.innerHTML = html

      const form = document.querySelector('.answer-form')
      form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const res = await fetch(`/check/answer/${event.target.name.value}`, {
          method: 'POST'
        })
        const data = await res.text()
        console.log(data)
        if (data === "null") {
          alert('Ответ неправильный')
        } else if (data === 'Ok') {
          alert('Ответ правильный')
        }
        const href = document.querySelector('.link-theme')
        console.log(href)
        console.log(form)
      })






    }
  })