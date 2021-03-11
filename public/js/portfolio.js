const menu = document.querySelectorAll('.nav__item');
const openMenu = document.querySelector('.navbar__button');
const checkMenu = document.querySelector('.navbar-nav-tablet');
const chooseMenu = document.querySelector('.navbar-nav');
const contactBTN = document.querySelector('.contact-btn');
const disable =document.querySelectorAll('.disable');
const mobieNav = document.querySelectorAll('.nav__item-tablet');
const scrollTop = document.querySelector('.scrollTop');
const fate = document.querySelectorAll('.fate');




menu.forEach(item =>{
    item.onclick = ()=>{
        const nodeList = item.parentNode.querySelectorAll('a');
       nodeList.forEach(node =>{
        if(node.classList.contains('add')){
            node.classList.remove('add');
        }

       })

        item.querySelector('a').classList.add('add')
        console.log(nodeList)
    }
})


// scroll to top 
scrollTop.onclick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hide = chooseMenu.querySelectorAll('a');
    hide.forEach(node =>{
        if(node.classList.contains('add')){
            node.classList.remove('add');
        }
        if(node.classList.contains('active')){
            node.classList.add('add')
        }
      
       })


}
 // scroll page
 window.addEventListener("scroll",function(){
    var pageY= window.pageYOffset;
    if(pageY>350){
      scrollTop.style.display="block";
      scrollTop.style.opacity="1";
      scrollTop.style.transition="display 1s ease";
    }else{
      scrollTop.style.display="none";
      scrollTop.style.opacity="0";
      scrollTop.style.transition="all 0.5s ease-in-out";
    }
})
  // scroll

// IntersectionObserver
let option ={
    threshold:1,
    rootMargin: "0px 0px -25px 0px"
}
const observe = new IntersectionObserver(function(entries,observer){
    {
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.toggle('fatein');
                observer.unobserve(entry.target)
            }
        })
    }
},option)
fate.forEach(fate =>{
    observe.observe(fate)
})
// IntersectionObserver

        openMenu.onclick = () =>{
            openMenu.classList.toggle('open');
            checkMenu.classList.toggle('open__Menu');
        
        }
        contactBTN.onclick = () =>{
            document.querySelectorAll('.contact__item').forEach(item =>{
                item.classList.toggle('fade')
        })
        }
       mobieNav.forEach(item =>{
           item.onclick = () =>{
            openMenu.classList.remove('open');
            checkMenu.classList.remove('open__Menu');

               
           }
       })


        // slide 
        // var counter = 1;
        // setInterval(function(){
        // document.getElementById('radio' + counter).checked = true;
        // counter++;
        // if(counter > 4){
        //     counter = 1;
        // }
        // }, 10000);



//skills 

    function popup(data) {

        const skill = document.querySelector(data.skill);
        const skillItem = skill.querySelectorAll('.skill__item .skill__icon ');
        const type = data.type;

        skillItem.forEach(item =>{
            item.onmouseover = (e)=>{
                e.stopPropagation();
               
                var name = e.currentTarget.getAttribute('icon-name');
                var content = e.currentTarget.querySelector('.item__content .item__title');
                var contentNumber = e.currentTarget.querySelector('.item__content .item__number');
                var contentDEV = e.currentTarget.querySelector('.item__content');
                var pacentColor = contentDEV.querySelector('.pacent__color');


                var pacent = 0;
                type.forEach(item =>{
                    if(item.name === name){
                        pacent = item.value
                    }
                })
            // requestAnimationFrame    
                if(name !== null){
                    var start = 0;
                    const count = ()=>{
                        start++;
                        contentNumber.textContent = `${start} %`;
                        if(start > 75){
                            contentNumber.style.color = `red`;
                        }else{
                            contentNumber.style.color = `black`;
                        }
                        if(start < pacent){
                            requestAnimationFrame(count)
                        }
                    }
                    requestAnimationFrame(count)
             // requestAnimationFrame  
            
                    contentDEV.style.opacity = `${1}`;
                    contentDEV.style.transform = `translateY(${0})`;
                    pacentColor.style.transform = `translateX(${pacent-100}%)`

                    content.innerText = `${name} :`

                    console.log(pacent)

                }

            }
            item.onmouseout =(e)=>{
                e.stopPropagation();
                var content = e.currentTarget.querySelector('.item__content .item__title');
                var contentDEV = e.currentTarget.querySelector('.item__content');
                var pacentColor = contentDEV.querySelector('.pacent__color');

                contentDEV.style.opacity = `${0}`
                contentDEV.style.transform = `translateY(${-40}px)`;
                pacentColor.style.transform = `translateX(${-100}%)`
                content.innerText = ''
            }
        })
     

}
popup({
    skill : '#skill',
    type : 
        [
            {
                name : 'html',
                value : 75
            },
            {
                name : 'css',
                value : 80 
             },
            {
                name : 'javascript',
                value : 70
            },
            {
                name : 'react',
                value : 70
            },
            {
                name : 'scss',
                value : 71
            },
            {
                name : 'nodejs',
                value : 55
            },
            {
                name : 'bootstrap',
                value : 70
            },
            {
                name : 'mongodb',
                value : 60
            }
        ]
})


// footer 
disable.forEach(item =>{
    item.onclick = (e) =>{
        e.preventDefault();
    }
})

