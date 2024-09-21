function fetchLeases(){
    fetch('/api/dhcp')
    .then(response=>response.json())
    .then(data=>{
        const tableBody=document.querySelector('tbody');
        tableBody.innerHTML='';
        data.forEach(device=>{
            const row="<tr>
               <td>${device.hostname}</td>
               <td>${device.macAddress}</td>
               <td>${device.ipAddress}</td>
               <td>${device.expiresIn}</td>
            </tr>";
            tableBody.innerHTML+=row;
        });
    })
    .catch(error=>console.error('Error fetching DHCP leases:',error));
}
setInterval(fetchLeases,1000);