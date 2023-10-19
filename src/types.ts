export interface Song {
  id: number;
  name: string;
  knownVersions: Version[];
}

export interface Version {
  name: string;
  minutes?: number;
  seconds?: number;
  note?: string;
}

export interface GroupItem {
  itemNumber: number;
  song: Song;
  version: Version;
}

export interface Group {
  type: GroupType;
  name: string;
  date: Date;
  songs: GroupItem[];
}

export type GroupType =
  | "Album"
  | "EP"
  | "Single"
  | "Double-Single"
  | "Setlist"
  | "Demo Collection"
  | "Other";
