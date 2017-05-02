$(document).ready(function(){
    checkUpdateRedirect();
});

function updateRedirect() {
    setTimeout(function(){ window.location.replace("http://ngbcode.com/update"); }, 5000);
};

function checkUpdateRedirect() {
    if(window.location == "http://ngbcode.com/update") {
        clearTimeout();
    }
    else if(window.location == "http://www.ngbcode.com/update") {
        clearTimeout();
    }
    else if(window.location == "http://ngbcode.com/about") {
        clearTimeout();
    }
    else if(window.location == "http://www.ngbcode.com/about") {
        clearTimeout();
    }
    else if(window.location == "http://ngbcode.com/about/cv") {
        clearTimeout();
    }
    else if(window.location == "http://www.ngbcode.com/about/cv") {
        clearTimeout();
    }
    else {
        updateRedirect();
    }
};
