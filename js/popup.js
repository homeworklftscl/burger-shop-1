!function(){let e=document.querySelector(".reviews__list"),t=document.querySelector(".reviews"),n=function(e){let n=document.createElement("div");n.innerHTML=e;let r=n.querySelector(".wrap-overlay"),i=n.querySelector(".overlay"),l=n.querySelector(".cross_message"),s=n.querySelector(".message__review"),a=n.querySelector(".message__name");return n=null,r.addEventListener("click",function(e){e.target===i&&l.click()}),l.addEventListener("click",function(){t.removeChild(r)}),{messageName:a,messageReview:s,open(){t.insertBefore(r,t.firstChild)}}}(document.querySelector("#overlayTemplate").innerHTML);e.addEventListener("click",function(e){if(e.preventDefault(),e.target.classList.contains("button_reviews")||e.target.classList.contains("button_adaptive")){let t=e.target.parentNode.parentNode,r=t.firstElementChild.innerHTML,i=t.firstElementChild.nextElementSibling.innerHTML;n.messageName.innerHTML=r,n.messageReview.innerHTML=i,n.open()}})}();