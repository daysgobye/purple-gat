<template>
  <div v-if="isMounted">
    <section class="hero" id="hero">
      <div class="hero__content">
        <div class="hero__content__container">
          <h3>A modern &nbsp;  <template v-if="phone"><br></template>
            <ul>
              <li :class="slideClass(index)" 
                  v-for='(aboutSlide, index) in aboutSlides'
                  :key='index' 
                  ref="heroSlide"
                  >
                {{ aboutSlide }}.
              </li>
            </ul>
          </h3>
          <h3>
            If you're starting something new,<br v-show="lineBreak">
            let's make sure it's not already old.
          </h3>
           <a href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50}">
            <button class="hero__content__container__ctabutton">
            Get A Free Quote</button>
          </a>
          </div>
        </div>
      <div class="hero__image__container">
        <img src="../assets/images/hero-monitor-2.svg" alt="Vector illustration of computer monitor">
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMounted: false,
      aboutSlides: [
        "creative agency",
        "web development firm",
        "branding company",
        "design agency"
      ],
      lineBreak: false
    };
  },
  methods: {
    removeLineBreak() {
      if (window.matchMedia("(max-width: 650px)").matches) {
        this.lineBreak = this.lineBreak;
      } else {
        this.lineBreak = true;
      }
    },
    slideClass(index) {
      return `about-slide-${index}`;
    },
    styleHeroSlides(index) {
      const limit = this.aboutSlides.length;
      let counter = 0;
      const heroSlideArray = [...this.$refs["heroSlide"]];
      heroSlideArray.forEach(slide => {
        slide.style.color = "white";
        slide.style.opacity = "0";
        slide.style.position = "absolute";
        slide.style.textDecoration = "underline";
        slide.style.fontStyle = "italic";
      });
    }
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.removeLineBreak);
    this.$nextTick(this.styleHeroSlides);
    if (window.matchMedia("(max-width: 460px)").matches) {
      this.phone = true;
    } else {
      this.phone = false;
    }
  }
};
</script>

<style scoped lang='sass'>
@import '../normalize.scss'
@import '../base.sass'

.hero
  display: flex
  height: auto
  background: $blue-grey
  overflow: hidden
  @include tablet-phone 
    flex-direction: column
  @include phone-large
    flex-direction: column-reverse 
    height: calc(100vh - 60px)
  &__image__container
    display: flex
    justify-content: center
    position: relative
    @include phone-large 
      width: 100% 
      height: 200px
    img
      transition: all 1s ease-in-out
      position: absolute
      right: 0
      bottom: 0 
      margin-right: -120px
      margin-bottom: -50px
      @include edgesnap
        height: 160%
        margin-right: -250px
      @include tablet-portrait 
        height: 160% 
        margin-bottom: -20px
        margin-right: -180px
      @include navsnap
        height: 140% 
        margin-right: -220px
      @include tablet-phone
        position: relative
        width: 100% 
        padding: 0px 20px
        margin-right: 0px
        margin-bottom: -200px
      @include phone-large 
        position: absolute 
        width: 500px
        height: 500px 
        margin-bottom: -150px
        //margin-left: 200px
        margin-right: -170px
      @include phone-small 
        height: 400px 
        width: 400px 
        margin-bottom: -90px
        margin-right: -140px
  &__content 
    display: flex
    height: 100%
    width: 1100px
    margin: auto
    z-index: 1
    padding: 100px 0px
    @include edgesnap 
      width: 100% 
      padding: 100px 20px
    @include tablet-portrait 
      padding: 70px 20px
    @include tablet-phone
      padding: 20px 20px
    &__container
      height: 100%
      display: flex
      flex-direction: column
      justify-content: space-around
      font-family: $mainfont
      @include phone-large
          height: auto
          align-self: flex-end
      h3 
        font-size: 2.15em
        font-weight: $light
        color: white
        @include tablet-portrait 
          font-size: 1.75em
          margin-top: 40px
        @include phone-large 
          font-size: 1.6em
          margin-top: 40px
          colr
        @include phone-small 
          font-size: 1.3em
          margin-top: 30px
        &:nth-child(1)
          margin-top: 0px
          margin-bottom: 70px
          @include phone-large 
            height: 30px
          @include phone-small 
            margin-bottom: 20px
        &:nth-child(2)
          margin-bottom: 70px
          @include phone-large 
            margin-bottom: 40px
          @include phone-small 
            margin-bottom: 10px
      ul  
        list-style: none
        li
        display: inline-block
        position: absolute 
        width: 400px 
        @include tablet-portrait 
          width: auto
        @include phone-large 
          width: 300px
        @include phone
          width: 250px
      a
        display: flex 
        flex-direction: column 
        justify-content: center
        align-items: center
        color: rgb(240,129,148)
        height: 45px
        width: 160px
        border: .08em solid rgb(240,129,148)
        border-radius: 3px
        font-size: .9em
        letter-spacing: .05em
        font-weight: $light
        text-decoration: none
        transition: all 0.25s ease-in-out
        &:visited 
          color: rgb(240,129,148) 
          text-decoration: none 
        &:hover 
          transform: scale(1.01)
          box-shadow: 0px 0px 10px 1px $accent;
        @include tablet-portrait
          font-size: .85em
          height: 36px 
          width: 145px
        @include phone-large 
          margin-bottom: 30px
        @include phone-small 
          margin-bottom: 20px
        a
          display: flex
          width: 100% 
          height: 100%


//each new item added to [aboutSlides] needs to be added here, with the new number on the end
//animation timing must be  [aboutSlides].length * 3
//animation display must be about-slide-[index] index * 3
.about-slide-0
  animation: fade 12s infinite linear
  animation-delay: 0s
.about-slide-1
  animation: fade 12s infinite linear
  animation-delay: 3s
.about-slide-2
  animation: fade 12s infinite linear
  animation-delay: 6s
.about-slide-3
  animation: fade 12s infinite linear
  animation-delay: 9s

.about-slide-0, 
.about-slide-1, 
.about-slide-2, 
.about-slide-3
  color: red

@keyframes fade 
  0% 
    opacity: 0
  10%
    opacity: 1
  15%
    opacity: 1
  20%
    opacity: 1
  25%
    opacity: 0
  30%
    opacity: 0
  35%
    opacity: 0
  40%
    opacity: 0
  45%
    opacity: 0
  50%
    opacity: 0
  55%
    opacity: 0
  60%
    opacity: 0
  65%
    opacity: 0
  70%
    opacity: 0
  75%
    opacity: 0
  80%
    opacity: 0
  85%
    opacity: 0
  90%
    opacity: 0
  95%
    opacity: 0
  100%
    opacity: 0
</style>