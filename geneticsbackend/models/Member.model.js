class Member {
  constructor(id, userName, password, fullName, email, contactNo, userImage) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.fullName = fullName;
    this.email = email;
    this.contactNo = contactNo;
    this.userImage = userImage;
  }
}

module.exports = Member;
