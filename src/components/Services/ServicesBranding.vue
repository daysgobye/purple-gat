<template>
    <div v-if="isMounted">
        <div class="branding__container">
          <div class="branding__container__left">
            <div class="branding__container__left__swatch" ref="left-swatch">
              <template v-for="(smallSwatch, index) in leftSmallSwatches">
                <div class="branding__container__left__swatch--small" :key="index" @click="updateLeftSwatch(index)" :ref="`${serviceName}${index}`"></div>
              </template>
            </div> 
            <div class="branding__container__left--hex"><p>{{ leftSwatch.hexBottom }}</p></div> 
            <div class="branding__container__left--rgb"><p>{{ leftSwatch.rgbBottom }}</p></div>
          </div>
          <div class="branding__container__middle">
            <div class="branding__container__middle--swatch" ref="middle-swatch"></div>
            <div class="branding__container__middle--hex"><p>{{ middleSwatch.hexBottom }}</p></div> 
            <div class="branding__container__middle--rgb"><p>{{ middleSwatch.rgbBottom }}</p></div>
          </div>
          <div class="branding__container__right">
            <div class="branding__container__right__input__container">
              <input type="text" class="branding__container__right__input__container--field" 
                                 ref="branding-input-field" 
                                 v-model="brandingInput"
                                 @focus="inputHandler(true)"
                                 @blur="inputHandler(false)"
                                 @keydown="inputValue">
            </div>
            <div class="branding__container__right--big-heading"><p>{{ brandingInput === '' ? bigHeading : brandingInput }}</p></div>
            <div class="branding__container__right--heading"><p>{{ brandingInput === '' ? smallHeading : brandingInput }}</p></div>
            <div class="branding__container__right--subheading" ref="subheading"><p>{{ brandingInput === '' ? subheading : brandingInput }}</p></div>
            <div class="branding__container__right--bodytext"><p>{{ brandingInput === '' ? bodyText : brandingInput }}</p></div>
            <div class="branding__container__right--caption"><p>{{ brandingInput === '' ? caption : brandingInput }}</p></div>
            <!-- <div class="branding__container__right--captionuppercase"><p>{{ brandingInput === '' ? captionUppercase.toUpperCase() : brandingInput }}</p></div>
            <div class="branding__container__right--label"><p>{{ brandingInput === '' ? label : brandingInput }}</p></div> -->
            <div class="branding__container__right--hyperlink" ref="hyperlink"><p>{{ brandingInput === '' ? hyperlink : brandingInput }}</p></div>
          </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["service", "serviceName"],
  data() {
    return {
      isMounted: false,
      leftSwatch: {
        background: "#433F4C",
        hexBottom: "#433F4C",
        rgbBottom: "rgb(67, 63, 76)"
      },
      leftSmallSwatches: [
        {
          background: "#5C5C60",
          rgb: "rgb(92, 92, 96)"
        },
        {
          background: "#858F91",
          rgb: "rgb(133, 143, 145)"
        },
        {
          background: "#BDBDBE",
          rgb: "rgb(189, 189, 190)"
        },
        {
          background: "#E5E5E6",
          rgb: "rgb(229, 229, 230)"
        }
      ],
      middleSwatch: {
        background: "#7CBDF1",
        hexBottom: "#7CBDF1",
        rgbBottom: "rgb(124, 189, 241)"
      },
      brandingInput: "",
      inputValueArray: [],
      bigHeading: "Big Heading",
      smallHeading: "Heading",
      subheading: "Subheading",
      bodyText: "Body Text",
      caption: "Caption",
      captionUppercase: "UPPERCASE",
      label: "Label",
      hyperlink: "Hyperlink"
    };
  },
  methods: {
    styleSwatches() {
      const leftSwatch = this.$refs["left-swatch"];
      leftSwatch.style.background = this.leftSwatch.background;
      const middleSwatch = this.$refs["middle-swatch"];
      middleSwatch.style.background = this.middleSwatch.background;
    },
    styleSmallSwatches() {
      const limit = this.leftSmallSwatches.length;
      let counter = 0;
      while (counter < limit) {
        const el = this.$refs[`${this.serviceName}` + counter][0];
        el.style.background = this.leftSmallSwatches[counter].background;
        counter++;
      }
    },
    styleText() {
      const link = this.$refs["hyperlink"];
      link.style.color = this.middleSwatch.background;
      const subHeading = this.$refs["subheading"];
      subHeading.style.color = this.middleSwatch.background;
    },
    updateColor(color) {
      const el = this.$refs["middle-swatch"];
      el.style.background = color;
      const link = this.$refs["hyperlink"];
      link.style.color = color;
      const subHeading = this.$refs["subheading"];
      subHeading.style.color = color;
    },
    updateLeftSwatch(index) {
      const limit = this.leftSmallSwatches.length;
      let counter = 0;
      //clears border styling of all other small swatches each time fucntion is ran
      while (counter < limit) {
        const el = this.$refs[`${this.serviceName}` + counter][0];
        el.style.border = "none";
        counter++;
      }
      const backGroundColor = this.leftSmallSwatches[index].background;
      const leftSwatch = this.$refs["left-swatch"];
      const eventTarget = this.$refs[`${this.serviceName}` + index][0];
      leftSwatch.style.background = backGroundColor;
      eventTarget.style.border = "1px solid white";
      this.leftSwatch.hexBottom = this.leftSmallSwatches[index].background;
      this.leftSwatch.rgbBottom = this.leftSmallSwatches[index].rgb;
    },
    inputValue() {
      const characterLimit = 14;
      if (this.inputValueArray.length < characterLimit) {
        if (event.key === "Backspace" && this.inputValueArray.length === 0) {
          return;
        } else if (event.key === "Backspace") {
          this.inputValueArray.pop();
        } else {
          this.inputValueArray.push(event.key);
        }
      } else {
        return;
      }
    }
  },
  created() {
    eventBus.$on("colorWasEdited", hexColor => {
      this.updateColor(hexColor);
      this.middleSwatch.hexBottom = hexColor.toUpperCase();
    });
    eventBus.$on("hexColorChanged", rgbColor => {
      // this.changeRgbValue(rgbColor);
      this.middleSwatch.rgbBottom = rgbColor;
    });
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.styleSmallSwatches);
    this.$nextTick(this.styleSwatches);
    this.$nextTick(this.styleText);
    this.$nextTick(this.inputHandler);
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

