import ColorInterface from "./Color";

export default interface Note {
    Id: string;
    Title: string;
    Content: string;
    Pinned: boolean;
    CreatedAt: (number | null);
    Color: ColorInterface;
}

export interface NoteStorage {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    createdAt: (number | null);
    hexColor: string;
}

export interface FirebaseDbNoteStorage {
    title: string;
    content: string;
    pinned: boolean;
    created_at: (number | null);
    hex_color: string;
}