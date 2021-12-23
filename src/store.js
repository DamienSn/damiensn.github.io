import {writable} from 'svelte/store'

export const els = writable({
    menuToggler: false,
    nav: false,
    header: false
})