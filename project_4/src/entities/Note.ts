import NoteInterface from "./../interfaces/Note";

export default class Note implements NoteInterface 
{
    private _title = "";
    private _content = "";
    private _pinned = false;
    private _createdAt: Date | null = null;

    public get Title() {
        return this._title;
    }

    public set Title(title: string) {
        this._title = title;
    }

    public get Content(): string {
        return this._content;
    }

    public set Content(content: string) {
        this._content = content;
    }

    public get Pinned(): boolean {
        return this._pinned;
    }

    public set Pinned(pinned: boolean) {
        this._pinned = pinned;
    } 

    public get CreatedAt(): (Date | null) {
        return this._createdAt;
    }

    public set CreatedAt(createdAt: (Date | null)) {
        this._createdAt = createdAt;
    }
}