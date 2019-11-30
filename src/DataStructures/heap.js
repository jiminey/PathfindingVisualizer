export default class MinHeap {
    constructor(array){
        this.heap = this.buildHeap(array);
    }
    buildHeap(array){

    }
    siftDown(currentIdx, endIdx, heap){

    }

    siftUp(currentIdx, heap){
        let parentIdx = Math.floor((currentIdx - 1) / 2)
        while (parentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap)
            currentIdx = parentIdx
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
    }

    peek() {
        return this.heap[0]
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap)
        let removedNode = this.heap.pop()
        this.siftDown(0, this.heap.length - 1, this.heap)
        return removedNode
    }

    insert(value) { 
        this.heap.push(value)
        this.siftUp(this.heap.length - 1, this.heap)
    }

    swap(i ,j, heap) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }
}