<script setup lang="ts">
import { ref } from 'vue'
const handleInput = (event) => {
  console.log('Debounced input:', event.target.value)
}

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const dragEvents = {
  start(e) {
    console.log('Drag started:', e)
  },
  drag(e) {
    console.log('Dragging:', e.clientX, e.clientY)
  },
  end(e) {
    console.log('Drag ended:', e)
  },
}

const resizableEvents = {
  onResize(e) {
    console.log('Resizing:', e)
  },
}
</script>

<template>
  <div>
    <h1>Directive Examples</h1>

    <section>
      <h2 v-drag:draggable="dragEvents">v-focus</h2>
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

    <section v-resizable="resizableEvents">
      <h2>v-lazy</h2>

      <div
        style="
          height: 1200px;
          background-color: #ff000021;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          style="
            width: 500px;
            height: 600px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: auto;
          "
        >
          <img
            v-lazy
            data-src="https://images.unsplash.com/photo-1739381337576-d14376e305d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unslah image"
            style="aspect-ratio: 2 1; height: 100%; width: 100%; object-fit: cover"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>v-click-outside</h2>

      <div>
        <div v-click-outside="closeDropdown">
          <div v-if="isOpen" class="dropdown-content">
            <!-- Your dropdown content here -->
            <p>Dropdown content...</p>
          </div>
          <button @click="toggleDropdown">Toggle Dropdown</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.draggable {
  width: 100px;
  height: 50px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: move;
  position: relative;
  border: 2px dashed #4caf50;
  color: #4caf50;
  font-weight: bold;
}
</style>
