<script setup>
    import { ref } from 'vue'
    import { useTodoStore } from "../stores/todo"
    const todoStore = useTodoStore()
    await todoStore.fetch()
    let query = ref('')
    const onSearch = async query => {
        await todoStore.fetch(query)
    }

    window.Echo.channel('todos')
        .listen('TodosChanged', async data => {
            await todoStore.fetch(query.value)
        })
</script>

<template>
    <div class="bg-slate-600 rounded p-5 w-96">
        <FormKit
            type="text"
            name="search"
            label="Поиск"
            v-model="query"
            @input="onSearch"
            :classes="{
                'input': 'w-full',
                'outer': 'mb-5',
                'label': 'text-white'
            }"
        />
        <TodoList :list="todoStore.list" />
    </div>
</template>