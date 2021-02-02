let actualLanguage = 'es'; // Idioma per defecte

function setLanguaje(newLanguage) {
    const oldLanguageElements = document.getElementsByClassName(actualLanguage);
    
    for (element of oldLanguageElements) {   
        element.style.display = 'none';
    }
	
    actualLanguage = newLanguage;

    const newLanguageElements = document.getElementsByClassName(actualLanguage);
    for (element of newLanguageElements) {
        element.style.display = 'inline';
    }

    // Si canviem l'idioma per la URL, necessitem e codi següent
    const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + actualLanguage;
    window.history.replaceState({}, '', newURL);
}


// El següent codi es per obtenir l'idioma per la URL

const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
let urlParams = new URLSearchParams(querystring);

if (urlParams.get('lang')) actualLanguage = urlParams.get('lang');

const espLanguage = document.getElementsByClassName('es');
const enLanguage = document.getElementsByClassName('en');
const caLanguage = document.getElementsByClassName('ca');

if (actualLanguage === 'en') {
    for(element of enLanguage) {
        element.style.display = 'inline';
    }
    for(element of espLanguage){
        element.style.display = 'none';
    }
    for(element of caLanguage){
        element.style.display = 'none';
    }
}
if (actualLanguage === 'ca') {
    for(element of enLanguage) {
        element.style.display = 'none';
    }
    for(element of espLanguage){
        element.style.display = 'none';
    }
    for(element of caLanguage){
        element.style.display = 'inline';
    }
} else if (actualLanguage === 'es') {
    for(element of enLanguage) {
        element.style.display = 'none';
    }
    for(element of espLanguage){
        element.style.display = 'inline';
    }
    for(element of caLanguage){
        element.style.display = 'none';
    }

}
let saveFile = () => {
    
    // Get the data from each element on the form.
    const nombre = document.getElementById('txtNombre');
    const apellido = document.getElementById('txtApellido');
    const edad = document.getElementById('txtEdad');
    const email = document.getElementById('txtEmail');
    const pais = document.getElementById('selProvincia');
    const msg = document.getElementById('msg');

    if (email.value=="") {
        alert("Debes introducir un correo electronico")
        email.value.focus();
        return false
    }

    if (edad.value <18) {
        alert("Debes ser mayor de edad")
        edad.value.focus();
        return false
    }

    // This variable stores all the data.
    let data =
    '\r Nombre: ' + nombre.value + ' \r\n ' +
    '\r Apellido: ' + apellido.value + ' \r\n ' +
    'Edad: ' + edad.value + ' \r\n ' +
    'Email: ' + email.value + ' \r\n ' +
    'Pais: ' + pais.value + ' \r\n ' +
    'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt'; // The file to save the data.
    
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    
    if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
    }
    
    newLink.click();
    }
