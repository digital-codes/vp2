<template>
    <div>

        <section>
            <div>
                <o-dropdown v-model="value" inline @change="update()">
                    <template #trigger>
                        <o-button label="Inline" />
                    </template>

                    <o-dropdown-item :value=1 label="Action " />
                    <o-dropdown-item :value=2 label="Another action " />
                    <o-dropdown-item :value=3 label="Something else " />
                </o-dropdown>
            </div>
        </section>
    </div>

</template>

<script setup>
import { ODropdown, ODropdownItem, OButton } from "@oruga-ui/oruga-next"
// import Oruga theme styling
import '@oruga-ui/theme-oruga/dist/oruga.css'

import { ref } from "vue";

const value = ref(1);

const update = () => {
    console.log('Value changed to', value.value);
}

</script>


<style scoped></style>
