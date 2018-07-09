const login = () => {

	let user = document.getElementById('name').value;
	let password = document.getElementById('password').value;

	console.log('user');
	console.log('password');

	if(user === 123 && password === 123) {
		window.open('principal.html');
	} else {
		alert('el usuario o la contraseña son incorrectos');
	}
}