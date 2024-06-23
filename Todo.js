let todo = [];
while(1){
    let req = prompt("Enter your request : ");

    if(req=="quit"){
        console.log("quitting todo");
        break;
    }

    if(req=="list"){
        let i = 0;
        for(task of todo){
            console.log(i,task);
            i++;
        }
    } else if(req=="add"){
        let element = prompt("Enter the task : ")
        todo.push(element);
    } else if(req=="delete"){
        let index = prompt("Enter the index of the task to be removed : ");
        todo.splice(index,1);
    } else{
        console.log("wrong request");       
    }
}