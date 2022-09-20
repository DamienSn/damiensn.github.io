// export default {
//     css: {
//     preprocessorOptions: {
//         scss: {
//             additionalData: '@import "src/variables.scss";'
//         }
//     }
// }}

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/variables.scss";'
            }
        }
    }
};

export default config;