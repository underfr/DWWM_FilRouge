/*------------------
Tranparent Scrollbar
------------------*/

window.addEventListener('scroll', function(){
    const link = document.querySelectorAll('.link');
    const head = this.document.querySelector('.head');
    if (window.scrollY > 50){
        head.classList.add('scrolled');
        link.forEach(link => {
            link.classList.add('linkBlack');
        });
    } else {
        head.classList.remove('scrolled');
        link.forEach(link => {
            link.classList.remove('linkBlack');
        });
    }
});