let users=[
    {
        profilePic:" https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        displayPic:"https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Delhi,India",
        name:"Harshita",
        age:21,
        interests:["music","painting"],
        bio:"lorem lorem lorem",
        isFriend:null

    },

    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        displayPic:"https://plus.unsplash.com/premium_photo-1682965455028-e5231430b7ba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Bhopal,India",
        name:"pooja",
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat architecto quidem sequi amet dolor quaerat?",
        isFriend:null

    },

    {
        profilePic:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        displayPic:"https://images.unsplash.com/photo-1540316264016-aeb7538f4d6f?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Drabhanga,India",
        name:"Tanya",
        age:15,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        isFriend:null

    },

    {
        profilePic:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1620232224149-25be08bdec08?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Hyderabad,India",
        name:"sheetal",
        age:17,
        interests:["music","painting"],
        bio:"Fugiat architecto quidem sequi amet dolor quaerat?",
        isFriend:null

    },

];



function select(elem){
    return document.querySelector(elem);

}
let curr=0;
let isAnimating=false;


function setData(index){
    select(".prflimg img").src=users[index].profilePic
    select(".badge h5").textContent=users[index].pendingMessage
    select(".location h3").textContent=users[index].location;
    select(".name h1:nth-child(1)").textContent=users[index].name
    select(".name h1:nth-child(2)").textContent=users[index].age

    let clutter="";
    users[index].interests.forEach(function(interest){

        clutter+=`<div class="tag flex justify-center px-3 py-1 items-center gap-3 bg-white/20 rounded-full ">
        <i class=" text-sm ri-music-2-line"></i>
        <h3 class="text-sm tracking-tight">${interest}</h3>
    </div>
`   })

select(".tags").innerHTML=clutter;
select(".bio  p").textContent=users[index].bio;
}

(function setInitial (){

    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1]?.displayPic;


    setData(curr)

    curr=2;

})();

function imageChange(){
    if(!isAnimating)
        {

            isAnimating=true;
            let tl=gsap.timeline({
                onComplete:function(){
                    isAnimating=false;
                    let main=select(".maincard")
                    let incoming=select(".incomingcard")
                    incoming.classList.remove("z-[2]")
                    incoming.classList.add("z-[3]")
                    incoming.classList.remove("incomincard");
        
                    main.classList.remove('z-[3]');
                    main.classList.remove('z-[2]');
                    gsap.set(main,{
                        scale:1,
                        opacity:1
        
                    })
        
                    if(curr===users.length) curr=0;
        
                    select(".maincard img").src=users[curr].displayPic;
                   
                    curr++;
                    main.classList.remove("maincard")
                    incoming.classList.add("maincard")
                    main.classList.add("incomingcard")
                }
            });
        
            tl.to(".maincard",{
                scale:1.1,
                opacity:0,
                ease:Circ,
                duration:0.97
            },"a")
            .from(".incomingcard",{
                scale:0.97,
                opacity:0,
                ease:Circ,
                duration:1.1
            },"a")


        }

 
  
}

let deny= select(".deny")
let accept=select(".accept");



deny.addEventListener("click",function(){
   imageChange();
   setData(curr-1);
   gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.06,
    ease:Power4.easeInOut,
    duration:1.5
})
  
});

accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
     y:"100%",
     opacity:0,
     stagger:.06,
     ease:Power4.easeInOut,
     duration:1.5
 })
   
 });

(function containerCreater(){
    document.querySelectorAll(".element")
    .forEach(function(element){
       let div= document.createElement("div");
       div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
       div.appendChild(element);
       select(".details").appendChild(div);
    })
})();

