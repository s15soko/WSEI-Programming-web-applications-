export default class CreateNoteInput
{
    private _title: string = "";

    createNoteInput: HTMLInputElement|null = null;
    createNoteBtnClose: HTMLButtonElement|null = null;

    public get title(): string
    {
        return this._title;
    }

    public set title(title: string)
    {
        this._title = title;
        
        if(this.createNoteInput !== null) {
            this.createNoteInput.value = title;
        }
    }
    
    //

    constructor()
    {
        this.createNoteInput = <HTMLInputElement> document.getElementById("create-note-input");
        this.createNoteBtnClose = <HTMLButtonElement> document.getElementById("footer-close-btn");

        this.createNoteInput?.addEventListener("input", (event) => {
            const target = <HTMLInputElement> event.target;
            this.title = target.value;
        });
    }

    protected getNotVisibleElements()
    {
        const createNoteContainer = this.getNoteContainer();
        return <NodeListOf<HTMLElement>> createNoteContainer?.querySelectorAll(".not-visible");
    }

    public getNoteContainer()
    {
        return <HTMLElement> document.getElementById("create-note-container");
    }

    public showNotVisibleElements()
    {
        const elements = this.getNotVisibleElements();
        
        elements.forEach(notVisibleElement => {
            notVisibleElement.classList.add("visible");
        });
    }

    public hideNotVisibleElements()
    {
        const elements = this.getNotVisibleElements();

        elements.forEach(notVisibleElement => {
            notVisibleElement.classList.remove("visible");
        });
    }
}