<template>
    <div v-if="isMounted">
      <div class="creative__color__palette">
        <div class="creative__color__palette--color" v-for="(color, index) in colors" :style="styleBackground(index)" :key="index" @click="colorSubHeaders(index)">
        </div>
      </div>
      <p class="services__creative__cta">Click a color...</p>
      <p class="services__creative__cta">...see, it's not that easy</p>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["service"],
  data() {
    return {
      isMounted: false,
      colorUpdate: "",
      colors: [
        {
          name: "Turqoise",
          hex: "#1abc9c",
          rgb: "rgb(26, 188, 156)"
        },
        {
          name: "Emerald",
          hex: "#2ecc71",
          rgb: "rgb(46, 204, 113)"
        },
        {
          name: "Peter River",
          hex: "#3498db",
          rgb: "rgb(52, 152, 219)"
        },
        {
          name: "Amethyst",
          hex: "#9b59b6",
          rgb: "rgb(155, 89, 182)"
        },
        {
          name: "Wet Ashpalt",
          hex: "#34495e",
          rgb: "rgb(52, 73, 94)"
        },
        {
          name: "Green Sea",
          hex: "#16a085",
          rgb: "rgb(22, 160, 133)"
        },
        {
          name: "Nehpritis",
          hex: "#27ae60",
          rgb: "rgb(39, 174, 96)"
        },
        {
          name: "Belize Hole",
          hex: "#2980b9",
          rgb: "rgb(41, 128, 185)"
        },
        {
          name: "Wisteria",
          hex: "#8e44ad",
          rgb: "rgb(142, 68, 173)"
        },
        {
          name: "Midnight Blue",
          hex: "#2c3e50",
          rgb: "rgb(44, 62, 80)"
        },
        {
          name: "Sun Flower",
          hex: "#f1c40f",
          rgb: "rgb(241, 196, 15)"
        },
        {
          name: "Carrot",
          hex: "#e67e22",
          rgb: "rgb(230, 126, 34)"
        },
        {
          name: "Alizarin",
          hex: "#e74c3c",
          rgb: "rgb(231, 76, 60)"
        },
        {
          name: "Clouds",
          hex: "#ecf0f1",
          rgb: "rgb(236, 240, 241)"
        },
        {
          name: "Concrete",
          hex: "#95a5a6",
          rgb: "rgb(149, 165, 166)"
        },
        {
          name: "Orange",
          hex: "#f39c12",
          rgb: "rgb(243, 156, 18)"
        },
        {
          name: "Pumpkin",
          hex: "#d35400",
          rgb: "rgb(211, 84, 0)"
        },
        {
          name: "Pomegranate",
          hex: "#c0392b",
          rgb: "rgb(192, 57, 43)"
        },
        {
          name: "Silver",
          hex: "#bdc3c7",
          rgb: "rgb(189, 195, 199)"
        },
        {
          name: "Asbestos",
          hex: "#7f8c8d",
          rgb: "rgb(127, 140, 141)"
        }
      ]
    };
  },
  methods: {
    colorSubHeaders(index) {
      const hexColor = this.colors[index].hex;
      const rgbColor = this.colors[index].rgb;
      eventBus.handleColorUpdate(hexColor, rgbColor);
    },
    styleBackground(index) {
      return `backgroundColor: ${this.colors[index].hex}`;
    }
  },
  mounted() {
    this.isMounted = true;
    // this.$nextTick(this.styleText);
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

div 
  .creative__color__palette
    display: flex
    flex-wrap: wrap
    width: 300px
    justify-content: space-between
    margin-bottom: 13px
    &--color 
      border-radius: 2px
      box-shadow: 0px 0px 10px 3px rgba(218,218,218,1);
      height: 36px 
      width: 16% 
      margin: 4px 6px
      transition: all 0.15s ease-in
      &:hover 
        transform: scale(1.1)
        box-shadow: 0px 0px 10px 3px rgba(200,200,200,1);
  p
    text-align: right 
    font-family: $mainfont
    color: $grey 
    font-weight: $normal
    line-height: 20px
    font-size: .95em
        
</style>