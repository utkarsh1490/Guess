let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let name;
const url = "http://universities.hipolabs.com/search?country=india";
(async ()=>{
        name = await getNames();
})();
btn.addEventListener('click',function(){
    ul.innerText = "";
    for(let i =0;i<name.length;i++){
        if(input.value==name[i]['state-province']){
            console.log("alert");
            let li = document.createElement('li');
            li.innerText = name[i].name;
            ul.appendChild(li);
        }
    }
});
async function getNames(){
    try{
        let res = await axios.get(url);
        return res.data;
    }
    catch(e){
        console.log("error : ",e);
    }
}