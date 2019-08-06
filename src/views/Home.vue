<template>
  <div>
    <div class="big-bg">
      <div class="vertical-middle">
        <h1>Tiberiu Cristian Suciu</h1>
        <p>&middot; Software Enginneer Student &middot;</p>
      </div>
    </div>
    <div class="image-sector">
      <div class="darken">
        <div class="vertical-middle">
          <h2>
            I build device agnostic websites and applications
          </h2>
        </div>
      </div>
    </div>
    <div class="big-bg small-screen-adjusted">
      <div class="vertical-middle">
        <template v-if="!hasSent && !isSending">
          <h3>Let's get in touch and see how may I help you</h3>
          <input type="text" placeholder="Name" v-model="name">
          <input type="text" placeholder="Email" v-model="email">
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
      }
    }
  }

</script>

<style scoped>
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
  h1, p {
    color: white;
    margin-top: 30px;
  }
  h2, h3 {
    color: white;
    padding: 0px 20px;
  }
  .white-sector {
    height: 50vh;
  }

  .image-sector {
    height: 75vh;
    background-image: url("https://images.unsplash.com/photo-1565052203907-63dc4685cf58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");

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
  input, textarea {
    display: block;
    margin: auto;
    width: 350px;
    height: 60px;
    background-color: #222;
    color: white;
    border: 1px solid white;
    margin-top: 30px;
    padding: 0px 20px;
    outline: none;
    border-radius: 5px;
    box-sizing: border-box;
  }

  input::placeholder, textarea::placeholder {
    color: #ccc;
  }

  textarea {
    resize: none;
    height: 120px;
    padding: 22px 20px;
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

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media screen and (max-height: 440px) {
    .small-screen-adjusted {
      box-sizing: content-box; padding: 150px 0px;
    }
  }
</style>
