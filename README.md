# vp2
Vuepress2 Test

for 2.0.0-beta-51


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
    // Add this line
    if ((element || "") === "") return false
    //
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
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
