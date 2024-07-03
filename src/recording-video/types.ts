export interface Video {
    id: string;
    url: string;
    price: number;
    endAt: string;
}

export interface RecordingVideo {
    isRecordingStarted: boolean;
    isStartRecordingPending: boolean;
    isStopRecordingPending: boolean;
    videos: Video[];
}
