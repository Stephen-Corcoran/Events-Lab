document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const theForm = document.querySelector('#new-item-form');
  
  const 

  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value}`;

  const newListItem2 = document.createElement('li');
  newListItem2.textContent = `${event.target.author.value}`;

  const newListItem3 = document.createElement('li');
  newListItem3.textContent = `${event.target.category.value}`;


  const resultList = document.querySelector('#reading-list')
  resultList.appendChild(newListItem)
  resultList.appendChild(newListItem2)
  resultList.appendChild(newListItem3)

  
  
  theForm.reset();
  
}

// const newListItem = document.createElement( 'li' )
// newListItem.textContent = event.target.title
// newListItem.classList.add( 'purple' ) 

