<template>

<section>
    <o-field label="Name">
      <o-loading
        :full-page="false"
        :active="true"
        :can-cancel="false"
      >
        {{ message }}
      </o-loading>
    </o-field>
</section>

</template>

<script>

export default {
    props: ["message"],
    components: {
    },
}

</script>
