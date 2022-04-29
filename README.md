# vp2
Vuepress2 Test

## Issues
### Wrong vuepress
after a fresh install, dev and build might not work. Potential reason is 
wrong link für vuepress binary.
Check directory node_module/.bin
vuepress -> ../vuepress-webpack/bin/vuepress.js

vuepress must be linked to vuepress-webpack/bin/vuepress.js
not to vuepress-vite/bin/vuepress.js

### vue3-component-base

issue in vue3-component-base, simple fix available, see PR at
https://github.com/CarterLi/vue-component-base/issues/2
