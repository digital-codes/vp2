<script setup>
// https://vuejs.org/guide/components/slots.html#named-slots
</script>

<template>
<div class="card">
  <header class="hdr">
    <div>
    <slot name="header">
    </slot>
    </div>
  </header>
  <main class="content">
    <div>
    <slot>
      Card Content
    </slot>
    </div>
  </main>
  <footer class="ftr">
    <div>
    <slot name="footer"></slot>
    </div>
  </footer>
</div>
</template>

<style scoped>
.card {
    color: var(--c-text);
    /*
    color: #222;
    */
    background-color: #f8f8f8;
    padding: 1rem;
    margin: .5rem 0 .5rem 0;
    box-shadow: -5px 5px 5px rgba(0,0,0,.2),-8px 8px 8px rgba(0,0,0,.4);
    box-shadow: 3px 3px 3px 3px #444;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.25rem;
}

.dark .card {
    /*
    color: #fff;
    */
    background-color: #333;
    box-shadow: 3px 3px 3px 3px #aaa;
    border: 1px solid rgba(255,255,255,.2);
}


.card .hdr {
    text-align: center;
    font-size: 150%;
    padding-bottom: 20px;
}

.card .content {
    padding: 0 20px 0 20px;
    text-align: justify;
    text-justify: distribute;
}

.card .ftr {
    text-align: center;
    padding-top: 10px;
    font-size: 80%;
}

.img {
  width: 30px;
}

</style>

<style>
.card img {
  width: 50px;
}

</style>
