import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const obj1 = await uploadPhoto();
    const obj2 = await createUser();
    return {
      photo: obj1,
      user: obj2,
    };
  } catch (e) {
    return { photo: null, user: null };
  }
}
