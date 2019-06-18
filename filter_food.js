
let menu = [
    "paneer tikka",
    "garlic bread",
    "shahi paneer",
    "onion rings",
    "tandoor chicken"

]
function isveg (food){ 
    if(food.toLowerCase().indexOf("chicken")!== -1) return false;
    if(food.toLowerCase().indexOf("egg")!== -1) return false;
      return true;
}
function oniongarlicfree(food){
    if(food.toLowerCase().indexOf("garlic")!== -1) return false;
    if(food.toLowerCase().indexOf("onion")!== -1) return false;
      return true;
}
let vegmenu=menu.filter(isveg)
let jainmenu=menu.filter(isveg).filter(oniongarlicfree)

console.log(vegmenu);
console.log(jainmenu)
