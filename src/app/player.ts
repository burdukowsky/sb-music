import { Howl } from 'howler';

import { Track } from 'src/app/types.ts';

interface TrackWithHowl extends Track {
  howl?: Howl;
}

class Player {
  private tracks: TrackWithHowl[] = [];
  private index = 0;

  setPlaylist(tracks: Track[]): void {
    this.tracks = tracks;
  }

  getPlaylist(): Track[] {
    return this.tracks;
  }

  private getCurrentTrack(): TrackWithHowl | undefined {
    return this.tracks[this.index];
  }

  play(): void {
    const track = this.getCurrentTrack();
    if (track == null) {
      return;
    }
    if (track.howl == null) {
      track.howl = new Howl({ src: [track.file] });
    }
    if (!track.howl.playing()) {
      track.howl.play();
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
}

export const player = new Player();
