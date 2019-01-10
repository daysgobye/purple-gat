<template>
  <div>
    <div class="landing__page" ref="wrapper">
        <div class="landing__page__content">
            <div class="landing__page__content__container">
                <div class="landing__page__content__container__top" :class="[loaded, afterLoad]">
                    <h1>Purple</h1>
                </div>
                <div class="landing__page__content__container__middle">
                    <div class="landing__page__content__container__middle__left" :class="[loaded, afterLoad]">
                        <h1>+</h1>
                    </div>
                    <div class="landing__page__content__container__middle__right" :class="[loaded, afterLoad]">
                        <h1>Bold</h1>
                    </div>
                </div>
                <div class="landing__page__content__container__bottom" 
                     :class="[loaded, afterLoad]">
                     <a href="#hero" 
                        v-smooth-scroll="{ duration: 1000, offset: -50}">
                       <img class="landing--arrow"
                            :class="[loaded, afterLoad]" src="../assets/images/icons/arrow.svg" 
                            alt="icon of arrow facing downward to scroll down the page" />
                     </a>
                </div>
            </div>
        </div>
    </div>
    <a href="#navbar" ref="scrollto" v-smooth-scroll="{ duration: 1500}" aria-hidden="true"></a>
</div>
</template>

<script>
export default {
  data() {
    return {
      loaded: "",
      afterLoad: "",
      scroll: false
    };
  },
  methods: {
    toggleLoad() {
      this.loaded = "loaded";
      setTimeout(() => {
        this.afterLoad = "after-load";
      }, 1500);
    },
    handleScroll() {
      // const navbartop = this.$refs.wrapper.clientHeight;
      if (!this.scroll) {
        this.$refs.scrollto.click();
        // window.scroll({
        //   top: navbartop,
        //   behavior: "smooth"
        // });
        this.scroll = true;
      }
    }
  },
  mounted() {
    this.toggleLoad();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("touchmove", this.handleScroll);
  }
};
</script>

<style lang="sass">
@import '../normalize.scss'
@import '../base.sass'
$arrow-margin-bottom: 20px 
.landing__page
  display: flex
  flex-direction: column
  width: 100%
  height: 100vh
  background: $blue-grey
  font-family: $mainfont
  &__content
    display: flex
    flex-direction: column
    align-self: center
    align-items: flex-end
    width: 1100px
    margin: auto 0
    color: white
    @include edgesnap
      width: 100%
      overflow: hidden
      padding: 0px 20px
    &__container
      display: flex
      flex-direction: column
      height: 100vh
      justify-content: center
      &__top.loaded
        animation: landing-top-load 1.5s forwards
        //transform: translateX(0px)
        h1
          animation: landing-top-load 2s forwards
      &__top
        margin-bottom: 10px
        text-align: right
        transform: translateX(-100vw)
        h1 
          font-size: 7em
          letter-spacing: .15em
          margin-right: -.15em
          font-weight: $light
          @include tablet-portrait
            font-size: 5em
          @include phone-large 
            font-size: 3.5em
      &__middle
        display: flex
        justify-content: space-between
        h1
          font-size: 6em
          @include tablet-portrait
            font-size: 4.5em
          @include phone-large 
            font-size: 3em
        &__left.loaded
          animation: landing-middle-left-load 1.5s forwards
        &__left.loaded.after-load
          transform: translateX(0)
          animation: landing-middle-left-after-load 1.5s forwards
        &__left
          transform: translateX(-100vw)
        &__right.loaded.after-load
          animation: landing-middle-right-after-load 1.5s forwards
        &__right.loaded
          animation: landing-middle-right-load 1.5s forwards
        &__right
          transform: translateX(-100vw)
      &__bottom.after-load
        animation: landing-bottom-after-load 2.5s forwards
      &__bottom
        display: flex
        align-self: flex-end
        position: absolute
        bottom: 0
        justify-content: flex-end
        img
          height: 70px
          margin-bottom: $arrow-margin-bottom
          //MAY NEED TO CHANGE THIS IN SMALLER VIEWS
          margin-right: 10px
          opacity: 0
          transition: opacity 5s ease-out
          @include tablet-portrait
            height: 50px
          @include phone-large 
            height: 35px
          &.after-load
            animation: landing-arrow 4s ease-in-out infinite
            opacity: 1
@keyframes landing-arrow
  0%
  10%
  20%
  30%
  40%
  50%
    transform: translateY(-20px)
  60%
  70%
  80% 
  90%
  100%
    
@keyframes landing-top-load
  0%
  10%
    letter-spacing: 4em
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
    letter-spacing: .045em
  90%
  100%
    transform: translateX(0px)
@keyframes landing-middle-left-load
  0%
  10%
  20%
  30%
  40%
  50%
    transform: rotate(-180deg)
  60%
  70%
  80% 
  90%
  100%
    transform: translateX(0px)
    transform: rotate(-360deg)
@keyframes landing-middle-left-after-load
  0%
    transform: rotate(0deg)
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%
    transform: rotate(360deg)
@keyframes landing-middle-right-load
  0%
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%
@keyframes landing-middle-right-after-load
  0%
    opacity: 0
    transform: translateY(225px)
  10%
  20%
  30%
  40%
  50%
  60%
  70%
  80% 
  90%
  100%
    transform: translateX(0px)
    transform: translateY(0px)
    opactiy: 1
  
</style>


