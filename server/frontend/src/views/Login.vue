<template>
   <div>
       <div class="logo-section">
    <img src="img/logo.png" class="img-logo">
   

    
        <!-- <div class="alert alert-success" style="color: #ffffff;">
            
        </div>
   
        <div class="alert alert-warning" style="color: #ffffff;">
            
        </div> -->
    
</div>
<div class="main-w3layouts-form">
    <h2>Login to your account</h2>

    <!-- main-w3layouts-form -->
    <form @submit.prevent="login" aria-label="Login">
       
        <div class="fields-w3-agileits">
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <input v-model="email" id="email" type="email" class="form-control" name="email" value="" required autofocus placeholder="email">

        </div>
       
            <span class="invalid-feedback" role="alert" style="color: red; margin-bottom: 10px; display: block;">
                                        <strong v-if="error">{{ error }}</strong>
                                    </span>
       
        <div class="fields-w3-agileits">
            <span class="fa fa-key" aria-hidden="true"></span>
            <input v-model="password" id="password" type="password" class="form-control" name="password" required placeholder="password">
        </div>
       
        <div class="remember-section-wthree">
            <ul>
                <li>
                    <label class="anim">
                        <input class="form-check-input checkbox" type="checkbox" name="remember" id="remember">

                        <label style="    color: #fff;
    padding: 7px;" class="form-check-label" for="remember">
                            Remember Me
                        </label>

                    </label>
                </li>
                <li> <a class="btn btn-link" href="#">
                        Forgot Your Password?
                    </a> </li>
            </ul>
            <div class="clear"> </div>
            <input type="submit" value="Login" />
        </div>
    </form>
    <!--// main-w3layouts-form -->
    <!-- Social icons -->
    <div class="footer_grid-w3ls">
        <button class="btn btn-primary" @click="metamask()">Login with Metamask</button>
    </div>
    <div class="footer_grid-w3ls">
        <h5 class="sub-hdg-w3l">or login with your social profile</h5>
        <ul class="social-icons-agileits-w3layouts">
            <li><a @click="authenticate('facebook')" class="fa fa-facebook"></a></li>
            <li><a href="https://id.twitch.tv/oauth2/authorize?client_id=n9se5ttv1djl68jpjcib9vhzv5l6fy&redirect_uri=http://localhost:8080/login&response_type=token&scope=user_read" class="fa fa-twitch"></a></li>
            <li><a href="http://localhost:4000/api/users/auth/steam" class="fa fa-steam"></a></li>
            <!-- <li><a @click.prevent="loginWithTwitch" class="fa fa-twitch"></a></li> -->

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
    baseUrl: 'http://localhost:3000/api/users', // Your API domain
    
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
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        metamask() {
            if (!window.web3) {
                window.alert('Please install MetaMask first.');
                return;
            }
            if (!web3) {
                // We don't know window.web3 version, so we use our own instance of web3
                // with provider given by window.web3
                web3 = new Web3(window.web3.currentProvider);
            }
            if (!web3.eth.coinbase) {
                window.alert('Please activate MetaMask first.');
                return;
            }
            const publicAddress = web3.eth.coinbase.toLowerCase();
            this.loginMeta(publicAddress);
            // this.setState({ loading: true });
            // console.log( publicAddress );
        },
        getUserData() {

        },
        onLogout() {

        },
        login() {
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
        loginMeta(address) {
            this.$store.dispatch('retriveTokenMeta', {
                    address: address
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

        loginFB(data) {
            this.$store.dispatch('retriveTokenFB', {
                    id: data.id,
                    email: data.email,
                    name: data.name
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
    },
    beforeMount() {
        var this_ = this;
        let AddStyle = document.createElement('link')
        AddStyle.type = "text/css";
        AddStyle.rel = "stylesheet";
        AddStyle.href = "css/auth.css";
        AddStyle.id = "auth";
        document.head.appendChild(AddStyle)

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
        // console.log(parsedParams);

    },
    beforeDestroy() {
        document.getElementById("auth").disabled = true;
        var stylesheet = document.getElementById('auth');
        stylesheet.parentNode.removeChild(stylesheet);
    },
    mounted() {
        // this.FB;
        // login(function(response) {
        //     if (response.authResponse) {
        //     console.log('Welcome!  Fetching your information.... ');
        //     FB.api('/me', function(response) {
        //     console.log('Good to see you, ' + response.name + '.');
        //     });
        //     } else {
        //     console.log('User cancelled login or did not fully authorize.');
        //     }
        // });
    }
}
</script>



                // axios.get('https://graph.facebook.com/v3.2/oauth/access_token?code='+this_.$auth.getToken()+'&client_id=291462354808106&redirect_uri=http://localhost:8080/auth/callback&client_secret=44c44d786601319553fa31e097b24d85',
                // {
                //     headers: { 
                //         "Postman-Token": "3c124eae-d9c3-4325-8f43-93c4bc743694",
                //         "Cache-Control": "no-cache",
                //         "authorization": this_.$auth.getToken()
                //     } 
                // })
                // .then(res => console.log(res))
                // // axios.get('https://graph.facebook.com/v3.2/me?fields=id,name&access_token=' + this_.$auth.getToken()).then(function (response) {
                // //         this_.response = response;
                // //         console.log(response);
                // //         //this_.loginFB( response.data );
                // //     })
                // //     .catch(err => console.log(err))
                
            
            // //console.log(FB);
            // FB.login(function(response) {
            //     if (response.authResponse) {
            //     console.log('Welcome!  Fetching your information.... ');
            //     FB.api('/me', function(response) {
            //     console.log(response);
            //     });
            //     } else {
            //     console.log('User cancelled login or did not fully authorize.');
            //     }
            // }, {scope: 'email'}   );
            // return;