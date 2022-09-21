let mainEl = document.querySelector('main')
console.log(mainEl)
 
 mainEl.style.backgroundColor= 'var(--main-bg)'


 mainEl.innerHTML ="<h1>SEI Rocks!</h1>"



 mainEl.classList.add('flex-ctr')
 //mainEl.setAttribute('class','flex-ctr')
//mainEl.className.add('flex-ctr)


let topMenuEl= document.getElementById('top-menu')
console.log(topMenuEl)
topMenuEl.style.height='100%'
topMenuEl.style.backgroundColor= 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


menuLinks.forEach(item => {
    console.log(item.text)
    const newA = document.createElement("a");  //create
    newA.setAttribute('href',item.href)      // add href 
    //newA.innerHTML=item.text   
    newA.textContent = item.text        //set element content to text property
    topMenuEl.append(newA)                //append the new element to topMenu


})