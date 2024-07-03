import { Injectable } from '@nestjs/common';
import { Video, RecordingVideo } from './types';
import * as moment from 'moment';

@Injectable()
export class RecordingVideoService {
    processRecordingVideo(data: RecordingVideo): Video[] {
        if (data.isRecordingStarted || data.isStartRecordingPending || data.isStopRecordingPending) {
            return [];
        }

        const processedVideos = data.videos
            .map(video => ({
                ...video,
                endAt: moment(parseInt(video.endAt)).format('mm h A MM/DD/YYYY'),
                url: video.url,
            }))
            .sort((a, b) => parseInt(a.endAt) - parseInt(b.endAt))
            .filter(video => video.price < 0);

        return processedVideos;
    }
}
