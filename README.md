# vp2
Vuepress2 Test

for 2.0.0-beta-56


## Issues

## Vite bundler now OK for SSR

default settings can be used

CLientOnly must be used for certain comonents (chart5 and chart7)


### vue3-component-base

issue in vue3-component-base, simple fix available, see PR at
https://github.com/CarterLi/vue-component-base/issues/2


### coreui
carrousel throws error when moving away from page.
Fix in node_modules/@coreui/vue/dist/index.es.js ~ line 1235

```
const isVisible$1 = (element) => {
    if (element == undefined)
        return false;
    else {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
};
```

or fix the sourcefile at coreui-vue/packages/coreui-vue/src/components/carousel/CCarousel.ts

```

const isVisible = (element: HTMLDivElement | undefined) => {
  if (element == undefined) 
    return false
  else {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
}
```

See also [PR](https://github.com/coreui/coreui-vue/issues/206)


### New issue with coreui
Use of type "File" in coreui-vue/packages/coreui-vue/src/components/form/CFormInput.ts. This type exists only in browser environment! 

Ad hoc solution: remove type from type list (around line 6433) in distribution or recompile library




## Leaflet
Warning: 
> autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.

Solution: change node_modules/leaflet/dist/leaflet.css as suggested =>

```
@media print {
	/* Prevent printers from removing background-images of controls. */
	.leaflet-control {
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
		}
	}
```

## Colors

https://toolness.github.io/accessible-color-matrix/


ffffff e0e0e0e c0c0c0 808080 202020 000000
               c0c020        202000
               20c0c0        002020
               20c020        002000
               2020c0        000020





colors bright/medium/dark:

yellow: f0f010/a0a010/-
green: 

bright/dark:
yellow c0c020,202000
turkis; 20c0c0,002020
green: 20C020,002000

blue: 2020C0, 000080


blues
    white
    #FFFFFF

    light
    #B3EFFF

    bright
    #00CFFF

    medium
    #046B99

    dark
    #1C304A

    black
    #000000


greens
B3FFEF
00FFCF
04996B
1C4A30


yellow with text dark or black
bright: F0F010
medium: a0a010

reds:  medium with black text, white/light text on dark/black bg, bright text on balck
 
bright: f01010
medium: a01010


greys:
    white
    #FFFFFF
    light
    #E0E0E0
    bright
    #C0C0C0
    medium
    #808080
    dark
    #202020
    black
    #000000

bg black: text to medium
dark bg: text to bright
medium bg: black
bright++ bg; dark +

dark/bright:
yellow c0c020,2020200
turkis; 20c0c0,002020
green: 20C020,002000
blue: only white/black vs all other

Blue/grey:
    #E0E0E0
    #2020C0
    #000080
    #202020

all light+/dark+


