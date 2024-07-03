import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordingVideoService } from './recording-video/recording-video.service';
import { RecordingVideoController } from './recording-video/recording-video.controller';

@Module({
  imports: [],
  controllers: [AppController, RecordingVideoController],
  providers: [AppService, RecordingVideoService],
})
export class AppModule {}
