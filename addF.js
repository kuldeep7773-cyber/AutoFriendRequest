let heading = document.querySelector("h4");
let addFriend = document.querySelector("#Add");
// let removeFriend = document.querySelector("#Remove");

let check = 0



addFriend.addEventListener("click", () => {
    if(check == 0 ){
       
        heading.innerHTML = "Friends"
        heading.style.color = "green"
        check = 1
        addFriend.innerHTML = "Remove"
    }else{

        addFriend.innerHTML = "Add Friend"
        heading.innerHTML = "Stranger"
        heading.style.color = "red"
        check = 0
        
        
    }
   
} );

// removeFriend.addEventListener("click", () => {
//     heading.innerHTML = "Stranger"
//     heading.style.color = "red"
// } );