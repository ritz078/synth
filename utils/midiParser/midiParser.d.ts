export interface Header {
  name?: string;
  keySignatures: {
    scale: "minor" | "major";
    key: string;
    ticks: number;
  }[];
  tempos: {
    bpm: number;
    ticks: number;
    time?: number;
  }[];
  meta: {
    ticks: number;
    type: "endOfTrack";
    text: string;
  }[];
  timeSignatures: {
    ticks: number;
    timeSignature: [number, number];
    measures?: number;
  }[];
  ppq: number;
}

export interface Note {
  absoluteTime: number;
  midi: number;
  name: string;
  type: NOTE_EVENT_TYPE;
  noteOffVelocity?: number;
  velocity: number;
  durationTick?: number;
  duration: number;
  time: number;
}

export interface Instrument {
  name: string;
  number: number;
  value: string;
  family: string;
}

export interface Track {
  name: string;
  notes: Note[];
  instrument: Instrument;
  channel: number;
  duration: number;
}

export interface Beat {
  instrument: Partial<Instrument>;
  notes: {
    time: number;
  }[];
}

export interface MidiJSON {
  beats: Beat[];
  duration: number;
  tracks: Track[];
  header: Header;
}
