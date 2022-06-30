// NAV OPTIONS
const active = (event,target)=>{
    event.preventDefault();
     if(target.children[1].classList[1] === undefined){
        clean()
        target.children[0].children[0].classList.add("nav__active");
        target.children[1].classList.add("active");
        return
    }
    if(target.children[1].classList[1] === 'active'){
    target.children[1].classList.remove("active");
    target.children[0].children[0].classList.remove("nav__active");
    return
    } 
   }

   const clean = () =>{
     let nav = document.querySelector('.nav__mainnav')
    
     for (let index = 0; index < nav.children.length; index++) {  
       nav.children[index].children[1].classList.remove("active")
       nav.children[index].children[0].children[0].classList.remove('nav__active')

  
     }
   }

  // MENU
  const change = (target) => {
    target.classList.toggle("change")
    
    activeNav();
  }

  const activeNav = () =>{
    let change = document.querySelector('.nav__mainbar')
    console.log(change.classList[1])
    change.classList.toggle("nav__open")
  }