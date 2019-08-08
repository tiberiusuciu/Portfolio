<template>
  <div ref="home_container" class="home-container" v-scroll="handleScroll">
    <div class="big-bg">
      <div class="vertical-middle">
        <h1>Tiberiu Cristian Suciu</h1>
        <p>&middot; Web Designer & Developper &middot;</p>
      </div>
    </div>
    <div class="image-sector" ref="first_image">
      <div class="darken">
        <div class="vertical-middle">
          <h2>
            I provide tailor-made websites and applications for your:
          </h2>
          <div class="list-area">
            <ul>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Restaurant</li>
            </ul>
          </div>
          <div class="list-area">
            <ul>
              <li>E-Commerce</li>
              <li>Personal projects</li>
              <li>Favourite cat pictures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="image-sector">
      <div class="darken">
        <div class="vertical-middle">
          <h2>
            Another test
          </h2>
        </div>
      </div>
    </div> -->
    <div class="big-bg small-screen-adjusted">
      <div class="vertical-middle">
        <template v-if="!hasSent && !isSending">
          <h3>Let's talk and see how I may help you</h3>
          <div class="input-box">
            <div>
              <i class="fal fa-user"></i>
            </div>
            <input type="text" placeholder="Name" v-model="name">
          </div>
          <div class="input-box">
            <div>
              <i class="fal fa-at"></i>
            </div>
            <input type="text" placeholder="Email" v-model="email">
          </div>
          <textarea placeholder="Just a few words about what you need" v-model="description"></textarea>
          <div class="send" @click="sendEmail">Submit</div>
        </template>
        <template v-if="!hasSent && isSending">
          <h3>Sending...</h3>
          <div class="half-circle-spinner">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
          </div>
        </template>
        <template v-if="hasSent">
          <h3>Splendid! I will get in touch with you as soon as possible!</h3>
          <div class="send" @click="hasSent = false">Send again</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'home',
    data() {
      return {
        name: "",
        email: "",
        description: "",
        hasSent: false,
        isSending: false,
      }
    },
    methods: {
      sendEmail() {
        if (this.name === "" || this.email === "" || this.description === "") {
          return;
        }
        this.isSending = true;
        axios.post('http://localhost:3000/contact', {
          name: this.name,
          email: this.email,
          description: this.description
        }, { 
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => {
          this.isSending = false;
          this.hasSent = true;
          this.name = "";
          this.email = "";
          this.description = "";
          
        })
        .catch(error => console.log(error))
      },
      handleScroll (evt, el) {
        // if (!this.$refs.first_image) {
        //   return false
        // }

        // const emissionYOfsset = this.$refs.first_image.offsetTop

        // // Change this condition in order to fit your requirements
        // if (window.scrollY + window.innerHeight >= emissionYOfsset &&
        //   window.scrollY <= emissionYOfsset) {
        //   console.log('currently in screen')

        //   // Do you want to continue with the event?
        //   return false
        // }
        // // first parallax image went past screen
        
        // else if (window.scrollY > emissionYOfsset + window.innerHeight * .75 && window.matchMedia("(max-height: 900px), (max-width: 900px)")) {
        //   console.log('welp', this.$refs.home_container.style);
        //   this.$refs.home_container.style.backgroundImage = 'url("https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")';
        // }
        // else {
        //   this.$refs.home_container.style.backgroundImage = 'url("https://images.unsplash.com/photo-1565052203907-63dc4685cf58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")';
        //   console.log('currently NOT in screen');
        // }
      }
    }
  }

</script>

<style scoped>
  .home-container {
    
  }
  .big-bg, .white-sector, .image-sector {
    position: relative;
    box-sizing: border-box;
  }
  .big-bg {
    background-color: #222;
    height: 100vh;
  }
  .vertical-middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
  }
  h1 {
    animation-duration: 3s;
    animation-name: fadein;
    font-weight: lighter;
  }
  p {
    opacity: 0;
    animation-delay: 1.25s;
    animation-duration: 3s;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
  h1, p {
    color: white;
    margin-top: 30px;
    user-select: none;
  }
  h2, h3 {
    color: white;
    padding: 0px 20px;
    font-weight: normal;
    user-select: none;
  }
  .white-sector {
    height: 50vh;
  }

  .image-sector {
    height: 75vh;
    background-image: url("https://images.unsplash.com/photo-1565052203907-63dc4685cf58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
/* https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 */
    min-height: 500px; 

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .darken {
    background-color: #00000055;
    height: 100%;
    box-sizing: border-box;
  }
  .input-box, textarea {
    display: flex;
    margin: auto;
    width: 350px;
    height: 60px;
    background-color: #222;
    color: white;
    border: 1px solid white;
    margin-top: 30px;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .input-box div {
    display: inline-block;

    width: 50px;
    height: 60px;
    color: white;
    line-height: 60px;
  }

  .input-box input {
    flex: 1;
    background-color: transparent;
    color: white;
    padding: 0px 20px 0px 0px;
    outline: none;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
  }

  input::placeholder, textarea::placeholder {
    color: #ccc;
  }

  textarea {
    resize: none;
    height: 120px;
    padding: 22px 20px;
    outline: none;
  }

  .send {
    width: 350px;
    height: 60px;
    margin: auto;
    margin-top: 30px;
    line-height: 60px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    user-select: none;
  }

  .half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
  }

  .half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
    margin: auto;
    margin-top: 30px;
  }

  .half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    border-top-color: white;
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: white;
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  .list-area {
    display: inline-block;
    margin-top: 60px;
    color: white;
    text-align: center;
  }

  .list-area ul {
    list-style-type: none;
    width: 250px;
  }

  .list-area li {
    height: 60px;
    user-select: none;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media screen and (max-height: 440px) {
    .small-screen-adjusted {
      box-sizing: content-box; padding: 150px 0px;
    }

    .list-area {
      margin-top: 0px;
    }

  }

  @media screen and (max-height: 900px) {
    .list-area {
      margin-top: 0px;
    }

    .list-area:first-of-type {
      margin-top: 30px;
    }
  }

  @media screen and (max-height: 900px) and (max-width: 500px){
    .list-area {
      margin-top: 0px;
    }

    .list-area:first-of-type {
      margin-top: 30px;
    }
  }
  
  @media screen and (max-height: 900px), (max-width: 900px){
    .list-area {
      margin-top: 0px;
    }

    .list-area:first-of-type {
      margin-top: 30px;
    }

    .home-container {
      height: 100vh;
      background-image: url("https://images.unsplash.com/photo-1565052203907-63dc4685cf58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");

      min-height: 500px; 

      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
    }


    .image-sector {
      height: 75vh;
      background-image: none;
      min-height: 500px; 
    }
  }

</style>
