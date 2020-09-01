

function popUp(){
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'visible'; 
};

function closePopUp(){
    var PopUp = document.getElementById('popUp');
    PopUp.style.visibility = 'hidden';
    var PopUpOK = document.getElementById('popUp-OK');
    PopUpOK.style.visibility = 'hidden'; 
};

    
window.addEventListener('load', function(){

    var formulario = document.querySelector('#form');
    var formularioPop = document.querySelector('#form2');

    formulario.addEventListener('submit', function(){

        var nombre = document.getElementById('dataName').value;
        var apellido = document.getElementById('dataSurname').value;
        var email = document.getElementById('dataEmail').value;
        var telefono = document.getElementById('dataTel').value;
    
        var usuario = {'Nombre': nombre, 'Apellido': apellido, 'Email': email, 'Teléfono': telefono};
        console.log(usuario);

        var PopUpOK = document.getElementById('popUp-OK');
        PopUpOK.style.visibility = 'visible';
    
        
    });
    formularioPop.addEventListener('submit', function(){

        var nombre = document.getElementById('dataName').value;
        var apellido = document.getElementById('dataSurname').value;
        var email = document.getElementById('dataEmail').value;
        var telefono = document.getElementById('dataTel').value;
    
        var usuario = {'Nombre': nombre, 'Apellido': apellido, 'Email': email, 'Teléfono': telefono};
        console.log(usuario);

        var PopUpOK = document.getElementById('popUp-OK');
        PopUpOK.style.visibility = 'visible';
    
        
    });

});

