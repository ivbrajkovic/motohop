$(document).ready( function () {
    document.getElementById('date').innerHTML = 
        '<p>Današnji datum: ' + 
        (new Date()).toLocaleDateString('hr-HR') + 
        '</p>';
});