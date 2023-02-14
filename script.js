



function myFunction1() {

    document.getElementById("downM1").classList.toggle("show");


}
function myFunction2() {

    document.getElementById("downM2").classList.toggle("show");
}
function myFunction3() {

    document.getElementById("downM3").classList.toggle("show");
}
function myFunction4() {

    document.getElementById("downM4").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop1')) {
        myFunction1();
        var dropdowns = document.getElementsByClassName("content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');


            }
        }
    }
    if (!event.target.matches('.drop2')) {

        var dropdowns = document.getElementsByClassName("content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');

            }
        }
    }
    if (!event.target.matches('.drop3')) {
        var dropdowns = document.getElementsByClassName("content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');

            }
        }
    }
    if (!event.target.matches('.drop4')) {
        var dropdowns = document.getElementsByClassName("content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');

            }
        }
    }
}

