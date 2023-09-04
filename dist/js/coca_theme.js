function loadindexdata(){
	const tablecontainer = document.getElementById("tablecontainer");
	 itemlists.forEach(data => {
	 	console.log(data)
	 	 const tr = document.createElement("tr");
        tr.innerHTML =`
        <td><a href="" class="text-danger" style="text-decoration: underline!important;">${data.RequestNumber}</a></td>
      <td>${data.LocalRefNo}</td>
      <td>${data.TypeofRequest}</td>
      <td>${data.Stage}</td>
       <td>${data.ReqStatus}</td>
      <td>${data.Country}</td>
      <td>${data.LoggedDate}</td>
      <td><i class="fa fa-angle-right text-danger " onclick="loadIndexDataByRequestNumber(00657)"></i></td>
        `;
         tablecontainer.appendChild(tr);
    });
}


