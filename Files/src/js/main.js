window.addEventListener('scroll', function(){
    const head = this.document.querySelector('.head');
    if (window.scrollY > 50){
        head.classList.add('scrolled');
    } else {
        head.classList.remove('scrolled');
    }
});