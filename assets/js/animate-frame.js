setInterval(() => {
    $list = Object.values( document.querySelectorAll('.js-animate-frame') )
    globalThis._count = globalThis._count ? ++globalThis._count : 1
    $list.forEach(el => {
        el.style.setProperty('--count', `${globalThis._count}px` )
    })
}, 100);


