let data = [];

function handleFormSubmit(event){
  event.preventDefault();
  const amount = event.target.amount.value;
  const description = event.target.desc.value;
  const category = event.target.category.value;

  let userDetails = {
    amount,
    description,
    category
  };

  data.push(userDetails);
  for(let i=0; i<data.length; i++){
    localStorage.setItem(data[i].description , JSON.stringify(data[i]))
  }
  showDetails (userDetails)
  
  document.getElementById('amount').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('category').value = '';
}
function showDetails (userDetails) {
  const listOfItems = document.getElementById('list-of-items');
  const newLi = document.createElement('li');
  newLi.textContent = userDetails.amount + '-' + userDetails.category + '-' + userDetails.description + '  ';
  newLi.className = 'saved-details';

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = " Delete Expenses ";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = ()=>{
    listOfItems.removeChild(newLi);
    localStorage.removeItem(userDetails.description);
  }

  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = " Edit Expenses ";
  editBtn.className = "edit-btn";
  editBtn.onclick = ()=>{
    listOfItems.removeChild(newLi);
    localStorage.removeItem(userDetails.description);
    document.getElementById('amount').value = userDetails.amount;
    document.getElementById('desc').value = userDetails.description;
    document.getElementById('category').value = userDetails.category;
  }

  newLi.appendChild(deleteBtn);
  newLi.appendChild(editBtn);
  listOfItems.appendChild(newLi);
}