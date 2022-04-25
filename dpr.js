
var Task =0;
let click =0;

let taskLists = [];

let addIcon = document.getElementById("add-icon");
let container = document.getElementById("container");
let dailog =document.getElementById("dailog");
let dailogforlist =document.getElementById("dailogforlist");
let addBtn =document.getElementById("addbtn");
let cancelBtn =document.getElementById("cancelbtn");
let cardContainer =document.getElementById("item2");
let btn =document.getElementById("addlist");





function addIconClick(){

    console.log("addIconClick clicked");
  
    cardDialog();

}
function cardDialog(){
   container.style.filter ="blur(2px)";
   dailog.style.display ="flex";

}

function cancel(){
    this.container.style.filter ="none";
    dailogforlist.style.display ="none";
    dailog.style.display ="none";
}


function addItem(){
    let input =document.getElementById("list-input").value;
    if(input==""){
        alert("Enter List Title");
    }else{
        createCard(input);
        console.log(input);
      
    }
}


function createCard(titleOfTask ){
  
    let objname =new Object();
    objname.name = titleOfTask;
    objname.ArrayList =[];
    objname.id =Task;
    taskLists.push(objname);

    addtaskonscreen();
   this.container.style.filter ="none";
    dailog.style.display ="none";
    console.log(taskLists);
  
}

 function addtaskonscreen(){


    const element =document.createElement("div");
    element.setAttribute("class","child");
    element.innerText= taskLists[taskLists.length-1].name;

    const existingElement =document.getElementById("card-con");

         element.innerHTML =`
        <section class="card" id="">
        <h2>${taskLists[taskLists.length-1].name}</h2>
        <hr id="hr"/>
        <div class=l id="${this.Task}">
        </div>
        <div class="action-btns">
          <i id="addl-icon" onClick="addl(${taskLists[taskLists.length-1].id})" class="material-icons">add_circle</i
          ><i class="material-icons" id="remove-icon" onClick="removel(${taskLists[taskLists.length-1].id})">delete</i>
        </div>
      </section>`;

    existingElement.appendChild(element);
    console.log(taskLists);
    this.Task+=1;
    check();

}

function addl(name){
   
    console.log(name);
    container.style.filter ="blur(2px)";
    dailogforlist.style.display ="flex";

  
    
    btn.addEventListener("click", function send(){ 
        
        let input2 =document.getElementById("list-input2").value; 
        showlist(name,input2);
        click++;
    
        if(click>=1){
            this.removeEventListener("click",send);
        }else{
      
    }
 });

}




function showlist(title,input){
   
    let t =title;
     console.log(title,input); 

     if(!taskLists[title].ArrayList.includes(input)){
          taskLists[title].ArrayList.push(input);
       }
      console.log(taskLists);
      container.style.filter ="none";
     dailogforlist.style.display ="none";

      let hr = document.getElementById(title);
       console.log(hr);
      let list = document.createElement("list");
      list.setAttribute("class",input);
      t++;
      list.innerHTML =`
      <h3>${input}</h3>
       <button id="markbtn" onClick="markthelist(${title},${taskLists[title].ArrayList.length-1})">mark the list</button>`;
      hr.appendChild(list);
       
     }


function markthelist(title,id){

   let curitem = taskLists[title].ArrayList[id];

  let item = document.getElementsByClassName(curitem)[0];
 let button = item.getElementsByTagName("button")[0];
 button.innerHTML="completed";
 button.style.backgroundColor="green";
  
  let text = item.getElementsByTagName("h3")[0];
  text.style.textDecoration ="line-through 2px red";
}
function removel(id){  
       let parent = document.getElementById("card-con");
       parent.removeChild(parent.children[id]);
       check();
}

function check(){
    const parent =document.getElementById("card-con");
if(parent.hasChildNodes()){
    let Text = document.getElementById("empty");
    Text.style.display ="none"; 
}else{
    let Text = document.getElementById("empty");
    Text.style.display ="block"; 
}
}