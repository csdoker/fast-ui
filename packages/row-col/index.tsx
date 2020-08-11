import { defineComponent, toRefs } from 'vue';
import './index.scss';

const Col = defineComponent({
  props: {
    col: {
      type: Number,
      default: 24,
    },
  },
  setup(props, ctx) {
    const { default: default_ } = ctx.slots;
    const { col } = toRefs(props);
    return () => (
      <div
        class={{
          'fa-col': true,
          [`fa-col-${col.value || 24}`]: true,
        }}
      >
        {default_ && default_()}
      </div>
    );
  },
});

export default {
  name: 'col',
  component: Col,
};
