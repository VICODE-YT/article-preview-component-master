const socialBox = document.getElementsByClassName("social-media")[0];
const btnShare = document.getElementsByClassName("article-component__share-contain")[0];
const rectBtnShare = btnShare.getBoundingClientRect();
const rectSocialBox = socialBox.getBoundingClientRect();

/* 
 */

btnShare.addEventListener("click",function(event){
/*     element.classList.toggle("mystyle");
 */
/*     socialBox.style.display = socialBox.style.display === 'none' ? 'flex' : 'none';
 */
    socialBox.style.top = (event.clientY - rectSocialBox.height -10)+"px";
    socialBox.style.left = (event.clientX - (rectSocialBox.width/2)) + "px";
    socialBox.style.visibility = socialBox.style.visibility === 'hidden' ? 'visible' : 'hidden';
});
