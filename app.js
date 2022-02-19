// "terminal.integrated.profiles.windows": {"Node.js" {"path":"C:\Program Files\nodejs", "args": []}}
const profileDataArr = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i+=1) {
        console.log(profileDataArr[i]);
    }
    console.log('=====================');
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArr);