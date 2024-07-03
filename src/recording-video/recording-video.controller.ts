import { Controller, Get } from '@nestjs/common';
import { RecordingVideoService } from './recording-video.service';
import { Video, RecordingVideo } from './types';

@Controller('api/recording-videos')
export class RecordingVideoController {
    constructor(private readonly recordingVideoService: RecordingVideoService) { }

    @Get()
    getProcessedVideos(): Video[] {
        const recordingVideoData: RecordingVideo = {
            isRecordingStarted: false,
            isStartRecordingPending: false,
            isStopRecordingPending: false,
            videos: [
                {
                    id: '1',
                    url: 'http://example.com/video1',
                    price: 0,
                    endAt: '1609459200000', // Example timestamp
                },
                {
                    id: '2',
                    url: 'http://example.com/video2',
                    price: 5,
                    endAt: '1609545600000', // Example timestamp
                },
            ],
        };

        return this.recordingVideoService.processRecordingVideo(recordingVideoData);
    }
}
