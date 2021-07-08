export interface User {
  firstName: string;
  id: string;
  uid: string;
  lastName: string;
  username: string;
  vocabulary: any;
  data: Function;
}

export interface AuthData {
  uid: string;
}

export interface Word {
  new: boolean;
  id: string;
  success: number;
  name: string;
  transcription: string;
  translation: string;
  type: number;
}
