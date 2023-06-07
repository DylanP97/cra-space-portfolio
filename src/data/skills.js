
// images technos
import {
    Javascript,
    Typescript,
    MongoDB,
    Bootstrap,
    Nodejs,
    Reactjs,
    Nextjs,
    SQL,
    Git,
    Sass,
    AngularMaterial,
    Angular,
    Tailwind,
    Jest
} from "../assets/logos/index"


class Technology {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

export const skills = [
    new Technology("Javascript", Javascript),
    new Technology("Typescript", Typescript),
    new Technology("Angular", Angular),
    new Technology("Nextjs", Nextjs),
    new Technology("React", Reactjs),
    new Technology("Nodejs", Nodejs),
    new Technology("MongoDB", MongoDB),
    new Technology("SQL", SQL),
    new Technology("Jest", Jest),
    new Technology("Tailwind", Tailwind),
    new Technology("Bootstrap", Bootstrap),
    new Technology("AngularMaterial", AngularMaterial),
    new Technology("Sass", Sass),
    new Technology("Git", Git),
]