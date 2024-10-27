<script setup>
import { JsonForms } from '@jsonforms/vue';
import { vanillaRenderers } from '@jsonforms/vue-vanilla';
/*
import {
  ControlElement,
  JsonFormsRendererRegistryEntry,
  rankWith,
  isDateTimeControl,
} from '@jsonforms/core';
*/
import { ref } from 'vue';

import '@jsonforms/vue-vanilla/vanilla.css'

const renderers = Object.freeze([
    ...vanillaRenderers,
    // here you can add custom renderers
])

const data = ref({
        number: 5,
    })

const schema = {
    properties: {
        number: {
            type: 'number',
        },
    },
}

const uischema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/number',
        },
    ],
}

const onChange = (event) => {
    data.value = event.data;
    console.log("New data: ", data.value.number);
}

</script>

<template>
    <json-forms :data="data" :schema="schema" :uischema="uischema" :renderers="renderers" @change="onChange" />
</template>