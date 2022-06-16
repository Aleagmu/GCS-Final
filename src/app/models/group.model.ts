export class Group {
    id: number;
    name: string;
    image: string;

    constructor(id: number, image: string, name: string){
        this.id = id
        this.name = name
        this.image = image
    }
}

export var Groups: Group[] = [
    new Group(1,
      "https://pbs.twimg.com/profile_images/1492816660130148360/zLOTFJez_400x400.jpg",
      "Grupo 1",),
    new Group(2,
      "https://pbs.twimg.com/media/FUo-88qXsAARBTo?format=png&name=small",
      "Grupo 2",),
    new Group(3,
      "https://pbs.twimg.com/media/FUwHxVZX0AIvPB8?format=jpg&name=small",
      "Grupo 3")
]