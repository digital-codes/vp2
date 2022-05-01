---
title: About auf Deutsch
description: Teaser für Beschreibung
---

# About 
kdqlknqekf+
qw
fd
+qefwefwefwefrwfre


[internal link](/about)

[external link](https://www.cern.ch)


> wewibweibfwe f
> d,flwefew



## Footnotes

direct entry^[of text at the location] of the footnote

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.






sldefmwef


```
defwefwfwfe

```

sdwefewf

## UI Test

bla bla

## UiTest

will need some time to load due to async setup and *Suspense*


<Suspense>
  <UiTest>
  </UiTest>

  <template #fallback >
    <div>
    <Loading message="Loading data, please wait ..." ></Loading>
    </div>
  </template>
</Suspense>

<!--
<Suspense>
  <UiTest>
  </UiTest>
  <template #fallback>
    Loading UiTest
  </template>
</Suspense>
-->

123

bla bla bla 

```

<template>
    <div class="center">
    <CButton 
      color="primary" 
      :active="active == 0"
      @click="active = 0"
      >Primary
    </CButton>
    <CButton color="secondary" disabled>Secondary</CButton>
    <CButton color="success">Success</CButton>

    </div>

    <div class="center">
    Container
    <CContainer>
      <CRow>
        <CCol sm="auto">
          One of three columns
        </CCol>
        <CCol sm="auto">
          One of three columns
        </CCol>
        <CCol sm="auto">
          One of three columns
        </CCol>
      </CRow>
    </CContainer>
    End container 1
    <CContainer>
  <CRow class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
  <!--
  class="gx-5 gy-5" :xs="{ cols: 1 , gutter: 2 }" :sm="{ cols: 2 }" :md="{ cols: 3 }">
  -->
    <CCol :sm="{ span: 6 }">
      <div class="p-3 border bg-light">Custom column padding</div>
    </CCol>
    <CCol :sm="{ span: 6 }">
      <div class="p-3 border bg-light">Custom column padding</div>
    </CCol>
    <CCol :sm="{ span: 6 }">
      <div class="p-3 border bg-light">Custom column padding</div>
    </CCol>
    <CCol :sm="{ span: 6 }">
      <div class="p-3 border bg-light">Custom column padding</div>
    </CCol>
  </CRow>
</CContainer>
    End container 2

    </div>


  </template>

<script>

// https://coreui.io/vue/docs/components/button.html

import { CButton } from '@coreui/vue'
import { CContainer, CCol, CRow } from '@coreui/vue'
// or
//import CButton from '@coreui/vue/src/components/button/CButton'

import '@coreui/coreui/dist/css/coreui.min.css'

    export default {
      data:() => ({
        active: 0
      }),
      components: {
        CButton,
        CContainer, CCol, CRow,
      }
    }
  </script>

```

123


