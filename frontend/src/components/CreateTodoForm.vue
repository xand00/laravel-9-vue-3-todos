<script setup>
    import { useTodoStore } from "../stores/todo"
    import { reset } from '@formkit/core'
    const todoStore = useTodoStore()
    const onSubmit = async values => {
        const todo = {
            title: values.title,
            text: values.text
        }
        await todoStore.create(todo)
        reset('create-todo-form')
    }
</script>

<template>
    <FormKit
        type="form"
        id="create-todo-form"
        :form-class="'p-5 bg-emerald-500 rounded w-96'"
        :config="{
            classes: {
                messages: 'w-full',
                message: 'text-red-800 break-words',
                input: 'w-full'
            },
        }"
        :actions="false"
        @submit="onSubmit">
        <h3 class="text-xl text-center mb-5">Создание Todo</h3>
        <div class="flex gap-1 flex-col">
            <FormKit
                label="Название"
                name="title"
                type="text"
                validation="required"
            />
            <FormKit
                label="Текст"
                name="text"
                type="text"
                validation="required"
            />
            <FormKit
                :classes="{
                    'wrapper': 'flex justify-center mt-5',
                    'input': 'bg-slate-600 text-white p-2 rounded-sm w-1/2 mx-auto'
                }"
                type="submit"
                label="Создать"
            />
        </div>
    </FormKit>
</template>