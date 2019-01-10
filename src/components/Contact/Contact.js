import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={style.contact}>
            < div className={
                style.Contact__title}>
                <h2 className={style.section--header}>Contact Us</h2>
        </div>
            <div className={style.contact__body}>
                < div className={
                    style.flex__col style.contact__body__left}>
                            <div className={style.flex__col} className={style.transback} className={style.contact__body__left--name}>
                                < label for="name" > Name *</label >
                <input type="text" v-model="messageData.yourName" id="name">
                </div>
                <div className={style.flex__col} className={style.transback} className={style.contact__body__left--company}>
                                        < label for="company" > Company</label >
                <input type="text" v-model="messageData.company" id="company">
                </div>
                <div className={style.flex__col} className={style.transback} className={style.contact__body__left--telephone}>
                                                < label for="Telephone" > Telephone *</label >
                <input type="text" v-model="messageData.telephone" id="Telephone">
                </div>
                <div className={style.flex__col} className={style.transback} className={style.contact__body__left--email}>
                                                        < label for="email" > Email *</label >
                <input type="text" v-model="messageData.email" id="email">
                </div>
                <div className={style.flex__col} className={style.transback} className={style.contact__body__left--details">
                < label > Project Details</label >
                <div className={style.tag}>
                    < div className={
                        style.tag__bubbles} v-for="(tag, index) in tags" : key="index" @click="addTag(index)">
                                                                                <p>{{ tag.toLowerCase() }}</p>
                </div >
                <input type="text" placeholder="Enter Your Own" @keyup.enter="addCustomTag" v - model="customTag" >
                <button @click="addCustomTag" > +</button >
                    </div >
            <h4>Budget</h4>
            <div>
                <p>${{ messageData.price[0] | comma }}  - ${{ messageData.price[1] | comma }} </p>
            </div>

            <vue-slider ref="slider" v-bind="vueSliderOptions" v-model="messageData.price"></vue-slider>
                </div >
            </div >
            <div className={style.flex__col contact__body__right">
                < div className = { style.flex__col contact__body__right--compose">
                    < p > Hello.My name is < span className = { style.contact__body__right--ul">{{ messageData.yourName }}</span>  from <span className={style.contact__body__right--ul"> {{ messageData.company }
    }</span> and I need: </p >
        <div className={style.tag}>
            < transition - group name = "tags" >
                <div className={style.tag__bubbles} v-for="(tag, index) in messageData.pickedTags" : key="index" >
                    < p > {{ tag.toLowerCase() }}  </p > <button @click="removeTag(index)" className = {
                style.tag__bubbles--del}><img src="../../ assets / images / icons / x.svg" alt="icon of letter X"> </button>
        </div>
                        </transition - group >
                    </div >
    <p className={style.pb}> You can reach me by phone at <span className={style.contact__body__right--ul} > {{ messageData.telephone }} </span > or < span className = { style.contact__body__right--span } > <br></span>  at my email < span className = { style.contact__body__right--ul } > {{ messageData.email }}</span ></p >
        <p className={style.pb}>I am looking to spend between <span className={style.contact__body__right--ul} >
         ${{ messageData.price[0] | comma }} </span > and < span className = {
    style.contact__body__right--ul
} > ${ { messageData.price[1] | comma } } </span > .</p >
                </div >
    <div className={style.flex__col transback contact__body__right--missed}>
        < label for="missed" > Did We Miss Anything ?</label >
        <textarea name="missed" v-model="messageData.missed" id="missed" cols="30" rows=6 ></textarea >
                </div >
            </div >
        </div >
    <div className={style.contact__send}>

        < form action="https://formspree.io/contact@purpleandbold.com"
            method="POST" >
            <textarea name="message" id="contact__send--message" ref="realmessage" cols="3" rows="1"></textarea>
            <input type="submit" ref="submit" value="Send Message">
        </form>
    </div >
    </div >
    
   
     );
    }
}

export default Contact;