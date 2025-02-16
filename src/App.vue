<script setup lang="ts">
const handleInput = (event) => {
  console.log('Debounced input:', event.target.value)
}
</script>

<template>
  <div>
    <h1>Directive Examples</h1>

    <section>
      <h2>v-focus</h2>
      <div>
        <input type="text" placeholder="Focus on me" v-focus />
      </div>
    </section>

    <section>
      <h2>v-tooltip</h2>
      <div style="display: flex; flex-direction: column; gap: 12px">
        <div v-tooltip style="padding-inline: 12px; padding-block: 8px; border: 1px solid black">
          Some text
          <template name="tooltip">
            <div style="background-color: red">
              <h3>Tooltip text</h3>
              <p>Tooltip content</p>
            </div>
          </template>
        </div>

        <div
          v-tooltip
          style="padding-inline: 12px; padding-block: 8px; border: 1px solid black; width: 300px"
        >
          Some text
          <template name="tooltip">
            <div style="background-color: black; color: white">
              <h3>Tooltip text</h3>
              <p>Tooltip content</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section>
      <h2>v-debounce</h2>
      <div>
        <input type="text" placeholder="Debounce on me" v-debounce:500="handleInput" />
      </div>
    </section>
  </div>
</template>
