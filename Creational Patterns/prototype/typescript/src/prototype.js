var Person = /** @class */ (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
        var timeInMilisecs = Date.now();
        var date = new Date(timeInMilisecs);
        this.creationDateUser = date.toISOString();
    }
    Object.defineProperty(User.prototype, "getUsername", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCreationDateUser", {
        get: function () {
            return this.creationDateUser;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var UserConfiguration = /** @class */ (function () {
    function UserConfiguration(directory, homeFolder) {
        this.directory = directory;
        this.homeFolder = homeFolder;
    }
    Object.defineProperty(UserConfiguration.prototype, "getDirectory", {
        get: function () {
            return this.directory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "getHomeFolder", {
        get: function () {
            return this.homeFolder;
        },
        enumerable: false,
        configurable: true
    });
    return UserConfiguration;
}());
var CompleteUser = /** @class */ (function () {
    function CompleteUser(_a) {
        var name = _a.name, lastName = _a.lastName, username = _a.username, directory = _a.directory, homeFolder = _a.homeFolder;
        this.person = new Person(name, lastName);
        this.user = new User(username);
        this.userConfiguration = new UserConfiguration(directory, homeFolder);
        console.log('User created successfully, details:\n', this);
    }
    CompleteUser.prototype.clone = function () {
        var props = {
            name: this.person.getName,
            lastName: this.person.getLastName,
            username: this.user.getUsername,
            directory: this.userConfiguration.getDirectory,
            homeFolder: this.userConfiguration.getHomeFolder,
        };
        return new CompleteUser(props);
    };
    return CompleteUser;
}());
var createOriginalObjectAndPrototype = function (_a) {
    var name = _a.name, lastName = _a.lastName, username = _a.username, directory = _a.directory, homeFolder = _a.homeFolder;
    var originalUser = new CompleteUser({
        name: name,
        lastName: lastName,
        username: username,
        directory: directory,
        homeFolder: homeFolder,
    });
    var userClone = originalUser.clone();
    console.log(originalUser === userClone
        ? 'They are the same'
        : 'Different objects, prototype working');
};
createOriginalObjectAndPrototype({
    name: 'Alvaro',
    lastName: 'Garzon',
    username: 'Alvaro8317',
    directory: 'home',
    homeFolder: 'alvaro8317',
});
