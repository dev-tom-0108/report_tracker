<template>
  <article>
    <h2>Report</h2>    

    <template v-if="data.length">
      <ol class="todo-list">
        <li v-for="item in filterItems" :key="item.id">
          <p>Report-{{ item.id }}</p>
          <button type="button" @click="handleView(item)">View</button>
        </li>
      </ol>
      <PrevNext :totalPage="totalPage" @change="onPageChange" />
    </template>
  </article>
</template>

<script setup lang="ts">
import Bug from "@/types/Bug";
const { data, error } = await useFetch<string, Array<Bug>>(`https://00r1pdndpb.execute-api.eu-central-1.amazonaws.com/dev/reports`, { method: 'POST', body: { reporter: 'anonymous' } })

const bugs: Array<Bug> = data.value;
var index = 0;
bugs.forEach(function(e) {
  if(typeof e === "object") {
    index++;
    e["id"] = index;
  }
});

const { totalPage, filterItems, onPageChange } = usePagination(bugs);
</script>

<script lang="ts">
const router = useRouter();
const route = useRoute();
export default {
  name: "IndexPage",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {    
    handleView(todo) {
      console.log(todo);
      router.push({
        path: `/reports/${todo.id}`,
        params: { date: todo.createdAt },
      });
    },
  },
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 1rem;
}

.todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>