div 
  .branding__container
    display: flex
    justify-content: space-between
    width: 300px 
    height: 160px
    @include phone-small 
      width: 100% 
    &__left
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 28%
      @include phone-small 
        width: 30%
      &__swatch 
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: flex-end
        width: 100%
        height: 130px 
        border-radius: 7px
        transition: all .25s ease
        &--small 
          height: 12px 
          width: 32px 
          border-radius: 2px 
          margin: 2px 5px  
          &:nth-last-child(1)
            margin-bottom: 6px
        &--1
        &--2
        &--3
        &--4
      &--hex, &--rgb
        font-family: 'Helvetica', sans-serif
        font-size: .55em
        margin-left: 2px
      &--hex 
        font-weight: bold
      &--rgb     
        color: $grey
    &__middle
      display: flex 
      flex-direction: column
      justify-content: space-between
      width: 28%
      &--swatch
        display: flex 
        width: 100%
        height: 130px
        border-radius: 7px
      &--hex, &--rgb 
        font-family: 'Helvetica', sans-serif
        font-size: .55em
        margin-left: 2px
      &--hex 
        font-weight: bold
      &--rgb     
        color: $grey
      &--hex 
      &--rgb
    &__right
      display: flex 
      flex-direction: column
      justify-content: space-between
      width: 28% 
      height: 100% 
      font-family: 'Helvetica', sans-serif
      @include phone-small 
        width: 30%
      &__input__container
        display: flex
        height 20px
        &:before 
          display: flex
          content: ' '
          height: 11px
          align-self: center
          width: 1px 
          background: black
          animation: blink 1.5s infinite
        &--field, input 
          font-family: "Helvetica", sans-serif
          font-size: 0.9em 
          font-weight: bold
          border: none
          width: 100%
          border-bottom: 1px solid black
          &:focus 
            outline: none
      &--big-heading
        font-weight: bold
        font-size: .9em
        color: black
        @include phone-small 
          font-size: .85em
      &--heading
        font-size: 0.8em
        font-weight: bold
        @include phone-small 
          font-size: .75em
      &--subheading
        font-size: 0.6em
        font-weight: bold
        @include phone-small 
          font-size: .55em
      &--bodytext
        font-size: 0.5em
      &--caption
        font-size: 0.5em
        color: $grey
      &--captionuppercase
        font-size: 0.5em
        color: $grey
      &--label
        font-size: 0.5em
        color: $grey
      &--hyperlink
        font-size: 0.3em

@keyframes blink 
  0% 
    opacity: 0
  49% 
    opacity: 0 
  50% 
    opacity: 1
  100%
    opacity: 1
</style>