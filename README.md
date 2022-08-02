# vp2
Vuepress2 Test

for 2.0.0-beta-49


## Issues

## Webpack bundling

Webpack provides better production bundling than vite, though vite might
be OK for development. Can be changed in "bundler" option at config.js

<!--
## Wrong vuepress
after a fresh install, dev and build might not work. Potential reason is 
wrong link für vuepress binary.
Check directory node_module/.bin
vuepress -> ../vuepress-webpack/bin/vuepress.js

vuepress must be linked to vuepress-webpack/bin/vuepress.js
not to vuepress-vite/bin/vuepress.js
-->

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

See also [PR](https://github.com/coreui/coreui-vue/issues/206)


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
