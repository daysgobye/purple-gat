<template>
    <div class="marketing__container" v-if="isMounted" 
                                      @mouseover.stop="rotateGraphs(1)"
                                      @mouseout.stop="rotateGraphs(0)">
      <template v-for="(image, index) in brandingImages">
        <img :src="image.src" 
             :alt="image.alt" 
             :class="`marketing__container--graph--${index}`" 
             :style="styleMarketingGraphs(index)"                
             :ref="`marketing-graph-${index}`"
             :key="index"> 
      </template>
    </div>
</template>

<script>
export default {
  props: ["service", "serviceName"],
  data() {
    return {
      isMounted: false,
      brandingImages: [
        {
          src: require("../../assets/images/branding-graph-red.svg"),
          alt: "bar graph illustration animating size and position"
        },
        {
          src: require("../../assets/images/branding-graph-blue.svg"),
          alt: "bar graph illustration animating size and position"
        }
      ]
    };
  },
  methods: {
    styleMarketingGraphs(index) {
      //sets minimum and maximum potential scale of graphs, closest to "1" for delta looks best I feel
      const minScaleDown = 0.94;
      const maxScaleUp = 1.06;
      //sets minimum and maximum translations of graphs
      const minTranslate = -3;
      const maxTranslate = 3;
      //gets random numbers based on min/max and sets attribute to that
      const scale = this.getRandomNumber(minScaleDown, maxScaleUp);
      const translate = this.getRandomNumber(minTranslate, maxTranslate);

      return {
        transform: `scale(${scale})
                    translateY(${translate}px)`
      };
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    rotateGraphs(flag) {
      const firstGraph = this.$refs["marketing-graph-0"][0];
      const secondGraph = this.$refs["marketing-graph-1"][0];
      if (flag) {
        firstGraph.classList.add("rotateNegative");
        secondGraph.classList.add("rotatePositive");
      } else {
        firstGraph.classList.remove("rotateNegative");
        secondGraph.classList.remove("rotatePositive");
      }
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

.marketing__container
  display: flex 
  align-items: center
  width: 300px 
  height: 130px
  img.rotateNegative 
    animation: rotate-negative 6s infinite
    // transform: rotateY(360deg) !important
    // transition: all 1s infinite !important
  img.rotatePositive
    animation: rotate-positive 7s forwards infinite
  img 
    position: absolute
    animation: return-to-normal 9s forwards infinite

  &--graph--0
    margin-top: 5px
  &--graph--1

@keyframes return-to-normal 
  0% 
  50% 
    transform: scale(1) translateY(0)
  100%

@keyframes rotate-negative 
  0% 
  50% 
    transform: rotateY(-180deg)
  100%

@keyframes rotate-positive
  0% 
  50% 
    transform: rotateY(250deg)
  100%
</style>