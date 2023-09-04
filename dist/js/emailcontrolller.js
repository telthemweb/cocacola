function loadEmailAddresses() {
    const tablecontainer = tById("tablecontainer");
    emaillists.forEach(data => {
        console.log(data)
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><input type="checkbox"></td>
      <td>${data.Fullname}</td>
      <td>${data.Email}</td>
      <td>${data.Telephone}</td>
       <td>${data.Mobile}</td>
      <td><i class="fa fa-angle-right text-danger " onclick="loadIndexDataByRequestNumber(00657)"></i></td>
        `;
        tablecontainer.appendChild(tr);
    });
}


function loadEmailAddressesCompobox() {
    const emailaddreslists = tById("emailaddreslists");
    emailaddreslists.innerHTML=''
    emaillists.forEach(data => {
        var option = document.createElement('option');
        option.value = data.Email;
        option.innerText = data.Fullname;
        emailaddreslists.appendChild(option);
    });
    
    
}
loadEmailAddresses()
loadEmailAddressesCompobox()