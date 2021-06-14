export default interface Note {
    Title: string;
    Content: string;
    Pinned: boolean;
    CreatedAt: (Date | null);
}