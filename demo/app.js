const App = {
    data() {
        return {
            placeholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['123', '234']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        },
        toUpperCase(note) {
            return note.toUpperCase()
        }
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('Input value changed: ', value);
        }
    }
}

Vue.createApp(App).mount('#app')