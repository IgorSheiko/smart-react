import DefaultAvatar from './default-avatar.jpg';

export const hasAvatar = (url) => {
  return (url !== null && url !== '') ? url : DefaultAvatar;
};
