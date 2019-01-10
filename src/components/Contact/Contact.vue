<template>
<section id="contact">
    <div class="contact">
        <div class="Contact__title">
            <h2 class="section--header">Contact Us</h2>
        </div>
        <div class="contact__body">
            <div class="flex__col contact__body__left">
                <div class="flex__col transback contact__body__left--name">
                    <label for="name">Name *</label>
                    <input type="text" v-model="messageData.yourName" id="name">
                </div>
                <div class="flex__col transback contact__body__left--company">
                    <label for="company">Company</label>
                    <input type="text" v-model="messageData.company" id="company">
                </div>
                <div class="flex__col transback contact__body__left--telephone">
                    <label for="Telephone">Telephone *</label>
                    <input type="text" v-model="messageData.telephone" id="Telephone">
                </div>
                <div class="flex__col transback contact__body__left--email">
                    <label for="email">Email *</label>
                    <input type="text" v-model="messageData.email" id="email">
                </div>
                <div class="flex__col transback contact__body__left--details">
                    <label> Project Details</label>
                    <div class="tag">
                       <div class="tag__bubbles" v-for="(tag, index) in tags" :key="index" @click="addTag(index)">
                            <p>{{ tag.toLowerCase() }}</p>
                        </div>
                        <input type="text" placeholder="Enter Your Own" @keyup.enter="addCustomTag" v-model="customTag"> 
                        <button @click="addCustomTag">+</button>
                    </div>
                    <h4>Budget</h4>
                    <div>
                       <p>${{ messageData.price[0] | comma }}  - ${{ messageData.price[1] | comma }} </p> 
                    </div>
                    
                    <vue-slider ref="slider" v-bind="vueSliderOptions"  v-model="messageData.price"></vue-slider>
                </div>
            </div>
            <div class="flex__col contact__body__right">
                <div class="flex__col contact__body__right--compose">
                    <p>Hello. My name is <span class="contact__body__right--ul">{{ messageData.yourName }}</span>  from <span class="contact__body__right--ul">{{ messageData.company }}</span> and I need: </p>
                    <div class="tag">
                        <transition-group name="tags">
                        <div class="tag__bubbles" v-for="(tag, index) in messageData.pickedTags" :key="index" >
                            <p>{{ tag.toLowerCase() }}  </p><button @click="removeTag(index)" class="tag__bubbles--del"><img src="../../assets/images/icons/x.svg" alt="icon of letter X"> </button>
                        </div>
                        </transition-group>
                    </div>
                    <p class="pb"> You can reach me by phone at <span class="contact__body__right--ul"> {{messageData.telephone}} </span> or <span class="contact__body__right--span"><br></span>  at my email <span class="contact__body__right--ul">{{ messageData.email }}</span></p>
                    <p class="pb">I am looking to spend between <span class="contact__body__right--ul"> ${{messageData.price[0] | comma}} </span> and <span class="contact__body__right--ul"> ${{messageData.price[1] | comma}} </span> .</p>
                </div>
                <div class="flex__col transback contact__body__right--missed">
                    <label for="missed">Did We Miss Anything?</label>
                    <textarea name="missed" v-model="messageData.missed" id="missed" cols="30" rows=6></textarea>
                </div>
            </div>
        </div> 
        <div class="contact__send">
            
        <form action="https://formspree.io/contact@purpleandbold.com"
            method="POST">
            <textarea name="message" id="contact__send--message" ref="realmessage" cols="3" rows="1"></textarea>
            <input type="submit" ref="submit" value="Send Message">
        </form>
    </div>
    </div>
    
   
    
</section>
</template>

