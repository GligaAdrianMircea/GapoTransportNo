let date = document.querySelector("#year")
    let cursor = document.querySelector(".cursor")
    date.textContent = new Date().getFullYear()
    let title = document.querySelector(".succes-title")
    let smallText = document.querySelector(".succes-text")
    let where = document.querySelector(".where")
    cursor.addEventListener("click", () => {
      if (!cursor.classList.contains("down")) {
        cursor.classList.add("down")
        title.textContent = text[0].no
        smallText.textContent = text[1].no
        where.textContent = text[2].no
      } else {
        cursor.classList.remove("down")
        title.textContent = text[0].en
        smallText.textContent = text[1].en
        where.textContent = text[2].en
      }
    })
    let text = [
      {
        en: "Success",
        no: "Suksess",
      },
      {
        en: "You will hear from us as soon as possible.",
        no: "Du vil høre fra oss så snart som mulig.",
      },
      {
        en: "Where to find us?",
        no: "Hvor finner vi oss?",
      },
    ]