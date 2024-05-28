<script setup>
// https://formkit.com/playground?fkv=latest&fileTab=Playground.vue&files=jc%5B%28%278%21%27Playground.vue%27%7Eeditor%21%27%3CscripYsetup7RASCI%40fjkit%2Fvue0zRZf%2C+computedIvue06sCB%5B4text18U8JFull+Name1placeholderUEnter+your+8...0*_4checkbox18UQJHas+E5%3F09%299%28*D%24elUp1childZn2%5B0E5+enabled%3Fw%2Cw%24Q0%5D9_4e518Ue5JE51ifU%24Q1validationUZquiZd%7Ce509_3%5D6MBZf%7B%28*82null9e52null9Q2false%2C3%29%7D6XB%7B%7D+%3D%3E+alert%7B0Valid+sO%27%3A0%7Dz3Gscript73%3CW%3CA+typeLfjTv-modelLMT%40sOLX0%3E*%3CASC+%3AsCLsCT%3AMLMT%2F7GA73%3CpZ7%28%28+M+%29%293GpZ7GW%27%7Eadded%21true%29%5D*3D0%5C%27109D2%3A+3%5Cn4*%28*D%24fjkitU5mail6z3consY7%3E38name9%2C*AFjKitB+%3D+CchemaD++G%3C%2FI+%29+fromwJ1labelUL%3D0MdataOubmitQhasE5RimporY%28+T0+U20Wtemplate7XhandleSOYt+Zre_%29%2Cjormw+0z%3B3%01zwj_ZYXWUTRQOMLJIGDCBA9876543210*_&imports=jc%28%27name%21%27ImpRtMap%27%7EeditR%21%27%28EDK59TDBK5B%400.8.4OB.Qm.js6D2D7%3FD%3D596cRe2cRe*G2G*dev2dev*themQ2themQ*i18n2i18n*inputs2inputs*N2N*rulQ2rulQ*G2G*J2J7HP%29P%27%29*762KCL.iF5Cjsdelivr.neFnpm%2FD6T%40LiF7%40%25LitVSsionInject%259%403O.Qm-browsS.jsA+HB3-sfc-loadSChttps%3A%2F%2Fcdn.DvueEP+AFt%2FGutilsH%5C%27JvalidationK%5C%21ALfRmkNobsSvSO%2FdisFDP%5CnQesRorSerTH%2CE%01TSRQPONLKJHGFEDCBA97652*_&css-framework=genesis

import { FormKitSchema } from "@formkit/vue";
import { ref } from "vue";

// form lang 
import { useClientData } from 'vuepress/client'
import { changeLocale } from '@formkit/vue'

const lang = ref("en") // default
const { siteLocaleData } = useClientData()
const pageLang_ = siteLocaleData._value.lang.toLowerCase()
if (pageLang_.startsWith("de")) {
  lang.value = "de"
}
//console.log("Lang:",lang.value)
changeLocale(lang.value)



const schema = [
    {
        $el: "h3",
        children: "FormKit Playground",  
    },
  {
    $formkit: "text",
    name: "name",
    label: lang.value == "de" ? "Voller Name":"Full Name",
    placeholder: lang.value == "de" ? "Namen eingeben ..." : "Enter your name..."
  },
  {
    $formkit: "checkbox",
    name: "hasEmail",
    label: lang.value == "de" ? "Mit EMail?" : "Has Email?",
  },
  {
    $el: "p",
    children: [lang.value == "de" ?"Mit Email?":"Email enabled? ", "$hasEmail"],
  },
  {
    $formkit: "email",
    name: "email",
    label: "Email",
    if: "$hasEmail",
    validation: "required|email",
  },
];

const data = ref({
  name: null,
  email: null,
  hasEmail: false,
});

const handleSubmit = () => alert("Valid submit!");


</script>

<template>
    formkit
<FormKit type="form" v-model="data" @submit="handleSubmit">
  <FormKitSchema :schema="schema" :data="data" />
</FormKit>

<pre>
{{ data }}
</pre>
</template>

