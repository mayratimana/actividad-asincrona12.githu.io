fetch("persona.json")
    .then(function(response){
        return response.json();
    })

    .then(function(persona){
        let placeholder=document.querySelector("#data-output");
        let out="";
            for (let veh of persona){
                out+=`
                        <tr>
                            <td>${veh.Id}</td>
                            <td>${veh.Nombre}</td>
                            <td>${veh.Apellidos}</td>
                        </tr>
                    `;
            }
            placeholder.innerHTML=out;   
    })