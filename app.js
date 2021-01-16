//  alert('hello world')

//  console.log('hello world');

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[1];
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(scripts) {

//     console.log(scripts.getAttribute('src'));
    
// });










// console.log(val);
// //document.getElementById();

// console.log(getElementById(''));

// // Get things from the Element
// console.log(getElementById('').id);

// console.log(getElementById('').className);

// const TaskTitle = document.getElementById('task-title');
// //change styling

// TaskTitle.style.background = '#333';
// TaskTitle.style.color ='#fff';
// TaskTitle.style.padding = '5px';
// TaskTitle.style.display = 'none';

// // Change content

// TaskTitle.textContent = '';
// TaskTitle.innerText = '';
// TaskTitle.innerHTML = '<span style = "color:red"  > Task list</span>';

// //document.querySelector();

// console.log(document.querySelector('#task-title'));

// console.log(document.querySelector('.task-title'));

// console.log(document.querySelector('h1'));

// let test = document.querySelector(".ako");

// console.log(test);
// test.style.color = 'red';

// document.querySelector('h1').style.padding = '5px';
// document.querySelector('h1').style.background = 'blue';

// document.querySelector('h1').style.color = 'red';

// document.querySelector('li : last-child').style.color = 'red';

// document.querySelector('nth-child(3)').style.color = 'yellow';
//  document.querySelector('li : nth-child(4)').textContent = 'Hello World';

// document.querySelector('li : nth-child(odd)').style.background = 'gray';

// document.querySelector('li : nth-child(even)').style.background = 'blue';

// document.getElementsByClassName
//  const items = document.getElementsByClassName('collection-item');
// console.log('items')
//  console.log(items([0]));

//  items[0].style.color = 'red';
//  items[3].textContent = 'hello';

//  const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//  console.log('listItems');

// document.getElementsByTagName('');

// let lis = document.getElementsByTagName('li');

//  console.log('lis')
//   console.log(lis([0]));

// lis[0].style.color = 'red';
// lis[3].textContent = 'hello';

// // convert HTML to an Array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index} : hello`;
    
// });

// console.log(lis); 

// document.querySelectorAll();

// const items = document.querySelectorAll('ul.collection li.collection.item');


//  items.forEach(function(item, index){

//   item.textContent = `${index} : hello`;
    
//  });

//   console.log('items');

//  const liOdd = document.querySelectorAll('li: nth-child(odd)');
//  const liEven = document.querySelectorAll('li: nth-child(Even)');



//   liOdd.forEach(function(li, index){

//  li.style.background = 'ash'    
//   });

//  for(i = 0, i < liEven.length, i++){
// liEven[i].style.background = 'blue';

//  };

//   console.log('items');

// let val;

// const list = document.querySelector('ul.collection');

// // const listItem = document.querySelector('li.collection-item: first-child') ;

// //  val = listItem;
//  val = list;

// //  Get childNodes

//  val = list.childNodes;

// val = list.ChildNodes[0].nodeName;
// val = list.ChildNodes[0].nodeType;

// 1. Element
// 2. Attribute (deprecated)
// 3. Text Node
// 8. Comment
// 9. Document itself
// 10.DocType

//  Get children element nodes

// val = list.children;

// val = list.children[];
// list.children[1].textContent = 'list item';



// //  children of children

// val = list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// // first Child

// val = list.firstChild;
// val = list.firstElementChild;
// // last Child
// val = list.lastChild;
// val = list.lastElementChild;

// count child Elements

// val = list.childElementCount;

// Get Parent Node

// val = list.parentNode;
// val = list.parentElement;
// val = list.parentElement.parentElement;

// Get next sibling

// val = list.nextSibling;
// val = list.nextElementSibling.previousElementSibling;

// Get prev sibling

// val = list.previousSibling;
// val = list.previousElementSibling;
// console.log(val);


//  // create Element

//  const li = document.createElement('li');

//  // Add class

//  li.className = 'collection-item';

//  // Add id

//  li.id = 'new item'

//  // Add attrinbute

//  li.setAttribute('title', 'New Item');

//  // create text node and append

//  li.appendChild(document.createTextNode('hello world'));

//  // create new link Element

//   const link = document.createElement('a');

//  // Add classes

//  link.className = 'delete-item secondary-content'


//  // Add icon html

//  link.innerHTML = ' <i class="fa fa-remove"></i>';

//  // Append link to li

//  li.appendChild(link);

//  // Append li as child to ul

//  document.querySelector('ul.collection').appendChild(li);



//  console.log(li);


// REPLACE

// Create Element

// const newHeading = document.createElement('h2');

// // add id

// newHeading.id = 'task-title';

// new text node

// newHeading.appendChild(document.createTextNode('Task List'));

// // get old heading

// const oldHeading = document.getElementById('task-title');

// // parent

// const cardAction = document.querySelector('.card-action');

// // replace

// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENTS

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item

// lis[0].remove();

// // remove child Element

// list.removeChild(lis[3]);

// // CLASSES AND ATTR

// const firstLi = document.querySelector('li:first-child');

// let link = firstLi.children[0];

// console.log(link);

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList.add('test');
// val = link.classList.remove('test');
// val = link;

// // Attributes

// val = link.getAttribute('href')
// val = link.setAttribute('href', 'http://google.com')
// val = link.setAttribute('title', 'Google')

// val = link.hasAttribute('title')
// link.removeAttribute('title');

// val = link;

// console.log(val); 

// EVENTS AND LISTENERS

// document.querySelector('.clear-tasks').addEventListener('click', function(e){

//     console.log('hello world');
//     e.preventDefault();


// });


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     // console.log('clicked');

//     e.preventDefault();

//     let val;
//     val = e;

//     // Event Target Elements

//     val = e.target; 
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     // e.target.innerText = 'Hello';

//     // Event type

//     val = e.type;

//     // timeStamp

//     val = e.timeStamp;

//     // cords relative to the window

//     val = e.clientY;
//     val = e.clientX;

//    // cords relative to the window

//    val = e.offsetY;
//    val = e.offsetX;


//     console.log(val);



// };

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // click
// clearBtn.addEventListener('click', runEvent);
// //double click

// clearBtn.addEventListener('dblclick',runEvent);
// //mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// //mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// //mouse enter
// card.addEventListener('mouseenter', runEvent);
// //mouse leave
// card.addEventListener('mouseleave',runEvent);
// // mouse out
// card.addEventListener('mouseout',runEvent)
// //mouse over
// card.addEventListener('mouseover',runEvent);
// //mouse move

// card.addEventListener('mousemove',runEvent);

// // Event handler
// function runEvent(e){
//  console.log(`EVENT TYPE : ${e.type}`)

//  heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
// document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;




// };

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// clear input

taskInput.value = '';
// form.addEventListener = ('submit', runEvent);

// // keydown
//  taskInput.addEventListener('keydown', runEvent);

// // keyup
// taskInput.addEventListener('keyup', runEvent);
 // keypress
// taskInput.addEventListener('keypress', runEvent);

//focus

// taskInput.addEventListener('focus',runEvent);

//Blur

//  taskInput.addEventListener('blur',runEvent);

// // cut

// taskInput.addEventListener('cut',runEvent);
//paste
// taskInput.addEventListener('paste',runEvent);
//input
// taskInput.addEventListener('input',runEvent);
//change
select.addEventListener('change',runEvent);


function runEvent(e){
 console.log = ( `EVENT TYPE:${e.type}`);

 //console.log(e.target.value);

//  heading.innerText = e.target.value;
// get input value

// console.log(taskInput.value);


//   e.preventDefault();

}

// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click',function(){

//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){

//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(){

//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){

//     console.log('col');
// });

// // EVENT DELEGATION

//const delItem = document.querySelector('.delete-Item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click',deleteItem);

function deleteItem(e){

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete Item')
    // };

    if(e.target.parentElement.classList.contains('delete-item') ){
        console.log('delete Item')
        e.target.parentElement.parentElement.remove();
    };
   

    // console.log(e.target);


};







