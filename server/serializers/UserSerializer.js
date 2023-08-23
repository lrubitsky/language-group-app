class UserSerializer {
  static getProfiles(array) {
    const requiredAttributes = [
      "username",
      "firstName",
      "lastName",
      "nativeLanguage",
      "englishLevel",
      "ageRange",
      "location",
      "introduction",
      "id",
    ];
    const serializedUsers = array.map((user) => {
      let serializedUser = {};
      for (const attribute of requiredAttributes) {
        if (attribute === "lastName") {
          serializedUser[attribute] = user[attribute][0];
        } else {
          serializedUser[attribute] = user[attribute];
        }
      }
      return serializedUser;
    });
    return serializedUsers;
  }

  static getProfileOfOne(user) {
    const requiredAttributes = [
      "username",
      "firstName",
      "lastName",
      "nativeLanguage",
      "englishLevel",
      "ageRange",
      "location",
      "introduction",
      "id",
    ];

    const serializedUser = {};
    for (const attribute of requiredAttributes) {
      if (attribute === "lastName") {
        serializedUser[attribute] = user[attribute][0];
      } else {
        serializedUser[attribute] = user[attribute];
      }
    }
    return serializedUser;
  }
}

export default UserSerializer;
