interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, update: Partial<Profile>): Profile {
  const newProfile = { ...profile, ...update };
  return newProfile;
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
