import {franc} from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2];
const langCode = franc(input)

if(langCode === 'und'){
    console.log("i dont know, sorry")
}
else {
    const language = (langs.where("3", langCode));
    console.log(language.name.rainbow);
}
