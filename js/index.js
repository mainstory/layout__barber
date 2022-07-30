function scrollFixedFn() {
   const copying = document.querySelector('[data-copying]')
   const insert = document.querySelector('[data-insert-header]')

   const body = document.querySelector('[data-header-fixed]')
   const fixedTarget = document.querySelector('[data-header-fixed-target]')



   const clone = copying.cloneNode(true)
   insert.appendChild(clone)


   window.addEventListener('scroll', (event) => {
      const top = fixedTarget.getBoundingClientRect().top
      if (top < 0) {
         body.classList.add('_active')
      } else {
         body.classList.remove('_active')
      }
   })
}
scrollFixedFn()

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
}

// if (isMobile.any()) {

// }

function animBtn() {
   const btns = document.querySelectorAll('[data-anim-btn]')

   if (btns.length > 0) {

      btns.forEach((btn) => {
         btn.addEventListener('mousedown', (event) => {
            btn.classList.add('_anim')
         })
      })

      document.addEventListener('mouseup', (event) => {
         btns.forEach((btn) => {
            btn.classList.remove('_anim')
         })
      })

   }

}

if (!isMobile.any()) {
   animBtn()
}










//@ кнопки
// data-popup-login-btn
//@ основное тело
// data-popup-login
//@ крестики
// data-popup-login-cross

function popupLogin() {
   const btns = document.querySelectorAll('[data-popup-login-btn]')
   const popup = document.querySelector('[data-popup-login]')
   const overflow = document.querySelector('body')

   const crosses = document.querySelectorAll('[data-popup-login-cross]')

   if (btns.length > 0) {
      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            popup.classList.add('_active')
            overflow.classList.add('_lock-scroll')
         })
      })

      crosses.forEach((cross) => {
         cross.addEventListener('click', (event) => {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock-scroll')
         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('[data-popup-login-main-body]')) {
            popup.classList.remove('_active')
            overflow.classList.remove('_lock-scroll')
         }
      })
   }

}
popupLogin()




// иконка
//@ data-burger-icon
// основное тело
//@ data-burger-main-body
// крестик
//@ data-menu-cross

function burgerFn() {
   const btns = document.querySelectorAll('[data-burger-icon]')
   const body = document.querySelector('[data-burger-main-body]')
   const overflow = document.querySelector('body')
   const cross = document.querySelector('[data-menu-cross]')

   if (btns.length > 0) {

      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            body.classList.toggle('_active')
            overflow.classList.toggle('_lock-scroll')
         })
      })

      //@ on/off
      cross.addEventListener('click', (event) => {
         body.classList.remove('_active')
         overflow.classList.remove('_lock-scroll')
      })

      window.addEventListener('click', (event) => {
         if (!event.target.closest('[data-burger-main-body]') && !event.target.closest('[data-burger-icon]') && !event.target.closest('[data-popup-login-btn]')) {
            body.classList.remove('_active')
            overflow.classList.remove('_lock-scroll')
         }
      })

      // data-popup-login-btn
   }
}
burgerFn()

















