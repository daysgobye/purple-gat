<template>
  <div v-if="isMounted">
    <div v-for="(sub, index) in service.subCategories" 
        :key="index" 
        class="services__content__container__item__container__right__subcategories__item">
      <div class="services__content__container__item__container__right__subcategories__item__title" @click="expandSubComponent(index)">
        <h3 class="services__content__container__item__container__right__subcategories__item__title__name" 
        :ref="`${serviceName}-sub-${index}`"> {{ sub.subName }} </h3>
        <div class="services__content__container__item__container__right__subcategories__item__title__arrow" :class="{ expanded: servicesArray[index].expanded }"></div>
      </div>
        <vue-slide-up-down :active="servicesArray[index].expanded" :duration="600" class="services__content__container__item__container__right__subcategories__item__description">
         <div class="services__content__container__item__container__right__subcategories__item__description">
          <p class="services__content__container__item__container__right__subcategories__item__description__text "> {{ sub.subDescription }} </p>
      </div>
      </vue-slide-up-down>
    </div>
  </div>
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      isMounted: false,
      counter: 0,
      name: ""
    };
  },
  props: [
    "service",
    "services",
    "servicesIndex",
    "servicesArray",
    "serviceName"
  ],
  components: {
    VueSlideUpDown: VueSlideUpDown
  },
  methods: {
    expandSubComponent(index) {
      this.servicesArray[index].expanded = !this.servicesArray[index].expanded;
    },
    updateCreativeColor(hexColor) {
      if (this.name == "creative") {
        const limit = this.service.subCategories.length;
        if (this.counter < limit) {
          const target = this.$refs[
            `${this.serviceName}-sub-${this.counter}`
          ][0];
          target.style.color = hexColor;
          this.counter++;
        } else if ((this.counter = limit - 1)) {
          while (this.counter >= 0) {
            const target = this.$refs[
              `${this.serviceName}-sub-${this.counter}`
            ][0];
            target.style.color = "black";
            this.counter--;
          }
          this.counter = 0;
        }
      } else {
        return;
      }
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  },
  created() {
    eventBus.$on("colorWasEdited", hexColor => {
      this.updateCreativeColor(hexColor);
    });
  },
  mounted() {
    this.isMounted = true;
    this.name = this.serviceName;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services__content__container__item__container__right__subcategories
  &__item
    &__title 
      display: flex
      justify-content: space-between 
      align-items: center
      margin-bottom: 5px
      cursor: pointer
      @include tablet-portrait 
        justify-content: space-between
      h3, &__name
        font-family: $mainfont
        font-weight: $light 
        font-size: 1.5em
        @include phone-large 
          font-size: 1.425em
        @include phone-small 
          font-size: 1.35
      &__arrow
        margin-left: 20px
        height: 20px 
        width: 20px
        background: 
          image: url('../../assets/images/services-title-arrow.svg')
          position: center 
          size: contain
          repeat: no-repeat
        &.expanded 
          animation: arrow-grow 0.5s forwards
    &__description
      overflow: hidden 
      height: auto
      width: 100%
      @include phone-large 
        font-size: 0.95em
      &.expanded 
        height: auto
      &__text
        display: flex
        font-family: $subfont
        margin-bottom: 20px
        font-size: 0.95em
        line-height: 1.25em
        overflow: hidden
        color: black
        height: auto
        transition: all .5s ease
        &.expanded 
          max-height: 600px
          transform: translateY(0px)
              
@keyframes arrow-grow 
  0% 
    transform: scale(1) rotate(0deg)
  50% 
    transform: scale(1.2)
  100%
    transform: scale(1) rotate(-180deg)
</style>