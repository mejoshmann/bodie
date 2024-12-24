import "./Home.scss";

function Home() {
  return (
    <>
      <main className="home">
        <div className="home__container">
          <h2 className="home__heading">Meet Bodie Morgan</h2>
          <p className="home__copy">
            Bodie Morgan is a promising downhill skier from North Vancouver,
            calling Whistler his home mountain. He has been actively competing
            in regional races and making his mark in the B.C. circuit.
          </p>
          <p className="home__copy">
            Whether he's racing gates or carving fresh lines, Bodie's passion
            for skiing is clear. With every race, he's pushing harder, aiming
            higher, and proving he's one to watch on the slopes.
          </p>
        </div>
        <section className="home__image"></section>
        <div className="home__container">
          <h2 className="home__heading">The Sport</h2>
          <p className="home__copy">
            Downhill skiing is a sport that demands precision, courage and a lot
            of determination to push the limits. Athletes like Bodie Morgan show
            these qualities every time they race down steep slopes at incredible
            speeds. in a sport where every fraction of a second counts, Bodie
            stands out for his focus, hard work, ad passion for the challenge.{" "}
          </p>
        </div>
        <section className="home__imageBtm"></section>

      </main>
    </>
  );
}

export default Home;
