import CreateNoteInput from "./CreateNoteInput";
import Notes from "./Notes";

export default class App 
{
    createNoteInput: CreateNoteInput;
    notes: Notes;

    constructor()
    {
        this.notes = new Notes();
        this.createNoteInput = new CreateNoteInput();

        this.init();

    }

    private init()
    {
        const noteInput = this.createNoteInput;

        noteInput.createNoteBtnClose?.addEventListener("click", (event) => {
            this.createNote();
        });

        if(noteInput.createNoteInput != null)
        {
            const createNoteContainer = noteInput.getNoteContainer();
            noteInput.createNoteInput.addEventListener('focus', (event) => {
                noteInput.showNotVisibleElements();
            }); 

            document.addEventListener('click', (event) => {
                const target = <Node> event.target;

                if (target !== createNoteContainer && !createNoteContainer.contains(target)) {
                    this.createNote();
                    noteInput.hideNotVisibleElements();
                }
            });
        } 
    }

    createNote()
    {
        
        console.log(this.createNoteInput.title);

        this.createNoteInput.title = "";
    }
}