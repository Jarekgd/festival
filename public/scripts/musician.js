class Musician{
    constructor(name, scene, genre, image, description, year){
        this.name=name;
        this.scene=scene;
        this.genre=genre;
        this.image=image;
        this.description=description;
        this.year=year;
    }
    play(){
        if (this.year < 2024){
            return false;
            }
            this.year=2024
            return true;
        }
    }