const socialBox = document.getElementsByClassName("share-contain__social-media")[0];
const btnShare = document.getElementsByClassName("share-contain__share-btnContain")[0];


/* 
 */

btnShare.addEventListener("click",function(event){
/*     element.classList.toggle("mystyle");
 */
/*     socialBox.style.display = socialBox.style.display === 'none' ? 'flex' : 'none';
 */
    socialBox.style.display = (socialBox.style.display === 'none') || (socialBox.style.display === '') ? 'flex' : 'none';
    this.classList.toggle("share-active");
});
