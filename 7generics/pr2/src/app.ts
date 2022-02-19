class DataStorage<T extends string | number | boolean> {
    // class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        if (this.data.indexOf(item)) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data]
    }
}
const textStorage = new DataStorage<string>()
// textStorage.addItem(12)
textStorage.addItem("Max")
textStorage.addItem("Bob")
textStorage.removeItem("Max")
console.log(textStorage.getItems())

const numbersStorage = new DataStorage<number>()

// const objectStorage = new DataStorage<object>()
// const obj1 = { name: "Alan" }
// objectStorage.addItem(obj1)
// objectStorage.addItem({ name: "Max" })
// objectStorage.addItem({ name: "Manu" })
// objectStorage.removeItem({ name: "Max" })
// objectStorage.removeItem(obj1) // это удаляет
// console.log('dfgdg', objectStorage.getItems())



