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

const scrollEvents = {
  onScroll() {
    console.log('scrolling')
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

    <section>
      <h2>v-scroll</h2>
      <div v-scroll:200="scrollEvents" style="background-color: gray; color: white">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi earum eligendi, quasi
          impedit, illum ut beatae ratione aut fugit cupiditate id nihil fuga distinctio at, dolore
          repellendus officiis quis excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto quas nemo maiores officia molestiae alias sequi. Unde, cum et vel ea illum est
          officia sit doloremque, ducimus neque beatae eveniet? Nisi nulla eum fuga adipisci
          mollitia perferendis quidem placeat tempore ipsa vitae dolore ducimus pariatur, expedita
          ea harum, iste quo recusandae culpa sed aliquam obcaecati tenetur quas nam amet. Vitae?
          Rem debitis ut architecto. Architecto doloribus tempora ducimus mollitia cum ad, officia
          aspernatur iure. Maiores, unde. Aut cupiditate ut assumenda porro. Fuga velit aperiam
          asperiores consectetur animi tenetur provident accusantium? Velit amet quaerat
          necessitatibus blanditiis voluptate, laudantium tempore, quisquam ullam facilis facere,
          vitae dicta at cum? Iste dolore laudantium cumque quae commodi a recusandae voluptas
          similique. Totam veritatis suscipit iusto. Molestiae aspernatur quae est id suscipit,
          perspiciatis amet quasi assumenda rem atque recusandae nemo libero, vero iste quaerat.
          Eligendi minus quaerat voluptate, aperiam adipisci facere omnis nihil quae recusandae
          magnam! Expedita, sint? Eaque magni excepturi autem? Ad earum magni dicta dolores adipisci
          temporibus, perspiciatis vitae nam nisi modi neque distinctio amet. Quasi, inventore?
          Porro dolores, enim nam ea nostrum alias. Dolores rem quis explicabo quos, asperiores
          perspiciatis deserunt sit magni molestiae nobis perferendis minima id voluptas delectus
          adipisci vero amet fuga pariatur libero, aperiam aspernatur? Suscipit repellat nobis
          consequuntur incidunt. Incidunt eaque culpa dolore. Maxime numquam velit, amet nobis
          laudantium quam ipsam totam quia, deserunt soluta similique id quos dicta in. Error amet
          quia a atque aut cumque vero eum! Error fugiat dolorem provident recusandae ipsam itaque
          excepturi quia nulla, doloremque quae reprehenderit possimus quibusdam numquam totam
          perferendis. Eveniet dolor dicta facilis. Nesciunt sed nam aut explicabo sequi dolor amet!
          Dolorem cum voluptas magni omnis tempora recusandae nesciunt, autem quo quaerat quod
          dicta? Laboriosam, adipisci fugiat. Animi qui iusto ab cum magnam in corporis, odit culpa
          ipsam error! Reprehenderit, quia? Laborum totam id praesentium. Assumenda exercitationem
          reiciendis dolore! Tempore repellendus sint aliquid in tempora nemo alias? Quisquam
          quibusdam doloribus dolorem qui, similique debitis esse itaque, odit porro, totam quae
          culpa. Similique, eveniet rerum fugiat veritatis ipsa odit quaerat eligendi nisi amet vero
          accusamus libero vel necessitatibus maiores incidunt voluptates voluptatibus qui aperiam
          saepe repellendus cum, asperiores doloribus aut assumenda. Excepturi! Sapiente nisi
          architecto quo fugit hic rerum iure quibusdam, nihil sequi quaerat, harum dolorum
          veritatis a adipisci quis ea non deleniti neque impedit! Iure, ducimus. Culpa officiis
          laboriosam quas expedita. Veniam dolorum omnis cum velit, dolore eos iste dicta quo sequi.
          Exercitationem neque pariatur magni numquam ipsam facilis corrupti! Rerum laborum
          voluptatem optio aspernatur ea consequuntur assumenda, sapiente voluptates aut.
          Voluptatibus dicta officiis ea necessitatibus beatae quas quo aperiam ratione dolor, ab
          distinctio numquam incidunt, unde minus! Consectetur inventore laudantium, repudiandae
          ducimus fuga aspernatur accusantium nihil fugit! Cumque, ullam adipisci!
        </p>
      </div>
    </section>

    <section class="dark-mode-section">
      <h2>v-dark-mode</h2>
      <div>
        <div>
          <h3>Light</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi earum eligendi, quasi
            impedit, illum ut beatae ratione aut fugit cupiditate id nihil fuga distinctio at,
            dolore repellendus officiis quis excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto quas nemo maiores officia molestiae alias sequi. Unde, cum et
            vel ea illum est officia sit doloremque, ducimus neque beatae eveniet? Nisi nulla eum
            fuga adipisci mollitia perferendis quidem placeat tempore ipsa vitae dolore ducimus
            pariatur, expedita ea harum, iste quo recusandae culpa sed aliquam obcaecati tenetur
            quas nam amet. Vitae? Rem debitis ut architecto. Architecto doloribus tempora ducimus
            mollitia cum ad, officia aspernatur iure. Maiores, unde. Aut cupiditate ut assumenda
            porro. Fuga velit aperiam asperiores consectetur animi tenetur provident accusantium?
            Velit amet quaerat necessitatibus blanditiis voluptate, laudantium tempore, quisquam
            ullam facilis facere, vitae dicta at cum? Iste dolore laudantium cumque quae commodi a
            recusandae voluptas similique. Totam veritatis suscipit iusto. Molestiae aspernatur quae
            est id suscipit, perspiciatis amet quasi assumenda rem atque recusandae nemo libero,
            vero iste quaerat. Eligendi minus quaerat voluptate, aperiam adipisci facere omnis nihil
            quae recusandae magnam!
          </p>
        </div>
        <div v-dark-mode>
          <h3>Dark</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi earum eligendi, quasi
            impedit, illum ut beatae ratione aut fugit cupiditate id nihil fuga distinctio at,
            dolore repellendus officiis quis excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto quas nemo maiores officia molestiae alias sequi. Unde, cum et
            vel ea illum est officia sit doloremque, ducimus neque beatae eveniet? Nisi nulla eum
            fuga adipisci mollitia perferendis quidem placeat tempore ipsa vitae dolore ducimus
            pariatur, expedita ea harum, iste quo recusandae culpa sed aliquam obcaecati tenetur
            quas nam amet. Vitae? Rem debitis ut architecto. Architecto doloribus tempora ducimus
            mollitia cum ad, officia aspernatur iure. Maiores, unde. Aut cupiditate ut assumenda
            porro. Fuga velit aperiam asperiores consectetur animi tenetur provident accusantium?
            Velit amet quaerat necessitatibus blanditiis voluptate, laudantium tempore, quisquam
            ullam facilis facere, vitae dicta at cum? Iste dolore laudantium cumque quae commodi a
            recusandae voluptas similique. Totam veritatis suscipit iusto. Molestiae aspernatur quae
            est id suscipit, perspiciatis amet quasi assumenda rem atque recusandae nemo libero,
            vero iste quaerat. Eligendi minus quaerat voluptate, aperiam adipisci facere omnis nihil
            quae recusandae magnam!
          </p>
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

.dark-mode-section {
  background-color: white;
  color: black;
}

.dark-mode-section .prefers-dark {
  background-color: black;
  color: white;
}
</style>
