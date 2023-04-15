class Person {
  private name: string;
  private lastName: string;
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  get getName() {
    return this.name;
  }
  get getLastName() {
    return this.lastName;
  }
}

class User {
  private username: string;
  private creationDateUser: string;
  constructor(username) {
    this.username = username;
    const timeInMilisecs = Date.now();
    const date = new Date(timeInMilisecs);
    this.creationDateUser = date.toISOString();
  }
  get getUsername() {
    return this.username;
  }
  get getCreationDateUser() {
    return this.creationDateUser;
  }
}

class UserConfiguration {
  private directory: string;
  private homeFolder: string;
  constructor(directory, homeFolder) {
    this.directory = directory;
    this.homeFolder = homeFolder;
  }
  get getDirectory() {
    return this.directory;
  }
  get getHomeFolder() {
    return this.homeFolder;
  }
}

interface ICompleteUserProps {
  name: string;
  lastName: string;
  username: string;
  directory: string;
  homeFolder: string;
}

class CompleteUser {
  user: User;
  person: Person;
  userConfiguration: UserConfiguration;
  constructor({
    name,
    lastName,
    username,
    directory,
    homeFolder,
  }: ICompleteUserProps) {
    this.person = new Person(name, lastName);
    this.user = new User(username);
    this.userConfiguration = new UserConfiguration(directory, homeFolder);
    console.log('User created successfully, details:\n', this);
  }
  public clone() {
    const props: ICompleteUserProps = {
      name: this.person.getName,
      lastName: this.person.getLastName,
      username: this.user.getUsername,
      directory: this.userConfiguration.getDirectory,
      homeFolder: this.userConfiguration.getHomeFolder,
    };

    return new CompleteUser(props);
  }
}

const createOriginalObjectAndPrototype = ({
  name,
  lastName,
  username,
  directory,
  homeFolder,
}: ICompleteUserProps) => {
  const originalUser = new CompleteUser({
    name,
    lastName,
    username,
    directory,
    homeFolder,
  });
  const userClone = originalUser.clone();
  console.log(
    originalUser === userClone
      ? 'They are the same'
      : 'Different objects, prototype working'
  );
};

createOriginalObjectAndPrototype({
  name: 'Alvaro',
  lastName: 'Garzon',
  username: 'Alvaro8317',
  directory: 'home',
  homeFolder: 'alvaro8317',
});
