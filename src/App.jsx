import "./App.css";
import { Card } from "./components/Card/Card";
import { CardImage } from "./components/CardImage/CardImage";
import { CardSeperator } from "./components/CardSeperator/CardSeperator";
import { CardText } from "./components/CardText/CardText";
import { CardTitle } from "./components/CardTitle/CardTitle";

// Her vises vores card
// Card er opbygget af child components der kan flyttes rundt som man ønsker.
// Det vil sige at ét Card kan have et billede og tekst, mens et andet kan bestå af flere titles, uden billede.
function App() {
  return (
    <>
      <Card>
        <CardTitle title="Vores første Card" />
        <CardImage
          imageSrc={"src/assets/myImage.jpg"}
          imageCaption={"Bare et billede"}
        />
        <CardSeperator />
        <CardText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, 
              libero pariatur quibusdam unde voluptatem esse vitae? Enim deserunt ut officia, 
              aliquam similique vel adipisci? 
              Commodi est vitae at incidunt reiciendis!"
        />
      </Card>

      <Card>
        <CardTitle title="Title One" />
        <CardTitle title="Title Two" />
        <CardSeperator />
        <CardText text="Hello world, today is a great day. Blah blah." />
      </Card>
    </>
  );
}

export default App;
