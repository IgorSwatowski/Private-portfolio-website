document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
        window.scroll({
            top: elem.offsetTop - 15,
            left: 0, 
            behavior: 'smooth',
        });
       setTimeout(function(){
            window.location.hash = this.hash;
        }, 2000); 
    });
});