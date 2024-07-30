const inpt=document.querySelector("#inpt");
const outp=document.querySelector(".outp");
const btn=document.querySelector(".btn");

btn.addEventListener('click',async()=>{
    const val=inpt.value;
    if(val==""){
        alert('Please enter a word');
    }
    else{
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        outp.textContent = meaning[0]['meanings'][0]["definitions"][0]["definition"];
    }
})

