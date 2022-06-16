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
      "https://media-exp1.licdn.com/dms/image/C5603AQE_9Q8xHYF9JQ/profile-displayphoto-shrink_800_800/0/1643290146892?e=1660780800&v=beta&t=pPADGnpvEvarA37AMJzBpJ7w6reqXzAugL48KGhmrGc",
      "Alvaro Pastor",
      "Paciente"),
    new User(5,
      "../assets/images/alejandro.jpeg",
      "Alejandro Aguado",
      "Paciente"),
    new User(6,
      "https://media-exp1.licdn.com/dms/image/C5603AQHcx04nbUqkAw/profile-displayphoto-shrink_800_800/0/1565595153299?e=1660780800&v=beta&t=U1TesLin-FJ2uctvGUr29d7OlNUCcjJIjfCi_SPIeIc",
      "Andres Felipe Lopez",
      "Paciente")
]