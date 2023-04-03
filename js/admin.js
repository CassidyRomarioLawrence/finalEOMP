let sneakers = JSON.parse(localStorage.getItem('item'));

function displayed(){
    sneakers.forEach((item)=>{
        document.querySelector('#admin').innerHTML+=`
        <tr>
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.color}</td>
                <td>R ${item.price}</td>
                <td>
                <i class="bi bi-pencil-square" onclick="editProduct(${item.id})"></i>
                <i class="bi bi-trash-fill" onclick="deleteProduct(${item.id})"></i>
                </td>
              </tr>`
    })
};

displayed();

function deleteProduct(id) {
    // Find the index of the product with the given id
    const index = sneakers.findIndex(item => item.id === id);
  
    // If the product is found, remove it from the array
    if (index !== -1) {
      sneakers.splice(index, 1);
  
      // Update the local storage
      localStorage.setItem('item', JSON.stringify(sneakers));
  
      // Refresh the displayed products
      document.querySelector('#admin').innerHTML = '';
      displayed();
    }
  };

  function editProduct(id) {
    // Find the product with the given id
    const product = sneakers.find(item => item.id === id);

    // Set the values of the input fields in the modal
    document.querySelector('#name').value = product.name;
    document.querySelector('#color').value = product.color;
    document.querySelector('#brand').value = product.brand;
    document.querySelector('#price').value = product.price;
    document.querySelector('#type').value = product.type;
    document.querySelector('#image').value = product.image;

    // Show the modal
    const updateModal = new bootstrap.Modal(document.querySelector('#updateModal'));
    updateModal.show();

    // Set the click event of the "Save changes" button
    document.querySelector('#update-prod').addEventListener('click', () => {
        // Update the product with the new values
        product.name = document.querySelector('#name').value;
        product.color = document.querySelector('#color').value;
        product.brand = document.querySelector('#brand').value;
        product.price = document.querySelector('#price').value;
        product.type = document.querySelector('#type').value;
        product.image = document.querySelector('#image').value;

        // Update the local storage
        localStorage.setItem('item', JSON.stringify(sneakers));

        // Refresh the displayed products
        document.querySelector('#admin').innerHTML = '';
        displayed();

        // Hide the modal
        updateModal.hide();
    });
};

function addProduct() {
    // Find the highest id currently in use
    let maxId = 0;
    sneakers.forEach(item => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    })
  
    // Generate a new id by incrementing the highest id by 1
    const id = maxId + 1;
  
    // Get the values from the input fields
    const name = document.querySelector('#addname').value;
    const color = document.querySelector('#addcolor').value;
    const brand = document.querySelector('#addbrand').value;
    const price = document.querySelector('#addprice').value;
    const type = document.querySelector('#addtype').value;
    const image = document.querySelector('#addimage').value;
  
    // Create a new product object with the input values and the new id
    const newProduct = {
      id: id,
      name: name,
      color: color,
      brand: brand,
      price: price,
      type: type,
      image: image
    };
  
    // Add the new product to the array
    sneakers.push(newProduct);
  
    // Update the local storage
    localStorage.setItem('item', JSON.stringify(sneakers));
  
    // Refresh the displayed products
    document.querySelector('#admin').innerHTML = '';
    displayed();
  
    // Hide the modal
    const addModal = new bootstrap.Modal(document.querySelector('#addModal'));
    addModal.hide();
  }
  
  
