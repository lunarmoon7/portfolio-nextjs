interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
export interface Post extends SanityBody {
  _type: 'post';
  image: Image;
  url: string;
  title: string;
}
export interface Bio extends SanityBody {
  _type: 'bio';
  title: string;
  year: string;
}
export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  whyFrontEnd: string;
  interests: string;
  bio: Bio[];
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  linkToSource: string;
  linkToPost: Post[];
  publishedAt: string;
  workingNow: string;
  visibility: string;
}
export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
  network: string;
}
