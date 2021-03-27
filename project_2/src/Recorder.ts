class Recorder
{
    public state: RecorderState = RecorderState.WAITING;
    private channel: any = [];

    push(key: string, time: number): void {
        if(this.state == RecorderState.RECORDING) {
            this.channel.push({key, time});
        }
    }

    getChannel() {
        return this.channel;
    }

    clearChannel(): void {
        this.channel = [];
    }
}

export default Recorder;

export enum RecorderState {
    WAITING,
    RECORDING
}
