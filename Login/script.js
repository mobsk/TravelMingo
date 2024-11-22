function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token; // Token de autenticação

    // Aqui você pode enviar o id_token para o seu backend para validar a sessão
    console.log('ID: ' + profile.getId());
    console.log('Nome: ' + profile.getName());
    console.log('E-mail: ' + profile.getEmail());
    console.log('ID Token: ' + id_token);
}
