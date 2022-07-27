interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity:number) {}

    get size() {
        return this._size;
    }
    push(value: string) {
        if (this.size === this.capacity) {
            throw new Error("Stack is full!")
        }
        const node: StackNode = { value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop(): string {
        // 리턴값을 string | undefined로 하는게 아니라,
        // 항상 리턴 보장을 해주는 것이 좋다
        // 다만, 예외상황 발생 시, error를 throw하도록 한다
        // 또한 strict한 check를 하지 않음 <- Javascript연동 고려
        // null == undefined
        if (this.head == null) {
            throw new Error("Stack is empty!")
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(12);
stack.push("hello 1");
stack.push("world 2");
while (stack.size !== 0) {
    console.log(stack.pop());
}