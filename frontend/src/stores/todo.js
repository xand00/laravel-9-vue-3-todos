import { defineStore } from "pinia";

const apiEndpoint = import.meta.env.VITE_API_URL + '/todos'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

export const useTodoStore = defineStore("todo", {
    state: () => {
        return {
            list: []
        }
    },
    actions: {
        async create(todo) {
            const url = new URL(apiEndpoint)
            const body = JSON.stringify(todo)
            const options = {
                method: "POST",
                body,
                headers
            }
            await fetch(url, options)
            await this.fetch()
        },
        async fetch(query = "") {
            const url = new URL(apiEndpoint)
            if(query !== "") url.searchParams.set('query', query)
            const todosResponse = await fetch(url)
            this.list = await todosResponse.json()
        },
        async update(todo) {
            const url = new URL(apiEndpoint + '/' + todo.id)
            const body = JSON.stringify(todo)
            const options = {
                method: "PUT",
                body,
                headers
            }
            await fetch(url, options)
            await this.fetch()
        },
        async delete(id) {
            const url = new URL(apiEndpoint + '/' + id)
            await fetch(url, { method: "DELETE" })
            await this.fetch()
        },
    }
})