<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<script setup>
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="flex gap-5 flex-col">
    <CreateTodoForm />
    <Suspense>
      <template #default>
        <DefaultTodoList />
      </template>
      <template #fallback>
        Загрузка...
      </template>
    </Suspense>
  </div>
</template>
