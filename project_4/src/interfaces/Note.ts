export default interface Note {
    get title(): string;
    get content(): string;
    get pinned(): boolean;
    get createdAt(): (Date | null);
}