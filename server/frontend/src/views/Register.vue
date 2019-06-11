<template>
    <div>              
<div class="logo-section">
    <img src="img/logo.png" class="img-logo">
</div>

<!-- Main-Content -->
<div class="main-w3layouts-form">
    <h2>Register to your account</h2>
    <!-- main-w3layouts-form -->
    <form @submit.prevent="register" aria-label="Register" method="post">
      
        <div class="fields-w3-agileits">
            <span class="fa fa-user" aria-hidden="true"></span>
            <input v-model="name" id="name" type="text" class="form-control" name="name" value="" required autofocus placeholder="username">
        </div>
       
            <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
            <strong></strong>
        </span>
       
        <div class="fields-w3-agileits">
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <input ref="email" v-model="email" id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="form-control" name="email" value="" required autofocus placeholder="email">
        </div>
       <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
                                        <strong v-if="error">{{ error }}</strong>
                                  
        </span>
       
        <div class="fields-w3-agileits">
            <span class="fa fa-key" aria-hidden="true"></span>
            <input v-model="password" id="password" type="password" class="form-control" name="password" required placeholder="password">
        </div>
        
            <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
            <strong></strong>
        </span>
      
        <div class="fields-w3-agileits">
            <span class="fa fa-key" aria-hidden="true"></span>
            <input v-model="passwordConfirm" id="password-confirm" type="password" class="form-control" name="password_confirmation" required placeholder="confirm password">
        </div>
         <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
                                        <strong v-if="errorPassword">{{ errorPassword }}</strong>
                                  
        </span>
        <input type="submit" value="Register" /><br>
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </form>
    <!--// main-w3layouts-form -->
    <!-- Social icons -->
    <div class="footer_grid-w3ls">
        <h5 class="sub-hdg-w3l">or your social profile</h5>
        <ul class="social-icons-agileits-w3layouts">
            <li><a @click.prevent="authenticate('facebook')" href="" class="fa fa-facebook"></a></li>
            <li><a href="https://id.twitch.tv/oauth2/authorize?client_id=n9se5ttv1djl68jpjcib9vhzv5l6fy&redirect_uri=http://localhost:8080/login&response_type=token&scope=user_read" class="fa fa-twitch"></a></li>
        </ul>
    </div>
    <!--// Social icons -->
</div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
    baseUrl: '/api/users', // Your API domain
    
    providers: {
    facebook: {
        tokenName: 'token',
        response_type: 'token',
        scope: ['email'],
        // clientId: '417348775457290',
        // clientSecret: 'f3d7ddd33c363a6439ed699884c24885',
        appId: '291462354808106',
        clientId: '291462354808106',
        clientSecret: '44c44d786601319553fa31e097b24d85',
        // redirectUri: 'http://www.wagergames.co/auth/callback' // Your client app URL
        redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
    }
})

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            error: null,
            errorPassword: null,
            load: false
        }
    },
     beforeMount() {
        let AddStyle = document.createElement('link')
        AddStyle.type = "text/css";
        AddStyle.rel = "stylesheet";
        AddStyle.href = "css/auth.css";
        AddStyle.id = "auth";
        document.head.appendChild(AddStyle)
    },
    beforeDestroy() {
        document.getElementById("auth").disabled = true;
        var stylesheet = document.getElementById('auth');
        stylesheet.parentNode.removeChild(stylesheet);

        const parsedParams = {};
        window.location.hash.split('&')
            .map(part => part.replace(/#/, ''))
            .forEach(param => {
                const parts = param.split('=');
                parsedParams[parts[0]] = parts[1];
            })

        console.log('--- Out')
        if (parsedParams.access_token != undefined) {
            console.log('--- In')
            this.$http.get('https://api.twitch.tv/kraken/user', {
                params: {},
                headers: {
                    'Client-ID': 'g3hz4vlsl4062b4s8v81v1emky74aj',
                    'Authorization': `OAuth ${parsedParams.access_token}`
                }
            }).then(function (response) {
                this_.loginTwitch(response.data);
                // this_.loginFB( response.data );
            })
        }
    },
     methods: {
        register() {
            if (this.password != this.passwordConfirm) {
                this.errorPassword = "Password and passwordConfirm did't mcatched"
                return false;
            }
            this.load = true;
            this.$store.dispatch('register', {
                username: this.name,
                email: this.email,
                password: this.password,
                // passwordConfirm: this.passwordConfirm
            })
            .then(response => {
                this.$store.dispatch('retriveToken', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    this.$router.push({
                        name: 'home'
                    });
                }).catch(error => {
                    this.error = "These credentials do not match our records.";
                    console.log(error);
                });
            }).catch(error => {
                console.log(error);
            })
        },
        

        loginTwitch(data) {
            this.$store.dispatch('retriveTokenTwitch', {
                    name: data.name,
                    email: data.email,
                    id: data._id,
                })
                .then(response => {
                    this.$router.push({
                        name: 'home'
                    });
                }).catch(error => {
                    this.error = "These credentials do not match our records.";
                    console.log(error);
                });
        },
        
        authenticate: function (provider) {

            if (this.$auth.isAuthenticated()) {
                this.$auth.logout()
            }

            this.response = null

            var this_ = this;
            console.log("first");

            this.$auth.authenticate(provider).then(function (authResponse) {
                var data = null;

                var xhr = new XMLHttpRequest();
                //xhr.withCredentials = true;
                var that = this_;

                xhr.addEventListener("readystatechange", function (this_) {
                    if (this.readyState === 4) {
                        that.getFbDetails(JSON.parse(this.response).access_token);
                    }
                });

                xhr.open("GET", "https://graph.facebook.com/v3.2/oauth/access_token?code="+this_.$auth.getToken()+"&client_id=291462354808106&redirect_uri=http://localhost:8080/auth/callback&client_secret=44c44d786601319553fa31e097b24d85");

                xhr.send(data);
            }).catch(function (err) {
              this_.response = err
            })
        },
        getFbDetails(accesstoken)
        {
            var this_ = this;
            axios.get('https://graph.facebook.com/v3.2/me?fields=id,name,email,picture{url}&access_token=' + accesstoken).then(function (response) {
                    this_.response = response;
                    this_.$store.dispatch("retriveTokenSocial", {
                        username: response.data.name,
                        email: response.data.email,
                        provider: 'facebook',
                        photoUrl: response.data.picture.data.url
                    })
                    .then(response => {
                        this_.$router.push({
                            name: 'home'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    //this_.loginFB( response.data );
                })
                .catch(err => console.log(err))
        },
    },
    mounted() {
        this.$refs.email.oninvalid = function(e) {
            if(!e.target.value || e.target.value == '')
                e.target.setCustomValidity("Please fill out this field")
            else
                e.target.setCustomValidity("Please enter good email e.x name@mail.com")
        }
        this.$refs.email.oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
}
</script>

<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