<script>
import vueSlider from "vue-slider-component";
export default {
  data() {
    return {
      messageData: {
        yourName: "",
        company: "",
        telephone: "",
        email: "",
        missed: "",
        price: [1500, 4000],
        pickedTags: []
      },
      vueSliderOptions: {
        min: 900,
        max: 10000,
        tooltip: false,
        sliderStyle: [
          {
            background: "#f7f3f3"
          }
        ],
        bgStyle: {
          backgroundColor: "#f7f3f3"
        },
        processStyle: {
          background: "#f7f3f3"
        }
      },
      tags: ["Website", "Branding", "Marketing"],
      customTag: ""
    };
  },
  mounted() {
    this.blocksubmit();
  },
  methods: {
    // this is called when you click on one of the given tags and moves it into the message
    addTag(i) {
      this.messageData.pickedTags.push(this.tags[i]);
    },
    // this is called when you enter a custom tag and it will add it to the message
    addCustomTag() {
      this.messageData.pickedTags.push(this.customTag);
      this.customTag = "";
    },
    removeTag(i) {
      this.messageData.pickedTags.splice(i, 1);
    },
    // this is called from the watchers and all it does if take in all of the input fields and put them into the hidden text feild that is sent out
    pushMessage() {
      const message = `hello. my name is ${this.messageData.yourName} from ${
        this.messageData.company
      } and I need: ${
        this.messageData.pickedTags
      } you can reach me at my email ${this.messageData.email} or by phone at ${
        this.messageData.telephone
      } I am looking to spend between ${this.messageData.price[0]} and ${
        this.messageData.price[1]
      } here are some extra details ${this.messageData.missed}`;
      this.$refs.realmessage.value = message;
      this.blocksubmit();
    },
    blocksubmit() {
      if (
        !this.messageData.yourName ||
        !this.messageData.telephone ||
        !this.messageData.email
      ) {
        this.$refs.submit.disabled = true;
      } else {
        this.$refs.submit.disabled = false;
      }
    }
  },
  filters: {
    comma: function(value) {
      if (!value) return "";
      return value.toLocaleString();
    }
  },
  watch: {
    //these watchers watch for a changes on the input fields and call the funcion to push it to the real text field
    "messageData.yourName": function() {
      this.pushMessage();
    },
    "messageData.company": function() {
      this.pushMessage();
    },
    "messageData.telephone": function() {
      this.pushMessage();
    },
    "messageData.email": function() {
      this.pushMessage();
    },
    "messageData.missed": function() {
      this.pushMessage();
    },
    "messageData.price": function() {
      this.pushMessage();
    },
    "messageData.pickedTags": function() {
      this.pushMessage();
    }
  },
  components: {
    vueSlider
  }
};
</script>
<style lang="sass" scoped>
@import '../../normalize.scss'
@import '../../base.sass'
$gradient: linear-gradient(145deg, #FED766 0%,#ff6797 85%)
$inputback: #f7f3f3
$cardback: rgba(255, 255, 255, .4)
$inputColor: black
$maintextcolor: white
$disabled: #fc3a3a45
section
    width: 100%
    height: auto
    color: $maintextcolor
    background-image: $gradient
    font-family: "avenir", sans-serif
    display: flex
    justify-content: center
    align-items: center
    @include edgesnap
        padding: 20px
    @include tablet-phone
        height: auto
        padding: 10px
    .contact
        width: 1100px
        @include edgesnap
            width: 100%
        h2.section--header 
            color: white
            padding-bottom: 10px
            padding-left: 0px
        input:focus 
            outline: none
            box-shadow: 0px 0px 7px 1px rgba(250,177,245,1);//rgba(234,162,110,1);
        &__body
            display: flex
            justify-content: center
            justify-content: space-between
            @include tablet-phone
                flex-direction: column
            &__left, &__right 
                label 
                    margin-bottom: 7px
            &__left
                width: 48%
                justify-content: space-between
                @include tablet-phone
                    width: 100%
                .tag 
                    div:nth-child(1)
                        margin-left: 0px
                    .tag__bubbles
                        cursor: pointer
                        //this is the left tags
                        transition: all 1s ease-in-out
                        
                h4 
                    font-weight: $light
                    margin-top: 20px
                .contact__body__left--details
                    input
                        color: $maintextcolor
                        &:focus
                            box-shadow: none
                    button
                        display: flex
                        justify-content: center
                        align-items: center
                        border: 1px solid $maintextcolor
                        border-radius: 100%
                        height: 1.4em
                        width: 1.4em
                        line-height: 10px
                        transform: translateY(25%)
                    h4
                        margin-bottom: 20px
                    p
                        text-align: center
            &__right
                dipslay: flex 
                flex-direction: column 
                justify-content: space-between
                width: 48%
                overflow: hidden
                @include tablet-phone
                    width: 100%
                &--missed 
                    margin-top: 15px
                textarea
                    border: none
                    background: $inputback
                    margin-top: 8px 
                    color: $inputColor
                    resize: none
                    padding: 2px
                    &:focus 
                        outline: none
                        box-shadow: 0px 0px 7px 1px rgba(250,177,245,1);//rgba(234,162,110,1);
                .tag
                    min-height: 62px
                    flex-wrap: wrap
                    span
                        height: 100%
                    &__bubbles
                        height: 75%
                        cursor: pointer
                .tags-enter-active
                    animation: tag-in 1.5s forwards
                .tags-leave-active
                    animation: tag-out 2s forwards
                .tags-move
                    transition: all 2s
            .flex__col
                display: flex
                flex-direction: column
            .pb
                padding-bottom: 64px
            .transback
                background: $cardback
                padding: 10px
                margin-bottom: 20px
                border-radius: 3px
            input
                color: $inputColor
                border: none
                background: $inputback
                font-size: 1.1rem
                padding: 6px
            .contact__body__right--compose
                font-size: 1.63rem
                .contact__body__right--ul
                    border-bottom: 2px solid white
                    display: inline-block
                    min-width: 50px
                .contact__body__right--span
                    @include tablet-phone
                        display: none
                .tag
                    //inline block on this sort of looks cool actually
                    // display: inline-block
                    display: flex
                    .tag__bubbles 
                        cursor: pointer
                        display: flex
                        border-radius: 100px
                        // padding: 1px 5px 
                        padding: 2px 2px
                        justify-content: space-between
                        align-items: center
                        p
                            padding: 2px 10px
                            font-size: 0.9rem 
                            margin: 0px 0px
                        img 
                            height: 10px 
                            width: 10px
        .tag
            display: flex
            flex-wrap: wrap
            span
                display: flex
                flex-wrap: wrap 
            input
                background: none
                border-bottom: 2px solid white 
                &::placeholder
                    color: $maintextcolor
            &__bubbles
                cursor: bubbles
                background: $cardback
                border-radius: 15px
                padding: 4px 15px
                margin: 5px
                font-size: 0.9em
                .tag__bubbles--del
                    cursor: pointer
                    height: 1.25rem
                    width: 1.25rem
                    display: flex
                    justify-content: center
                    align-items: center
                    border: 1px solid white
                    border-radius: 100%
                    margin-right: 2px
        &__send
            display: flex
            justify-content: flex-end
            align-self: flex-end
            input
                display: flex 
                flex-direction: column 
                justify-content: center
                align-items: center
                color: $maintextcolor
                height: 45px
                width: 160px
                border: .08em solid $maintextcolor
                border-radius: 3px
                font-size: .9em
                letter-spacing: .05em
                font-weight: $light
                margin-bottom: 40px
                transition: all 0.3s ease-in-out
                @include tablet-portrait
                    font-size: .85em
                    height: 36px 
                    width: 145px
                @include phone-large 
                    margin-bottom: 30px
                @include phone-small 
                    margin-bottom: 20px
                &:hover 
                    transform: scale(1.03) translateY(-3px)
                &:disabled
                    background: $disabled
                    box-shadow: 0px 0px 5px 0px $disabled
                    animation: disabled 3s infinite
                    &:hover 
                        transform: scale(1) translateY(0px)
            #contact__send--message
                visibility: hidden
@keyframes tag-in 
    0%    
        // transform: translatex(-300%)
        opacity: 0
    100%  
        // transform: translatex(0%)
        opacity: 1
@keyframes tag-out 
    0%    
        // transform: translatex(0%)
        opacity: 1
    100%  
        // transform: translatex(-500%)
        opacity: 0
@keyframes disabled 
    0%    
        opacity: 1
    50%  
        opacity: .4
    100%
        opacity: 1 
.tags-enter, 
  opacity: 1
  //transform: translateY(300px)
.tags-leave-to
  opacity: 0
.tags-leave-active 
  //position: absolute
  opacity: 0
  //transform: translateX(-1800px) scale(0.3)
  //right: 0
</style>