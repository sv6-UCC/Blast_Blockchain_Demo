  
  let first="a";
  let second="b";
  let third="c";
  let fourth="d";
  let counter=0;
  let counter2=0;
  let my_date='-';
  let changes=1;
  let options="";
  let country_list=[];
  let china=0;
  let india=0;
  let brazil=0;
  let australia=0;
  let item_list=[];
  let weight_list=[];
  let location_list=[];
  let date_list=[];
  let bound=0;
  let plz="";
  let velo=100;
  let tx_id=1012;
  let counter3=1;
  let jumbo=0;
  
angular
  .module('app')
  .component('tokensPage', {
    templateUrl: 'pages/tokens/tokens.html',
    controller: TokensPageController,
    controllerAs: 'vm',
    bindings: {}
  });


function TokensPageController() {

  

  var XHR_new = new XMLHttpRequest();
  XHR_new.open("GET", "morefood.txt", false);
  XHR_new.send(null);
  var category=XHR_new.responseText.split(/\r\n|\n/);
  veg=category[10].split(",");
  con=category[11].split(",");
  fru=category[12].split(",");
  sna=category[13].split(",");

  var select = document.getElementById("selectNumber");
  var select2 = document.getElementById("selectWeight");
  var select3 = document.getElementById("selectLocation");
  select.style.display="None";
  select2.style.display="None";
  select3.style.display="None";
  for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    try{
      select.appendChild(el);
    }
    catch{
      break
    }
    
}
    select.style.display="Block";
    select2.style.display="Block";
    select3.style.display="Block";
  var select0 = document.getElementById("selectCat");
var options0 = [veg[0], con[0], fru[0], sna[0]];

for(var i = 0; i < options0.length; i++) {
    var opt0 = options0[i];
    var el0 = document.createElement("option");
    el0.textContent = opt0;
    el0.value = opt0;
    try{
      select0.appendChild(el0);
    }
    catch{
      break
    }
    
}


var options2 = ["25 ton", "50 ton", "100 ton", "200 ton", "500 ton"];

for(var j = 0; j < options2.length; j++) {
    var opt2 = options2[j];
    var el2 = document.createElement("option");
    el2.textContent = opt2;
    el2.value = opt2;
    try{
      select2.appendChild(el2);
    }
    catch{
      break
    }
    
}


var options3 = ["Cod", "Salmon", "Mackerel", "Pike"];

for(var k = 0; k < options3.length; k++) {
    var opt3 = options3[k];
    var el3 = document.createElement("option");
    el3.textContent = opt3;
    el3.value = opt3;
    try{
      select3.appendChild(el3);
    }
    catch{
      break
    }
    
}


