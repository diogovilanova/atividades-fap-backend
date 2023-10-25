// Interface EventListeners
interface EventListener {
  update(filename: string): void;
}

// Classe EventManager
class EventManager {
  private listeners: Map<string, EventListener[]> = new Map();

  subscribe(eventType: string, listener: EventListener) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)!.push(listener);
  }

  unsubscribe(eventType: string, listener: EventListener) {
    if (this.listeners.has(eventType)) {
      const eventTypeListeners = this.listeners.get(eventType)!;
      const index = eventTypeListeners.indexOf(listener);
      if (index !== -1) {
        eventTypeListeners.splice(index, 1);
      }
    }
  }

  notify(eventType: string, data: any) {
    if (this.listeners.has(eventType)) {
      for (const listener of this.listeners.get(eventType)!) {
        listener.update(data);
      }
    }
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  private textLines: string[] = [];

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  insertLine(lineNumber: number, text: string) {
    if (lineNumber < 0) {
      lineNumber = 0;
    } else if (lineNumber > this.textLines.length) {
      lineNumber = this.textLines.length;
    }
    this.textLines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber: number) {
    if (lineNumber >= 0 && lineNumber < this.textLines.length) {
      this.textLines.splice(lineNumber, 1);
    }
  }

  openFile() {
    this.eventManager.notify('open', this.textLines);
  }

  saveFile() {
    this.eventManager.notify('save', this.textLines);
  }

  getUserInput() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Enter text (type 'EOF' to save and exit):");

    rl.on('line', (line: string) => {
      if (line === 'EOF') {
        this.saveFile();
        rl.close();
      } else {
        this.insertLine(this.textLines.length, line);
      }
    });
  }
}

// Implementação da classe EmailAlertsListener
class EmailAlertsListener implements EventListener {
  update(filename: string) {
    console.log(`Sent an email with the contents of ${filename}`);
  }
}
// Interface EventListeners
interface EventListener {
  update(filename: string): void;
}

// Classe EventManager
class EventManager {
  private listeners: Map<string, EventListener[]> = new Map();

  subscribe(eventType: string, listener: EventListener) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)!.push(listener);
  }

  unsubscribe(eventType: string, listener: EventListener) {
    if (this.listeners.has(eventType)) {
      const eventTypeListeners = this.listeners.get(eventType)!;
      const index = eventTypeListeners.indexOf(listener);
      if (index !== -1) {
        eventTypeListeners.splice(index, 1);
      }
    }
  }

  notify(eventType: string, data: any) {
    if (this.listeners.has(eventType)) {
      for (const listener of this.listeners.get(eventType)!) {
        listener.update(data);
      }
    }
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  private textLines: string[] = [];

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  insertLine(lineNumber: number, text: string) {
    if (lineNumber < 0) {
      lineNumber = 0;
    } else if (lineNumber > this.textLines.length) {
      lineNumber = this.textLines.length;
    }
    this.textLines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber: number) {
    if (lineNumber >= 0 && lineNumber < this.textLines.length) {
      this.textLines.splice(lineNumber, 1);
    }
  }

  openFile() {
    this.eventManager.notify('open', this.textLines);
  }

  saveFile() {
    this.eventManager.notify('save', this.textLines);
  }

  getUserInput() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Enter text (type 'EOF' to save and exit):");

    rl.on('line', (line: string) => {
      if (line === 'EOF') {
        this.saveFile();
        rl.close();
      } else {
        this.insertLine(this.textLines.length, line);
      }
    });
  }
}

// Implementação da classe EmailAlertsListener
class EmailAlertsListener implements EventListener {
  update(filename: string) {
    console.log(`Sent an email with the contents of ${filename}`);
  }
}

// Implementação da classe LoggingListener
class LoggingListener implements EventListener {
  update(filename: string) {
    console.log(`Logged the contents of ${filename}`);
  }
}

// Exemplo de uso
const eventManager = new EventManager();
const textEditor = new TextEditor(eventManager);

const emailListener = new EmailAlertsListener();
const loggingListener = new LoggingListener();

eventManager.subscribe('open', emailListener);
eventManager.subscribe('save', loggingListener);

textEditor.getUserInput();
textEditor.openFile();

// Implementação da classe LoggingListener
class LoggingListener implements EventListener {
  update(filename: string) {
    console.log(`Logged the contents of ${filename}`);
  }
}

// Exemplo de uso
const eventManager = new EventManager();
const textEditor = new TextEditor(eventManager);

const emailListener = new EmailAlertsListener();
const loggingListener = new LoggingListener();

eventManager.subscribe('open', emailListener);
eventManager.subscribe('save', loggingListener);

textEditor.getUserInput();
textEditor.openFile();
