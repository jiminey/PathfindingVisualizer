export default class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
    this.count = 0;
  }

  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    for (const currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(0, array.length - 1, array);
      this.count += 1;
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        childTwoIdx * 2 + 2 <= endIdx ? childTwoIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx].fCost < heap[childOneIdx].fCost) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap].fCost < heap[currentIdx].fCost) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (parentIdx > 0 && heap[currentIdx].fCost < heap[parentIdx].fCost) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let removedNode = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    this.count -= 1;
    return removedNode;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
    this.count += 1;
  }

  length() {
    return this.count;
  }

  search(node) {
    let flag = false;
    for (let i = 0; i < this.heap.length - 1; i++) {
        if (this.heap[i] === node) flag = true;
    }
    return flag;
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}
