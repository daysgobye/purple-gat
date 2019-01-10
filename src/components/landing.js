import React from 'react'
import style from './landing.module.sass'
class landing extends React.Component {
    constructor(props) {
        super(props);
    };
    state = {
        loaded: "",
        afterLoad: "",
        scroll: false
    }
    // toggleLoad() {
    //     this.loaded = "loaded";
    //     setTimeout(() => {
    //       this.afterLoad = "after-load";
    //     }, 1500);
    //   }
    //   handleScroll() {
    //     // const navbartop = this.$refs.wrapper.clientHeight;
    //     if (!this.scroll) {
    //       this.$refs.scrollto.click();
    //       // window.scroll({
    //       //   top: navbartop,
    //       //   behavior: "smooth"
    //       // });
    //       this.scroll = true;
    //     }
    //   }

    componentDidMount() {
        // this.toggleLoad();
        // window.addEventListener("scroll", this.handleScroll);
        // window.addEventListener("touchmove", this.handleScroll);
    }
    render() {
        return (
            <div>
                <div class={style.landing__page} ref="wrapper">
                    <div class={style.landing__page__content}>
                        <div class={style.landing__page__content__container}>
                            <div class={style.landing__page__content__container__top} className="loaded">
                                <h1>Purple</h1>
                            </div>
                            <div class={style.landing__page__content__container__middle}>
                                <div className={style.landing__page__content__container__middle__left} className={style.loaded}>
                                    <h1>+</h1>
                                </div>
                                <div className={style.landing__page__content__container__middle__right} className={style.loaded}>
                                    <h1>Bold</h1>
                                </div>
                            </div>
                            <div class={style.landing__page__content__container__bottom}
                                className="loaded">
                                <a href="#hero">
                                    <img class="landing--arrow"
                                        className="loaded" src="../images/icons/arrow.svg"
                                        alt="icon of arrow facing downward to scroll down the page" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <a href="#navbar" ref="scrollto" v-smooth-scroll="{ duration: 1500}" aria-hidden="true"></a> */}
            </div>
        )

    }
}
export default landing
