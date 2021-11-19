import Bug from "@/types/Bug";
<script lang="ts" setup>

const { query } = useRoute();
const router = useRouter();

const date = query.date
// specify the return type as an array of todos
console.log('======================\n')
console.log(date)
const { data, error } = await useFetch<string, Bug>(`https://00r1pdndpb.execute-api.eu-central-1.amazonaws.com/dev/reporter/anonymous/createdAt/${date}`, { method: 'GET' }) 

const bug: Bug = data.value; // reactive

if (!bug) {
  router.push({
    path: "/404",
  });
}

</script>

<template>
  <div v-if="bug" class="todo">
    <h1 class="text-5xl font-bold mb-8">Report #{{ $route.params.id }}</h1>
    <pre>{{ bug }}</pre>  
  </div>
</template>

<style>
pre {
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
