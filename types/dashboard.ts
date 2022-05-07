export interface themes {
  uid: string;
  updated: () => void;
}
export interface preview {
  theme: string;
}
export interface linksection {
  uid: string;
  updated: () => void;
}
export interface links {
  email: string;
  whatsapp: string;
  instagram: string;
  twitter: string;
  github: string;
  linkedin: string;
  facebook: string;
}
export interface bio {
  name: string;
  bio: string;
}
