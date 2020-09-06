export const FacebookLogin = (props) =>{
    window.FB.login(function(response) {
      console.log(response);
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
          props.auth = true;
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
}