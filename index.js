let date=document.querySelector("#year")
let cursor=document.querySelector(".cursor")

date.textContent=new Date().getFullYear()
let home=document.querySelector(".home")
let about=document.querySelector(".about")
let contact=document.querySelector(".contact")
let title=document.querySelector(".top-text")
let topBtn=document.querySelector(".top-btn")
let aboutTitle=document.querySelector(".top-text-about")
let bigText=document.querySelector(".top-text-min")
let contactTitle=document.querySelector(".main-title")
let send=document.querySelector(".main-btn")
let where=document.querySelector(".where")
cursor.addEventListener("click", ()=>{
  if(!cursor.classList.contains("down")){
    cursor.classList.add("down")
    home.textContent=text[0].no
    about.textContent=text[1].no
    contact.textContent=text[2].no
    title.textContent=text[3].no
    topBtn.textContent=text[4].no
    aboutTitle.textContent=text[5].no
    contactTitle.textContent=text[6].no
    send.textContent=text[7].no
    bigText.innerHTML=text[8].no
    where.textContent=text[9].no
  }
  else{
    cursor.classList.remove("down")
    home.textContent=text[0].en
    about.textContent=text[1].en
    contact.textContent=text[2].en
    title.textContent=text[3].en
    topBtn.textContent=text[4].en
    aboutTitle.textContent=text[5].en
    contactTitle.textContent=text[6].en
    send.textContent=text[7].en
    bigText.innerHTML=text[8].en
    where.textContent=text[9].en
  }
})
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    })
  })
})
let text=[
{
  "en":"Home",
  "no":"Mann"
},
{
  "en":"About",
  "no":"Om"
},
{
  "en":"Contact",
  "no":"Kontakt"
},
{
  "en":"BIGGER. BETTER. TOGETHER.",
  "no":"STØRRE. BEDRE. SAMMEN"
},
{
  "en":"Contact Us!",
  "no":"Kontakt Oss!"
},
{
  "en":"About",
  "no":"Om"
},
{
  "en":"Contact Us",
  "no":"Kontakt Oss"
},
{
  "en":"Send",
  "no":"Sendai"
},
{
  "en":"Gapo Transport is a new firm established in 2022 with 100% privat capital, located in the south of Norway - Kristiansand specialized in cold transportation with coolers on long distances. We cover transport to Oslo, in the north of Norway, Tromso, Finmark, Lofoten, to and from Denmark, Sweden and Finland.",

  "no":"Gapo Transport er et nytt firma etablert i 2022 med 100% privat kapital, beliggende i sør-Norge - Kristiansand spesialisert på kaldtransport med kjølere på langdistanse. Vi dekker transport til Oslo, i nord-Norge, Tromsø, Finnmark, Lofoten, til og fra Danmark, Sverige og Finland."
},
{
  "en":"Where to find us?",
  "no":"Hvor finner vi oss?"
}
]
