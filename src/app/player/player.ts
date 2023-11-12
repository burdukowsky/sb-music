import { Howl } from 'howler';

import { Track } from 'src/app/types.ts';
import { SimpleBehaviorSubject } from 'src/app/rx/SimpleBehaviorSubject.ts';
import { SimpleSubjectSubscription } from 'src/app/rx/SimpleSubject.ts';

interface TrackWithHowl extends Track {
  howl?: Howl;
}

class Player {
  private tracks: TrackWithHowl[] = [];
  private index = 0;
  private currentTrack$ = new SimpleBehaviorSubject<Track | null>(null);
  private loading$ = new SimpleBehaviorSubject<boolean>(false);
  private repeat = false;

  setPlaylist(tracks: Track[]): void {
    this.tracks = tracks;
  }

  getPlaylist(): Track[] {
    return this.tracks;
  }

  private getCurrentTrack(): TrackWithHowl | undefined {
    return this.tracks[this.index];
  }

  getRepeatStatus(): boolean {
    return this.repeat;
  }

  setRepeatStatus(val: boolean) {
    this.repeat = val;
  }

  play(): void {
    const track = this.getCurrentTrack();
    if (track == null) {
      return;
    }
    if (track.howl == null) {
      track.howl = new Howl({
        src: [track.file],
        onend: () => {
          this.repeat ? this.play() : this.next();
        },
        onload: () => this.loading$.next(false),
      });
    }
    if (!track.howl.playing()) {
      track.howl.play();
      this.currentTrack$.next(track);
      if (track.howl.state() !== 'loaded') {
        this.loading$.next(true);
      }
    }
  }

  playTrack(index: number): void {
    const track = this.getCurrentTrack();
    if (track != null && track.howl != null) {
      track.howl.stop();
    }
    this.index = index;
    this.play();
  }

  pause(): void {
    const track = this.getCurrentTrack();
    if (track == null || track.howl == null) {
      return;
    }
    track.howl.pause();
  }

  private skip(direction: 'prev' | 'next'): void {
    let index;
    if (direction === 'prev') {
      index = this.index - 1;
      if (index < 0) {
        index = this.tracks.length - 1;
      }
    } else {
      index = this.index + 1;
      if (index >= this.tracks.length) {
        index = 0;
      }
    }

    this.playTrack(index);
  }

  prev(): void {
    this.skip('prev');
  }

  next(): void {
    this.skip('next');
  }

  mute(): void {
    Howler.volume(0);
  }

  unmute(): void {
    Howler.volume(1);
  }

  onPlay(callback: (track: Track | null) => void): SimpleSubjectSubscription {
    return this.currentTrack$.subscribe(callback);
  }

  onLoadingStatusChange(
    callback: (status: boolean) => void,
  ): SimpleSubjectSubscription {
    return this.loading$.subscribe(callback);
  }
}

export const player = new Player();
