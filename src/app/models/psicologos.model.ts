export class User {
    id: number;
    name: string;
    work: string;
    image: string;

    constructor(id: number, image: string, name: string, work: string){
        this.id = id
        this.name = name
        this.work = work
        this.image = image
    }
}

export var Users: User[] = [
    new User(1,
      "https://pbs.twimg.com/profile_images/1143183093160980481/cKqlEov2_400x400.jpg",
      "Luis Vidal Rico",
      "Psicólogo",),
    new User(2,
      "https://pbs.twimg.com/media/FUduuL6WUAAXzKI?format=jpg&name=small",
      "Chris Bumstead",
      "Psicólogo",),
    new User(3,
      "https://pbs.twimg.com/media/EuW7HAXXcAEZB3s?format=jpg&name=small",
      "Robertson",
      "Psicólogo"),
    new User(4,
    "https://pbs.twimg.com/profile_images/1519383072696934401/7ely8LHI_400x400.jpg",
    "David",
    "Psicólogo"),
    new User(5,
    "https://pbs.twimg.com/media/FVXbUVkWUAAZZL7?format=jpg&name=small",
    "Gerónimo",
    "Psicólogo")
    
]