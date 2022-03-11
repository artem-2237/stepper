Vue.createApp({
  template: `
  <div class="container">
    <h2 class="title">План по изучению Vue.js</h2>
    <p class="paragraph">{{ steps[currentStepId].paragraph }}</p>
    <div class="steps">
      <div class="steps__item" v-for="(item, i) in steps" :key="item">
        <div
          class="steps__counter"
          :class="{active: currentStepId === i, done: currentStepId > i}"
          @click.prevent="currentStepId = i"
        >
          {{ i + 1 }}
        </div>
        <span class="steps__text">{{ item.name }}</span>
      </div>
    </div>
    <div class="pagination">
      <button
        class="pagination__btn pagination__prev"
        @click.prevent="prevStep"
        v-if="!isLast"
        :disabled="isFirst"
      >
        НАЗАД
      </button>
      <button class="pagination__btn" :class="{pagination__prev: isLast, pagination__next: !isLast}" @click.prevent="nextStep">
      {{ isLast ? 'НАЧАТЬ ЗАНОГО' : 'ВПЕРЕД' }}
      </button>
    </div>
  </div>
  `,
  data() {
    return {
      steps: [
        {name: 'Основы', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, obcaecati consequatur. Dignissimos doloremque officia esse quo aperiam accusamus natus earum eaque minus!'},
        {name: 'Компоненты', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores labore architecto voluptatibus at!'},
        {name: 'Роутер', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae eveniet fugiat pariatur ex deleniti impedit quaerat perspiciatis!'},
        {name: 'Vuex', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque iure praesentium exercitationem, ut voluptatem incidunt sunt at.'},
        {name: 'Composition', paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, repudiandae.'},
      ],
      currentStepId: 0,
    };
  },
  computed: {
    isLast() {
      return this.currentStepId === this.steps.length - 1;
    },
    isFirst() {
      return this.currentStepId === 0;
    }
  },
  methods: {
    nextStep() {
      if (this.isLast) this.currentStepId = 0;
      else this.currentStepId++
    },
    prevStep() {
      if (!this.isFirst) this.currentStepId--;
    },
  },
}).mount('#app');
