import IconSun from "/images/icon-sun.svg"
import IconMoon from "/images/icon-moon.svg"

export const themeConfig = {
    light:{
        name: 'Light',
        layout:{
            backgroundColor: 'bg-light-purple-300',
            textColor: 'text-light-gray-600',
            image: "bg-[url('/images/bg-desktop-light.jpg')]",
            mobile: "bg-[url('/images/bg-mobile-light.jpg')]",
        },
        todo:{
            backgroundColor:'bg-light-gray-50',
            borderColor:'border-light-gray-600',
            textColor: 'text-light-navy-850',
        },
        icon: IconMoon
    },
    dark:{
        name: 'Light',
        layout:{
            backgroundColor: 'bg-dark-navy-950',
            textColor: 'text-dark-purple-300',
            image: "bg-[url('/images/bg-desktop-dark.jpg')]",
            mobile: "bg-[url('/images/bg-mobile-dark.jpg')]",
        },
        todo:{
            backgroundColor:'bg-dark-navy-900',
            borderColor:'border-dark-purple-700',
            textColor: 'text-dark-purple-300',
        },
        icon: IconSun
    },
}
