import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Note {
  readonly id: string;
  readonly noteTitle: string;
  readonly noteText?: string;
  readonly Pad: Pad;
  readonly noteExtra?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class Pad {
  readonly id: string;
  readonly padName: string;
  readonly Notes?: (Note | null)[];
  constructor(init: ModelInit<Pad>);
  static copyOf(source: Pad, mutator: (draft: MutableModel<Pad>) => MutableModel<Pad> | void): Pad;
}