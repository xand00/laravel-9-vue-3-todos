<script>
    export default {
        props: {
            list: {
                type: Array,
                required: true
            }
        }
    }
</script>

<template>
    <div class="rounded flex flex-col gap-1">
        <Todo :item="todo" v-for="todo in list" :key="todo.id" />
    </div>
</template>