export default class MinHeap {
    constructor(array){
        this.heap = this.buildHeap(array);
    }
    buildHeap(array){

    }
    siftDown(currentIdx, endIdx, heap){

    }

    siftUp(currentIdx, heap){

    }
    peek() {
        return this.heap[0]
    }

    remove() {

    }
    insert() { 

    }

    swap(i ,j, heap) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }
}