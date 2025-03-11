export default class Task{
    constructor(name, completed = false, id = null) {
        this.name = name;
        this.completed = completed;
        this.id = id || Date.now(); // If ID is not provided, generate one
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}