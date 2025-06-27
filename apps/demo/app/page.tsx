export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">MUI Components</h1>
        <p className="text-muted-foreground mt-2">
          A collection of beautifully crafted components built with shadcn/ui
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/button"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Button</h3>
          <p className="text-sm text-muted-foreground">
            A clickable button component with multiple variants and sizes
          </p>
        </a>
        
        <a
          href="/badge"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Badge</h3>
          <p className="text-sm text-muted-foreground">
            A small badge component for status and labels
          </p>
        </a>

        <a
          href="/checkbox"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Checkbox</h3>
          <p className="text-sm text-muted-foreground">
            A checkbox component for boolean selections
          </p>
        </a>

        <a
          href="/input"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Input</h3>
          <p className="text-sm text-muted-foreground">
            A text input component for user data entry
          </p>
        </a>

        <a
          href="/select"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Select</h3>
          <p className="text-sm text-muted-foreground">
            A select component for choosing from multiple options
          </p>
        </a>

        <a
          href="/dialog"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Dialog</h3>
          <p className="text-sm text-muted-foreground">
            A modal dialog component for displaying content
          </p>
        </a>

        <a
          href="/switch"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Switch</h3>
          <p className="text-sm text-muted-foreground">
            A toggle switch component for boolean settings
          </p>
        </a>

        <a
          href="/textarea"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Textarea</h3>
          <p className="text-sm text-muted-foreground">
            A multiline text input component for longer content
          </p>
        </a>

        <a
          href="/tooltip"
          className="border rounded-lg p-6 hover:border-foreground/50 transition-colors"
        >
          <h3 className="font-semibold mb-2">Tooltip</h3>
          <p className="text-sm text-muted-foreground">
            A tooltip component for providing additional context
          </p>
        </a>
      </div>
    </div>
  );
}