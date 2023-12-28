btn=document.querySelector(".btn")
card=document.querySelector(".card")
top1=document.querySelector(".top1")
top2=document.querySelector(".top2")
wrap=document.querySelector(".wrap")
function function1(){
    card.classList.remove("hidden");
        card.classList.add("opencard");
        setTimeout(()=>{
        document.body.style.backgroundImage="url('img1.gif')";
        document.body.style.backgroundSize="cover";},12000);
        var vara=new Vara(".text","SatisfySL.json",[
        {
            text:"Wishing You and Your Family...",
            y:150,
            fromCurrentPosition:{y:false,},
            duration:3000,
            delay:500,
        },
        {
            text:"A very very...",
            y:150,
            fromCurrentPosition:{y:false,},
            duration:2000,
            delay:2000,
        },
        {
            text:"very....",
            y:150,
            fromCurrentPosition:{y:false,},
            duration:1000,
            delay:1000,
        },
        {   
            text:"Happy New Year",
            y:150,
            fromCurrentPosition:{y:false,},
            duration:300,
            delay:2000,
        },
        {
            text:"It's 2024",
            fromCurrentPosition:{y:false,},
            y:150,
            duration:2000,
            delay:2000,
        },
        {
            text:"Let's Share Happiness with Everyone!",
            fromCurrentPosition:{y:false,},
            y:150,
            duration:3000,
            delay:1000,
        },
        {
            text:"Thank You!",
            fromCurrentPosition:{y:false,},
            y:150,
            duration:3000,
            delay:1000,
        }
        
        ],{
            fontSize:46,
            strokeWidth:2,
            color: "#fff",
            textAlign:"center"
        });
        vara.ready(()=>{
            var erase=true;
            vara.animationEnd((i,o)=>{
                if (i=="no_erase")erase=false;
                if(erase){
                    o.container.style.transition="opacity 1s 1s";
                    o.container.style.opacity=0;
                }

            });
            
        });
};
     function opencard(){
        btn.classList.add("hidden");
        top1.style.transform="rotateX(90deg)";
        top2.style.transform="rotateX(180deg)";
        window.setTimeout(function1,300);
        window.setTimeout(()=>{card.classList.add("hidden")},27000);
        window.setTimeout(()=>{wrap.classList.add("hidden")},29000);
    }

    btn.addEventListener("click",opencard);