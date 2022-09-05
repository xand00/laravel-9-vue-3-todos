<script setup>
    import { ref } from 'vue'
    import { useTodoStore } from "../stores/todo"
    const todoStore = useTodoStore()
    const showTodoDeleteConfirmModal = ref(false)
    const showTodoEditForm = ref(false)
    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })
    const onClickDelete = () => showTodoDeleteConfirmModal.value = true
    const onChangeCompletionCheckbox = event => {
        todoStore.update({ id: props.item.id, is_completed: event.target.checked })
    }
    const confirmDelete = close => {
        todoStore.delete(props.item.id)
        close()
    }
    const cancelDelete = close => close()
    const onClickToggleEditForm = () => {
        showTodoEditForm.value = !showTodoEditForm.value
    }
    const onSubmitEditForm = async values => {
        const todo = {
            title: values.title,
            text: values.text,
            id: props.item.id
        }
        await todoStore.update(todo)
    }

</script>

<template>
    <div class="flex-row bg-emerald-500 p-2 rounded">
        <div class="flex flex-row justify-between gap-2">
            <input
                type="checkbox"
                @change="onChangeCompletionCheckbox"
                :checked="item.is_completed ? true : false"
                class="self-center  m-1"
            />
            <div :class="(item.is_completed ? 'line-through' : '') + ' grow'">
                <div class="font-bold">{{ item.title }}</div>
                <div class="font-light">{{ item.text }}</div>
            </div>
            
            <FormKit
                type="button"
                @click="onClickToggleEditForm"
                :classes="{
                    'outer': 'self-center'
                }"
            >
                ✎
            </FormKit>
            <FormKit
                type="button"
                @click="onClickDelete"
                :classes="{
                    'outer': 'self-center mr-3'
                }"
            >
                X
            </FormKit>

            <CustomModal v-model="showTodoDeleteConfirmModal" @confirm="confirmDelete" @cancel="cancelDelete">
                <template v-slot:title>Удаление Todo</template>
                <p>Вы действительно хотите удалить Todo?</p>
            </CustomModal>
        </div>
        <div v-if="showTodoEditForm">
            <FormKit
                type="form"
                id="create-todo-form"
                :form-class="'p-5 bg-emerald-500 rounded'"
                :config="{
                    classes: {
                        messages: 'w-full',
                        message: 'text-red-800 break-words',
                        input: 'w-full'
                    },
                }"
                :actions="false"
                @submit="onSubmitEditForm"
            >
                <FormKit
                    type="text"
                    name="title"
                    label="Название"
                    :classes="{
                        'input': 'w-full'
                    }"
                    :value="item.title"
                    validation="required"
                />
                <FormKit
                    type="text"
                    name="text"
                    label="Текст"
                    :classes="{
                        'input': 'w-full'
                    }"
                    :value="item.text"
                    validation="required"
                />
                <FormKit
                    :classes="{
                        'wrapper': 'flex justify-center mt-5',
                        'input': 'bg-slate-600 text-white p-2 rounded-sm w-1/2 mx-auto'
                    }"
                    type="submit"
                    label="Обновить"
                />
            </FormKit>
        </div>
    </div>
</template>