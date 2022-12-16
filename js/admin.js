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
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash-fill"></i>
                </td>
              </tr>`
    })
};

displayed();