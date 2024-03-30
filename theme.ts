import { 
    extendTheme, 
    theme as base, 
    withDefaultColorScheme, 
    withDefaultVariant 
} from "@chakra-ui/react"


const inputSelectStyle = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    }
}
export const theme = extendTheme({
    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
        },

        brand2: {
            100: "#386641",
            200: "#6a994e",
            300: "#a7c957",
            400: "#f2e8cf",
            500: "#bc4749",
        }
    },
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    components: {
        Input: { ...inputSelectStyle },
        Select: { ...inputSelectStyle },
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none',
                    _focus: {
                        ring: 2,
                        ringColor: 'brand.500',
                    }
                }
            }
        }
    }
},
withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox', 'Button']
}),
withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select']
})
);