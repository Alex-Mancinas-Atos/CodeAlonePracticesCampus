/* ########### lesson 2 ############## */
// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);

/* ########### LESSON 3 ############### */
// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));


// Array.from(titles).forEach(item => {
//    console.log(item) 
// });

/* ############ LESSON 4 ############# */
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(wmf);

// let books = document.querySelector('#book-list li .name');
// // console.log(books)

// books = document.querySelectorAll('#book-list li .name');
// // console.log(books);

// Array.from(books).forEach((book)=>{
//     console.log(book);
// })

/* ################ LESSON 5 #################### */
//When you use the method *document.querySelectorAll('')* don't need to use Array
//Array.from().forEach() because it already its an array 
// let books = document.querySelectorAll('#book-list li .name');

// books.forEach((book)=>book.textContent += ' (book title)');

// const bookList = document.querySelector('#book-list');

// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>'


//############## LESSON 6 ####################//

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is: '+ banner.nodeType);
// console.log('#page-banner node name is: '+ banner.nodeName);
// console.log('#page-banner has child nodes type is: '+ banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

/* ###################### LESSON 7 ####################### */

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.children)

/* ############## LESSON 8 ################# */

// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next sibling is:', bookList.nextElementSibling);

// console.log('book-list next sibling is:', bookList.previousSibling);
// console.log('book-list next sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else'

/* ##################################### LESSON 9 ################################################ */
// let h2 = document.querySelector('#book-list h2')
// h2.addEventListener('click', (e)=>{
//     console.log(e.target);
//     console.log(e);
// });


// let btns = document.querySelectorAll('#book-list .delete');

// btns.forEach((btn)=> btn.addEventListener('click', (e)=> {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li)
// }));

// const link = document.querySelector('#page-banner a')

// link.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('navigation to ', e.target.textContent, ' was prevented')
// })

/*####################################### LESSON 10 ############################################## */

// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', (e)=>{
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     }
// });

/*############################################# LESSON 11 ########################################### */
document.addEventListener("DOMContentLoaded", ()=>{
    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', (e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)
        }
    });
    
    //add book-list
    
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        
    
        //Create Elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
    
        //Add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
    
        //add clases 
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
    
        //append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
    
    
        list.appendChild(li);
    
    });
    
    //hide books
    const hideBox = document.querySelector('#hide');
    
    hideBox.addEventListener('change', ()=> {
        if(hideBox.checked){
            list.style.display = 'none'
        } else{
            list.style.display = 'initial'
        }
    });
    
    //filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e)=>{
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach((book)=>{
            const title = book.firstElementChild.textContent;
            if(title.toLocaleLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            } else{
                book.style.display= 'none'
            }
        })
    });
    
    //tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
    
    //? How to set attributes
    //? book.setAttribute('class', 'name-2')
    //? book.setAttribute('atributte to set', 'value of the attribute')
    //? book.removeAttribute('attribute to eliminate')
    
})