// Adding the entire table to the body tag
  console.log(first);
  console.log("ooh");
  var vm = this;
  //{number:"potatoes",value: 200, from: 'India', to: '2/7'}
  vm.peers = [{
    name: 'Your Initial Block',
    blocks: [{
      number: my_date,
      nonce: 83838,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: "-",
      changer:100,
      nonce: 23802,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
    },{
      number: "-",
      changer:101,
      nonce: 39482,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: "-",
      changer:102,
      nonce: 49022,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: "-",
      changer:103,
      nonce: 62556,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: "-",
      changer:104,
      nonce: 29101,
      data: {
        //txs: [{number:first,value: second, from: third, to: fourth}, {number:"carrots",value: 80, from: 'China', to: '2/7'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }]
  }, {
    name: 'Atlantic Dawn',
    blocks: [ {
      number: '2022-01-02',
      nonce: 134620,
      data: {
       // txs: [{to:'10/5',value: 100, from: 'Columbia', number: 'bananas'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: '2022-02-10',
      nonce: 73613,
      data: {
       // txs: [{to:'10/5',value: 100, from: 'Columbia', number: 'bananas'}]
      },
    },{
      number: '2022-03-13',
      nonce: 64690,
      data: {
       // txs: [{to:'10/5',value: 100, from: 'Columbia', number: 'bananas'}]
      },
    }]
  }, {
    name: 'Leila Ship',
    blocks: [{
      number: '2022-02-19',
      nonce: 144637,
      data: {
        //txs: [{to:'11/5',value: 200, from: 'Brazil', number: 'coffee'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: '2022-03-24',
      nonce: 41810,
      data: {
       // txs: [{to:'10/5',value: 100, from: 'Columbia', number: 'bananas'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    },{
      number: '2022-04-27',
      nonce: 63286,
      data: {
       // txs: [{to:'10/5',value: 100, from: 'Columbia', number: 'bananas'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }]
  }];
  plz=vm.peers[0].blocks[0].nonce;
  console.log("look here");
  console.log(JSON.stringify(vm.peers.blocks));
}

function test(){
  var elements=document.getElementsByClassName("jail ng-scope");
  for(var i = 0; i < elements.length; i++){
    elements[i].style.display="None";
  }
}

window.onload = function() {
  var chart_data = [{
    values: [50, 25, 25],
    labels: ['Pike', 'Cod', 'Salmon'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('myDiv', chart_data, layout);
  var XHR = new XMLHttpRequest();
  XHR.open("GET", "items.txt", false);
  XHR.send(null);
  var choice=XHR.responseText.split(/\r\n|\n/);
  console.log(choice[1]);
  bar=choice[2].split(",");
  console.log(bar[0]);
  var my_list=[0,1,2,3,4,5,6,7];
  document.getElementById(100).style.display="None";
  document.getElementById(101).style.display="None";
  document.getElementById(102).style.display="None";
  document.getElementById(103).style.display="None";
  document.getElementById(104).style.display="None";
  var blast=6;
  for(var i = 0; i <8 ; i+=1){
    try{
    console.log(my_list[i]);
    bar=choice[my_list[i]].split(",");
    var tr = "<tr>";
    var t = "";
    tr += "<td>"+bar[0]+"</td>";
    tr += "<td>"+bar[1]+"</td>";
    tr += "<td>"+bar[2]+"</td>";
    tr += "<td>"+bar[3]+"</td>";
    tr += "<td>"+bar[4]+"</td>";
    tr += "<td>"+bar[5]+"</td>";
    tr += "</tr>";
    t += tr;
    //bar2=choice[my_list[i+1]].split(",");
    var tr2 = "<tr>";
    var t2 = "";
    tr2 += "<td>"+bar[6]+"</td>";
    tr2 += "<td>"+bar[7]+"</td>";
    tr2 += "<td>"+bar[8]+"</td>";
    tr2 += "<td>"+bar[9]+"</td>";
    tr2 += "<td>"+bar[10]+"</td>";
    tr2 += "<td>"+bar[11]+"</td>";
    tr2 += "</tr>";
    t2 += tr2;
    try{
    document.getElementById(blast).innerHTML += t
    document.getElementById(blast).innerHTML += t2
    blast++;
    }
    catch{
      console.log("o");
    }
  }
  catch{
    break;
  }
    }
    var blocks=document.getElementsByClassName("well well-sm");
  for (var b=0; b < 5; b++) {
    try{
    blocks[b].className ="well well-sm well-success";
    }
    catch{
      break;
    }
  }
};

function validate2(){
  var elements=document.getElementsByClassName("jail ng-scope");
  for(var i = 0; i < elements.length; i++){
    elements[i].style.display="Block";
  }
  var ddl4 = document.getElementById("selectDate");
  var real_date=ddl4.value;
  var aa="block";
  var bb=jumbo.toString();
  var cc="number"
  var dd=aa+bb+cc;
  var my_input=document.getElementById(dd);
  my_input.value=real_date;
  jumbo++;
  var old_List=document.getElementById("initial_list").innerHTML;
  if (bound<10000){
    let v=document.getElementsByClassName("trades")
    for (var b=counter3; b < 13; b++) {
      try{
      v[b].innerHTML += old_List;
      break;
    }
    catch{
      break;
    }
    }
    document.getElementById("initial_list").innerHTML="";
  }
  else{
  document.getElementById(counter).innerHTML += old_List;
  document.getElementById(counter+1).innerHTML += old_List;
  document.getElementById(counter+2).innerHTML += old_List;
  document.getElementById("initial_list").innerHTML="";
}
  
  bound++;
  var blocks=document.getElementsByClassName("well well-sm");
  for (var b=counter2; b < 5; b++) {
    try{
    blocks[b].className ="well well-sm well-error";
    }
    catch{
      break;
    }
  }
  
  counter3++;
  counter2++;
  //country_list.push(selectedValue3);
  document.getElementById(velo).style.display="Block";
  velo++;
}

function categories(){
  //var ddl = document.getElementById("selectCat");
  var x = document.getElementById("selectCat").value;
  selectedValue=x;
  //var selectedValue = ddl.options[ddl.selectedIndex].value;
  if(selectedValue=="Ireland"){
    options=veg;
  }
  if(selectedValue=="Portugal"){
    options=con;
  }
  if(selectedValue=="Turkey"){
    options=fru;
  }
  if(selectedValue=="Netherlands"){
    options=sna;
  }

  var select = document.getElementById("selectNumber");
  var select2 = document.getElementById("selectWeight");
  var select3 = document.getElementById("selectLocation");
  select.style.display="None";
  select2.style.display="None";
  select3.style.display="None";

  var j3, K3 = select.options.length - 1;
   for(j3 = K3; j3 >= 0; j3--) {
      select.remove(j3);
   }

  for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    try{
      select.appendChild(el);
    }
    catch{
      break
    }
    
}
    select.style.display="Block";
    select2.style.display="Block";
    select3.style.display="Block";
  var select0 = document.getElementById("selectCat");
var options0 = [veg[0], con[0], fru[0], sna[0]];

var j2, K2 = select0.options.length - 1;
   for(j2 = K2; j2 >= 0; j2--) {
      select0.remove(j2);
   }

for(var i = 0; i < options0.length; i++) {
    var opt0 = options0[i];
    var el0 = document.createElement("option");
    el0.textContent = opt0;
    el0.value = opt0;
    try{
      select0.appendChild(el0);
    }
    catch{
      break
    }
    
}


var options2 = ["25 ton", "50 ton", "100 ton", "200 ton", "500 ton"];

var i, L = select2.options.length - 1;
   for(i = L; i >= 0; i--) {
      select2.remove(i);
   }

for(var j = 0; j < options2.length; j++) {
    var opt2 = options2[j];
    var el2 = document.createElement("option");
    el2.textContent = opt2;
    el2.value = opt2;
    try{
      select2.appendChild(el2);
    }
    catch{
      break
    }
    
}


var options3 = ["Cod", "Salmon", "Mackerel", "Pike"];

var j, K = select2.options.length - 1;
   for(j = K; j >= 0; j--) {
      select3.remove(j);
   }


for(var k = 0; k < options3.length; k++) {
    var opt3 = options3[k];
    var el3 = document.createElement("option");
    el3.textContent = opt3;
    el3.value = opt3;
    try{
      select3.appendChild(el3);
    }
    catch{
      break
    }
    
}

  //var options = ["potatoes", "carrots", "peas", "turnip", "beans"];

}

function another_block2(){
  plz=34627;
  alert(JSON.stringify(plz));

  //$('.col-xs-7').append('<button id="submit">Submit</button>');
  //var blocks=document.getElementsByClassName("col-xs-7");
  //const my_node = blocks[0];
  //const clone = my_node.cloneNode(true);
  //var block=document.getElementsByClassName("row row-horizon");
  //var block_content=block[0];
  //block_content.prepend(clone);

}

function another_block(){
  var bagg=country_list.length;
  alert(bagg);
  for (var i=0; i<country_list.length; i++){
    if (country_list[i]=="China"){
      china++;
    }
    if (country_list[i]=="India"){
      india++;
    }
    if (country_list[i]=="Australia"){
      australia++;
    }
    if (country_list[i]=="Brazil"){
      brazil++;
    }
  }
  alert(brazil);
  counter++;
  var block=document.getElementsByClassName("row row-horizon");
  var block_content=block[0];
  var tag = document.createElement("div");
  tag.className="col-xs-7"; // <p></p>
  //var element = document.getElementById("Anna");
  block_content.prepend(tag);
  var tag2=document.createElement("block");
  tag2.className="ng-isolate-scope";
  var h2=counter.toString();
  var h3="number";
  var h4=h2+h3;
  tag2.id=h4;
  tag.appendChild(tag2);
  var tag3 = document.createElement("div");
  tag3.className="well well-sm well-error";
  tag2.appendChild(tag3);
  var tag4=document.createElement("form");
  tag4.className="form-horizontal ng-pristine ng-valid";
  tag3.appendChild(tag4);
  var tag5 = document.createElement("div");
  tag5.className="form-group";
  tag4.appendChild(tag5);
  var tag6 = document.createElement("input");
  tag6.className="col-sm-2 control-label";
  tag6.id="a"
  var text = document.createTextNode("Date:"); 
  tag6.appendChild(text);
  tag5.appendChild(tag6);
  document.getElementById("a").disabled="true";
  var tag7 = document.createElement("div");
  tag7.className="col-sm-10";
  tag5.appendChild(tag7);
  var tag8 = document.createElement("div");
  tag7.className="input-group";
  tag7.appendChild(tag8);
  var tag9 = document.createElement("label");
  tag9.className="form-control ng-pristine ng-untouched ng-valid ng-not-empty";
  var a="block";
  var b=changes;
  var b2=b.toString();
  var c=a+b2;
  var d="number";
  var e=a+c+d;
  tag9.id=e;
  var text2 = document.createTextNode("blank"); 
  tag9.appendChild(text2);
  tag8.appendChild(tag9);
  var tag10 = document.createElement("table");
  tag10.className="trades";
  tag10.id=counter;
  tag10.style="width:100%";
  tag4.appendChild(tag10);
  var tag12 = document.createElement("thead");
  tag10.appendChild(tag12);
  var tag11 = document.createElement("caption");
  var text3 = document.createTextNode("Products"); 
  tag11.appendChild(text3);
  tag12.appendChild(tag11);
  var tag13 = document.createElement("tr");
  tag12.appendChild(tag13);
  var tag14 = document.createElement("th");
  var text4 = document.createTextNode("Item");
  tag14.appendChild(text4);
  tag13.appendChild(tag14);
  var tag15 = document.createElement("th");
  var text5 = document.createTextNode("Weight");
  tag15.appendChild(text5);
  tag13.appendChild(tag15);
  var tag16 = document.createElement("th");
  var text6 = document.createTextNode("Location");
  tag16.appendChild(text6);
  tag13.appendChild(tag16);
  var tag17 = document.createElement("th");
  var text7 = document.createTextNode("Date");
  tag17.appendChild(text7);
  tag13.appendChild(tag17);
}

function save_block(){
  alert("hi");
  var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "testfile1.txt");
}

function new_item(){
  var name=document.getElementsByClassName("myname ng-binding");
  var name2=document.getElementById("fname");
  name[0].innerHTML=name2.value;
  name2.disabled=true;
  var ddl = document.getElementById("selectNumber");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
  var ddl2 = document.getElementById("selectWeight");
  var selectedValue2 = ddl2.options[ddl2.selectedIndex].value;
  var ddl3 = document.getElementById("selectLocation");
  var selectedValue3 = ddl3.options[ddl3.selectedIndex].value;
  var ddl4 = document.getElementById("selectDate");
  var tr = "<tr>";
  var t = "";
  tr += "<td>"+tx_id+"</td>";
  tr += "<td>"+name2.value+"</td>";
  tr += "<td>"+selectedValue+"</td>";
  tr += "<td>"+selectedValue2+"</td>";
  tr += "<td>"+selectedValue3+"</td>";
  tr += "<td>"+ddl4.value+"</td>";
  tr += "</tr>";
  t += tr;
  tx_id++;
  document.getElementById("initial_list").innerHTML += t;
}