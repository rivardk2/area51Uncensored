//carousel
document.addEventListener('DOMContentLoaded', function() {
    run();
});

function run(){
    var slider = document.querySelector('.js-carousel');
    lory(slider, {
        infinite: 1,
        enableMouseEvents: true,
        classNameFrame: 'js-carousel__frame',
        classNameSlideContainer: 'js-carousel__slides',
        classNamePrevCtrl: 'js-carousel__prev',
        classNameNextCtrl: 'js-carousel__next'
    });
}

//Conspiracies drop down
function toggleDocs(event) {

    if (event.target && event.target.className == 'clickable-heading') {

        var next = event.target.nextElementSibling;

        if (next.style.display == "none") {
            next.style.display = "block";

        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);