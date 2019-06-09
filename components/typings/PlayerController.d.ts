import { MIDI } from "midiconvert";

export interface PlayerControllerProps {
  midi: MIDI;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onTrackSelect: (midi: MIDI, i: number) => void;
  onStartPlay: () => void;
  style?: any;
  onReplay?: () => void;
  onToggleSidebar: () => void;
}
