/*@type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gray-strokes': '#3D4144',
                'gray-bg': '#202427',
                'darker-gray-bg': '#1A1D21',
                'gray-info-hero-section': '#5d656b',
                
                'gray-footer': '#171B1F',
                'gray-social-medias-footer': '#6C6C6C',

                'gray-social-medias': '#3D4144',
                'gray-button-body': '#2E3133',
                
                'white-main-title': '#E7E7E7',
                'white-titles': '#BCBCBC',
                'white-text': '#E1E3E7'
            }
        },    
    },
    plugins: [],
}