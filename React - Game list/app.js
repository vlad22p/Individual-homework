class Game extends React.component {

    async componentDidMount() {
        const url = : "https://games-world.herokuapp.com";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

}