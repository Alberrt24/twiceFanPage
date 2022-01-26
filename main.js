document.querySelector('.menu-btn').addEventListener('click', () =>
{
    document.querySelector('.nav-menu').classList.toggle('show');
})
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', {delay:500});
ScrollReveal().reveal('.cards-banner-one', {delay:500});
ScrollReveal().reveal('.cards-banner-two', {delay:500});

// funcion cargar paises ESTUDIO //
function myonload(){
    cargar_paises()
}
function cargar_paises(){
    var array=["Argentina", "United States", "United Kingdom", "Canada"]; 
    for(var i in array){
        document.getElementById('country').innerHTML += "<option value'"+array[i]+"'>"+array[i]+"</option>";
    }
}