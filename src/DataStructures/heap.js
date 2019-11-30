export default class MinHeap {
    constructor(array){
        this.heap = this.buildHeap(array);
    }
    
    buildHeap(array){
        let firstParentIdx = Math.floor((array.length - 2) / 2)
        for (const currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(0, array.length - 1, array)
        }
        return array
    }

    siftDown(currentIdx, endIdx, heap){
        let childOneIdx = currentIdx * 2 + 1
        while (childOneIdx <= endIdx) {
            const childTwoIdx = 
                childTwoIdx * 2 + 2 <= endIdx ? childTwoIdx * 2 + 2 : -1
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx
            } else {
                idxToSwap = childOneIdx
            }
            
            if (heap[idxToSwap] < heap[currentIdx]){
                this.swap(idxToSwap, currentIdx, heap)
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1
            } else {
                return;
            }
        }
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