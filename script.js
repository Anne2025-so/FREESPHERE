const lis = document.getElementById("lis")
const menu = document.getElementById("linglang")
const links = document.querySelectorAll("#freenav a")




const btnbot = document.getElementById("bot")
const menunav = document.getElementById("men")
const navliens = document.querySelectorAll(".nav-lien a")


btnbot.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("clicked");
menunav.classList.toggle("active")


})

navliens.forEach(function(liens) {

liens.addEventListener("click",function(){
   menunav.classList.remove("active");
});
}); 


document.addEventListener("click",function(e) {
 if( 
 !menunav.contains(e.target)&&
 !btnbot.contains(e.target)
 ) {
     menunav.classList.remove("active");
 }

});












lis.addEventListener("click",function(e){


    e.stopPropagation();
    menu.classList.toggle('show');
})



function changeLang(lang){
    menu.classList.remove('show')


    if(lang === "fr"){
        links[0].textContent ="Anime";
        links[1].textContent =" Carribéen";
        links[2].textContent ="Mexicain";
        links[3].textContent ="Drame asiatique";
        links[4].textContent ="Bande-annonce";
        lis.textContent="Langue"
         homel.textContent = "Accueil";
         contactl.textContent = "Contact";
         top.textContent ="Top5";
         category.textContent = "Catégorie";
         anim.textContent = "Anime";
        cari.textContent = "Carribéen";
        mex.textContent  = "Mexicain";
        asi.textContent  = "Drame asiatique";
        tri.textContent = "Bande-annonce";

       
 


    }




if(lang === "en"){

    links[0].textContent ="Anime";
links[1].textContent ="Caribbean";
links[2].textContent ="Mexican";
links[3].textContent ="Asian drama";
links[4].textContent ="Trailer";
lis.textContent="Language";
homel.textContent = "Home";
contactl.textContent = "Contact";
top.textContent ="Top5"
category.textContent = "Category"

 anim.textContent = "Anime"
        cari.textContent = "Carribean"
        mex.textContent  = "Mexican"
        asi.textContent  = "Asian drama"
        tri.textContent = "Trailer"

}










   if(lang  === "es"){
links[0].textContent="Anime";
links[1].textContent ="Caribeño";
links[2].textContent ="Mexicano";
links[3].textContent ="Drama asiático";
links[4].textContent ="Remolque";
lis.textContent = "Idiomas"
homel.textContent = "Inicio";
contactl.textContent = "Contacto";
top.textContent ="Top5"
category.textContent = "Categoría"
 anim.textContent = "Anime"
        cari.textContent = "Caribeño"
        mex.textContent  = "Mexicano"
        asi.textContent  = "Drama asiático"
        tri.textContent = "Remolque"


}








}

function searchYourCategory(){
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

if(input === ""){
    alert("please search something");
    return;
}
if(input.includes("contact")|| input.includes("contactez")|| input.includes("contacto")){
    window.location.href="contact.html";
}
if(input.includes("home")|| input.includes("accueil")|| input.includes("inicio")){
    window.location.href="index.html"
}



else if (input.includes("anime")){
    window.location.href = "#anime"
}


else if(
    input.includes("caribbean")||
    input.includes("caribean")||
    input.includes("caraïbe")||
    input.includes("caribéen")||
    input.includes("caribeño")

){
    window.location.href = "#caribbean";
}

else if(
    input.includes("mexican")||
    input.includes("mexicano")||
    input.includes("mexicain")||
    input.includes("mexi")
    

){
    window.location.href = "#mexican";
}


else if(
    input.includes("asian")||
    input.includes("drama")||
    input.includes("asiatico")||
    input.includes("asiatique")||
    input.includes("asie")

)
{
    window.location.href = "#asian-drama";
}



else if(
    input.includes("trailer")||
    input.includes("bande-annonce")||
    input.includes("annonce")||
    input.includes("remolque")
    

)
{
    window.location.href = "#trailer";
}



else{
    alert("not found")
}
}


function changeMode(){

    document.body.classList.toggle("mode");

    const btn = document.getElementById("mode");

    if(document.body.classList.contains("mode")){
        btn.innerHTML = "☀️ Light Mode";
    }else{
        btn.innerHTML = "🌙 Dark Mode";
    }

}