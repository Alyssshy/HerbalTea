const tabItem = document.querySelectorAll('.tabs_btn_item');
const tabContent = document.querySelectorAll('.tabs_content_item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
})
function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;
  
  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_item_active');
  })

  tabTarget.classList.add('tabs_btn_item_active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs_content_item_active');
  });

  document.querySelector(`#${button}`).classList.add('tabs_content_item_active');
}



var el = document.querySelectorAll(".menu__list-item");
console.log(el)
for (var i=0; i<el.length; i++) {
  el[i].addEventListener("mouseenter", showSub, false); 
  el[i].addEventListener("mouseleave", hideSub, false); 
}

function showSub() {
if(this.children.length>1){
  this.children[1].style.height = "auto";
   this.children[1].style.opacity = "1";
    this.children[1].style.overflow = "visible";
} else {
  return false;
}
}

function hideSub() {
if(this.children.length>1){
  this.children[1].style.height = "0";
   this.children[1].style.opacity = "0";
    this.children[1].style.overflow = "hidden";
} else {
  return false;
}
}

