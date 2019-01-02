import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home';
import Gallery from '@/views/Gallery';
import Offer from '@/views/Offer';
import About from '@/views/About';
import Contact from '@/views/Contact';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/',
            name: 'offer',
            component: Offer
        },

        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/',
            name: 'contact',
            component: Contact
        }
    ]
})
