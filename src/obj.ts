type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: 'John',
    retire: (date: Date) => {
        console.log(date);
    }
}

// Intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Optional chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear);

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');
