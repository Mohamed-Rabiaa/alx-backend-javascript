import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj1 = await uploadPhoto();
  const obj2 = await createUser();

  if (!obj1 || !obj2) {
    return { photo: null, user: null };
  }

  return {
    photo: obj1,
    user: obj2,
  };
}
