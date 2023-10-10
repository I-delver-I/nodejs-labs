type EventHandler = (...args: any[]) => void;

class MyEventEmitter {
    private readonly events: Map<string, EventHandler[]> = new Map<string, EventHandler[]>();

    registerHandler(eventName: string, handler: EventHandler): void {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const eventHandlers = this.events.get(eventName)!;
        eventHandlers.push(handler);
    }

    emitEvent(eventName: string, ...args: unknown[]): void {
        const eventHandlers = this.events.get(eventName);

        if (eventHandlers) {
            eventHandlers.forEach(handler => {
                handler(...args);
            });
        }
    }
}

export default MyEventEmitter;
