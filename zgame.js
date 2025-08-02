
const ddd=document.querySelectorAll(".contain");

let score=0;
let arr=[];

let a;
let i=0;



alert("game is starting");

setTimeout(()=>{
    flash();
},3000)

ddd.forEach((im,index)=>{
    im.addEventListener("click",(e)=>{
        if(check(e)){
            if(i==arr.length){
                score++;
                console.log(score);
                document.getElementById("sc").innerHTML = score;
                setTimeout(()=>{
                    flash();
                },1000)
            }
            
        }
        else{
            document.body.style.backgroundColor="red";
            document.body.innerText="Sorry Try Again";
            document.body.style.fontSize="75px";
            document.body.style.display="flex";
            document.body.style.alignItems="center";
            document.body.style.justifyContent="center";
            document.body.style.color="white";
            document.body.style.height="100vh";
            document.body.style.flexDirection="column";
            const scoreText = document.createElement("div");
            scoreText.innerText = "Score: " + score;
            document.body.appendChild(scoreText);

            setTimeout(()=>{
                location.reload();
            },3000)

        }
        
    })

})



function check(e){
    
    if(e.target.id==arr[i]){
        i++;
        return true;
    }
    return false;
    
}


function flash(){
    a=Math.floor(Math.random()*4);
    arr.push(a);
    const div=document.getElementById(a);
    div.style.backgroundColor="yellow";
    setTimeout(()=>{
        div.style.backgroundColor="blue";
    },150)
    i=0;
}