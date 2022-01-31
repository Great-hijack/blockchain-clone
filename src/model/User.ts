export default class User {
  profileId: string;
  pinCode: string;

  constructor(profileId: string, pinCode: string) {
    this.profileId = profileId;
    this.pinCode = pinCode;
  }
}
