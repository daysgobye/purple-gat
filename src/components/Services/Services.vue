<template>
  <section class="services" id="services">
    <div class="services__content">
      <h2 class="section--header">Services</h2>
      <div class="services__content__container">
      </div>
      <template v-for="(service, index) in services">
        <app-services-item :service="service" 
                           :services="services" 
                           :servicesIndex="index" 
                           :servicesArray="servicesArray[index]"
                           :serviceName="services[index].name.toLowerCase()"
                           :key="index">
        </app-services-item>
      </template>
    </div>
  </section>
</template>

<script>
import ServicesItem from "./ServicesItem.vue";

export default {
  components: {
    appServicesItem: ServicesItem
  },
  data() {
    return {
      servicesArray: [],
      services: [
        {
          name: "Websites",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Custom Web Development",
              subDescription:
                "Custom made websites. No templates, no themes, nothing is “out of the box.”  A lot of  people say that, but we mean it.  Also, we realize most clients may not understand why custom websites are important, so let us explain. Your brand and business should dictate the design and functionality of  your website, not constraints set by a theme or template. Nothing should impede on good  design and functionality, which is why (unless otherwise requested) all our websites are coded by hand, from a blank page all the way to a completed website. If you, like many people, need or prefer to work within a CMS like Wordpress or Shopify, no problem at all, we can build you a fully custom theme for any CMS that fits your business’ needs while still maintaining 100% of the custom design.",
              recolor: false
            },
            {
              subName: "Wordpress",
              subDescription:
                "Already have a great  Wordpress website or  Wordpress blog that works for you but need some new functionality? Or maybe it’s not so great and needs some attention? We are experts  at working within the Wordpress ecosystem and can make any and all edits or repairs necessary to your  Wordpress website.",
              recolor: false
            },
            {
              subName: "Web Applications",
              subDescription:
                "Need something more complex? We are ready to help you build your business’ application from the ground up and recommend the best available modern technologies to build it upon.  We will help you go from idea to prototype or fully functional application depending on your goals and discuss each option with you so you can make an informed decision.",
              recolor: false
            },
            {
              subName: "Hosting",
              subDescription:
                "If you want to handle hosting yourself, no problem at all,  you can do whatever you want with your website when we are done with it, you own it. However, some people prefer not to host or manage their website themselves. We offer fast hosting with guaranteed 99.99% uptime and all hosting plans come with monthly reviews of your website, meaning, we fix or update anything that needs attention, for no additional cost.",
              recolor: false
            }
          ]
        },
        {
          name: "Creative",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Web Design",
              subDescription:
                "Fully custom website design, from a blank white page, to a full website tailored specifically to your business’ brand and goals. All our websites include what other company’s consider “extra features.” We don’t charge by the page, we don’t charge extra to put a map on your website, and we don’t sell packages. The website design needs of a business is always different, and there should be no tiered constraints and rules. We know that small details and spending extra time on the small stuff really adds up to create a beautiful experience, and we treat each website design as an exercise in  beautifully blending form and function.",
              color: "#000000",
              recolor: true,
              id: 1
            },
            {
              subName: "Graphic Design",
              subDescription:
                "All modern businesses need graphic design, and probably need it frequently. Monthly fliers, billboards, newsletters, business cards, stickers, we do it all. We want to be your business’ partner when you need anything designed and produced, digital or printed.",
              color: "#000000",
              recolor: true,
              id: 2
            },
            {
              subName: "Illustration",
              subDescription:
                "We are teamed with experts leveraging years of experience in various styles of illustration, from flat and modern to photo realistic.  Any digital art you need, you can get from us.",
              color: "#000000",
              recolor: true,
              id: 3
            },
            {
              subName: "Motion Graphics",
              subDescription:
                "When things move, they get people’s attention.  Motion graphics are becoming more and more popular, you’ve probably noticed a lot of businesses have a logo that moves or transforms, or a short animation that really reels you in and makes you wonder what  they are all about. Motion graphics work, and you should have some.",
              color: "#000000",
              recolor: true,
              id: 4
            }
          ]
        },
        {
          name: "Branding",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Logo Design",
              subDescription:
                "Giving your future business (or current business) the gift of a great logo is probably the best thing you will ever do for its success.  However, it’s not enough to just have a logo look great on a screen. Think bigger,  your logo needs to look great on a screen, a sticker, a t-shirt, a hat, a billboard,  an envelope, etc., you get the idea. There is a lot to think about when it comes to logos, and we love thinking about them.",
              recolor: false
            },
            {
              subName: "Business Essentials",
              subDescription:
                "The stuff all businesses need. Think business cards and fliers.  Together, we will make a list of everything your business needs for success, and tackle them one at a time.",
              recolor: false
            },
            {
              subName: "Product Design",
              subDescription:
                "This is different for every business, sometimes you need it, sometimes you don’t. If you’re opening a bar, napkins with your logo may be nice, if you’re trying to freelance fitness classes, a branded water bottle may be a great gift to give first time clients.  Let’s make sure that your branded products look great, are high quality, and are worth your investment.",
              recolor: false
            }
          ]
        },
        {
          name: "Marketing",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "SEO",
              subDescription:
                "All of our websites, by default, come equipped with modern best-practices for on-page SEO,  setting you up for success and making sure search engines don’t skip over you.",
              recolor: false
            },
            {
              subName: "Social Media Creation",
              subDescription:
                "When you’re starting a business, there are a lot of social media accounts that need to be made, a lot of social media profile graphics that need to be designed, a lot of photos that need to be edited and uploaded, and a lot of data that needs to be entered and updated. Together let’s make a list of the most important social media outlets for your business, and we will handle the rest.",
              recolor: false
            },
            {
              subName: "Email Marketing ",
              subDescription:
                "Start collecting a list of emails and build a network. If it makes sense for your business, we will add an email collection mechanism to your website so you can start building a list of interested people.  Email marketing is a great way to reach out to your network let them know what new products your business offers, or let them know about seasonal sales you may be running. We can help you collect the emails, design custom emails that look great on computers, tablets, and phones, and set up processes to automate all of these tasks.  After each email marketing campaign, we will equip you with analytics showing how many people opened the email and clicked through to your website, so together we can make an informed decision about whether or not email marketing is worth the financial investment for your business.",
              recolor: false
            },
            {
              subName: "Analytics",
              subDescription:
                "All our websites, by default, come with built in analytics. This means that you can check in on your website whenever you please and track important statistics, like page visits, how long people stay on your website,  and which pages they are visiting most. If you sign up for our hosting plan, we will automatically send you a monthly report so you can track your business’ success and together we can figure out what is working, and what may need to be adjusted, and then take action.",
              recolor: false
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.getServicesArray();
  },
  methods: {
    getServicesArray() {
      const serviceCount = this.services.length;
      let counter = 0;
      while (counter < serviceCount) {
        const subCount = this.services[counter].subCategories.length;
        let subCounter = 0;
        this.servicesArray.push([]);
        while (subCounter < subCount) {
          this.servicesArray[counter].push({ expanded: false });
          subCounter++;
        }
        counter++;
      }
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services 
  display: flex
  justify-content: center
  height: auto
  &__content 
    display: flex 
    flex-direction: column
    justify-content: center 
    align-items: center
    width: 1100px
    .section--header 
       margin-bottom: -10px
    @include edgesnap 
      width: 100%
      padding: 0px 0px 
    

</style>