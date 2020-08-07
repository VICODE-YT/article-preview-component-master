const socialBox = document.getElementsByClassName("share-contain__social-media")[0];
const btnShare = document.getElementsByClassName("share-contain__share-btnContain")[0];
const infoContainAuthor = document.getElementsByClassName("info-contain__author")[0];
const info_contain__share_contain = document.getElementsByClassName("info-contain__share-contain")[0];
/* 
 */

btnShare.addEventListener("click",function(event){
/*     element.classList.toggle("mystyle");
 */
/*     socialBox.style.display = socialBox.style.display === 'none' ? 'flex' : 'none';
 */

/*     if(window.screen.width<1000){
 */        
    if (window.innerWidth < 1000){
        infoContainAuthor.classList.toggle("no-display");
        socialBox.style.display = (socialBox.style.display === 'none') || (socialBox.style.display === '') ? 'flex' : 'none';
        info_contain__share_contain.style.justifyContent=
            info_contain__share_contain.style.justifyContent === "flex-end" || info_contain__share_contain.style.justifyContent === ""? "space-between":"flex-end";
    }else{
        socialBox.style.display = (socialBox.style.display === 'none') || (socialBox.style.display === '') ? 'flex' : 'none';
        this.classList.toggle("share-active");
    }

});