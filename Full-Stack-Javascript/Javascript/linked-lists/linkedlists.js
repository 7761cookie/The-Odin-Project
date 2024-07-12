
const Node = (value) => {
    return {
        value,
        next: null
    }
}

const LinkedList = () => {
    let head = null

    const append = (value) => {
        const newNode = Node(value);
        if (!head) {
            head = newNode;
            return;
        }

        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    const prepend = (value) => {
        const newNode = Node(value);
        newNode.next = head;
        head = newNode;
    }

    const size = () => {
        let count = 0;
        let current = head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    const getHead = () => {
        return head;
    }

    const getTail = () => {
        let current = head;
        if (!current) return null;

        while (current.next) {
            current = current.next;
        }
        return current;
    }

    const at = (index) => {
        let current = head;
        let count = 0;

        while (current) {
            if (count === index) return current;
            count++;
            current = current.next;
        }
        return null;
    }

    const pop = () => {
        if (!head) return null;

        if (!head.next) {
            head = null;
            return;
        }

        let current = head;
        while (current.next && current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    const contains = (value) => {
        let current = head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    const find = (value) => {
        let current = head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            index++;
            current = current.next;
        }
        return null;
    }

    const toString = () => {
        let current = head;
        let str = "";

        while (current) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        str += "null";
        return str;
    }

    const insertAt = (value, index) => {
        if (index === 0) {
            prepend(value);
            return;
        }

        const newNode = Node(value);
        let current = head;
        let count = 0;

        while (current) {
            if (count === index - 1) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            count++;
            current = current.next;
        }
    }

    const removeAt = (index) => {
        if (index === 0 && head) {
            head = head.next;
            return;
        }

        let current = head;
        let count = 0;

        while (current) {
            if (count === index - 1 && current.next) {
                current.next = current.next.next;
                return;
            }
            count++;
            current = current.next;
        }
    }

    return {
        head: getHead,
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
}