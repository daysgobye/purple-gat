<template>
  <div :class="[`services__content__container__item`, `${service.name.toLowerCase()}-container`]" v-if="isMounted">
      <div class="services__content__container__item__container">
          <div class="services__content__container__item__container__left">
              <h2 class="services__content__container__item__container__left__title"> {{ service.name }} </h2>
              <component :is="servicesImgComponent" 
                         :service="service"
                         :serviceName="serviceName">
                         </component>
          </div>
          <div class="services__content__container__item__container__middle">
              <div class="services__content__container__item__container__middle--arrow"></div>
              <div class="services__content__container__item__container__middle--line"></div>
          </div>
          <div class="services__content__container__item__container__right">
            <ul class="services__content__container__item__container__right__subcategories">
              <app-services-sublist :service="service" 
                                    :services="services" 
                                    :servicesIndex="index" 
                                    :servicesArray="servicesArray"
                                    :serviceName="serviceName"
                                    :ref="serviceName">
                                    </app-services-sublist>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import ServicesWebsites from "./ServicesWebsites.vue";
import ServicesCreative from "./ServicesCreative.vue";
import ServicesBranding from "./ServicesBranding.vue";
import ServicesMarketing from "./ServicesMarketing.vue";
import ServicesSublist from "./ServicesSublist.vue";
import VueSlideUpDown from "vue-slide-up-down";

export default {
  props: [
    "service",
    "services",
    "servicesIndex",
    "servicesArray",
    "serviceName"
  ],
  components: {
    appServicesWebsites: ServicesWebsites,
    appServicesCreative: ServicesCreative,
    appServicesBranding: ServicesBranding,
    appServicesMarketing: ServicesMarketing,
    appServicesSublist: ServicesSublist,
    VueSlideUpDown: VueSlideUpDown
  },
  data() {
    return {
      index: this.servicesIndex,
      active: [false, false, false],
      serviceList: ["Websites", "Creative", "Branding", "Marketing"],
      isMounted: false
    };
  },
  methods: {
    //each p description in right div gets a ref "description-index"
    //this function targets the same p ref as the index of the header clicked and gives it a class or removes a class
    // getDescriptionHeight(index) {
    //   const el = event.target;
    //   const targetIndex = index;
    //   const expansionTarget = this.$refs[`description-${index.toString()}`][0];
    //   if (expansionTarget.classList.contains("expanded")) {
    //     expansionTarget.classList.remove("expanded");
    //   } else {
    //     expansionTarget.classList.add("expanded");
    //   }
    // }
  },
  computed: {
    servicesImgComponent() {
      return `app-services-${this.serviceList[this.index].toLowerCase()}`;
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.websites-container
  margin-top: 100px !important
  @include tablet-portrait 
    margin-top: 50px !important 
  @include phone-small 
    margin-top: 40px !important
.marketing-container 
  margin-bottom: 100px !important
  @include tablet-portrait 
   margin-bottom: 50px !important
  @include phone-small 
    margin-bottom: 40px !important


.services__content__container__item
  width: 100%
  margin: 50px 0px
  height: 100%
  @include edgesnap 
    width: 100%
    padding: 0px 20px
  @include tablet-portrait 
    margin: 50px 0px
  @include phone-large 
    margin: 35px 0px
  @include phone-small 
    padding: 0px
    margin: 30px 0px
  &__container
    display: flex
    align-items: center
    height: 100%
    @include tablet-portrait 
      flex-direction: column 
      align-items: center
      height: auto
    &__left
      display: flex
      flex-direction: column
      align-items: right
      width: 300px
      @include tablet-portrait 
        width: 100%
        margin-bottom: 20px 
        //may need to switch this back to center
        align-items: flex-start
        width: auto 
      h2, &__title
        font-family: $mainfont
        font-weight: $normal
        font-size: 1.7em
        margin-bottom: 10px
        align-self: flex-end
        @include tablet-portrait 
          align-self: center
          margin-bottom: 20px
        @include phone-large 
          align-self: flex-start
    &__middle
      display: flex 
      flex-direction: column
      justify-content: center
      @include tablet-portrait 
        align-items: center
      &--line
      height: 100%
      margin: 0px 50px 
      width: 1px
      border-right: .08em solid $light-grey
      @include edgesnap 
        margin: 0px 25px
      @include tablet-portrait 
        transform: rotate(-180deg)
        width: 100%
        border-right: none
        border-bottom: 1px solid $light-grey
        margin: 15px 0px
      @include phone-large 
        margin: 5px 0px
        margin-bottom: -5px
    &__right 
      flex: 1  
      @include edgesnap 
        width: 100% 
      @include tablet-portrait 
        width: auto
        margin-top: 20px
    &__left, &__middle, &__right 
      @include tablet-portrait
        width: 60%
      @include tablet-phone 
        width: 100%
      ul, &__subcategories 
        display: flex 
        flex-direction: column 
        justify-content: center
        height: 100%
        list-style: none
                


</style>