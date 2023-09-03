import pageInfo from './schemas/pageInfo';
import project from './schemas/project';
import experience from './schemas/experience';
import skill from './schemas/skill';
import social from './schemas/social';
import post from './schemas/post';
import bio from './schemas/bio';

export const schema = {
  types: [skill, pageInfo, experience, social, project, post, bio],
};
