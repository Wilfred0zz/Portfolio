import Main from "../components/main";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

export default function Home() {
  return (
    <div>
      <main className="bg-black px-10">
        <section className="min-h-screen">
          <Main />
        </section>

        <section className="pt-8 min-h-screen">
          <Projects />
        </section>

        <section>
          <Technologies />
        </section>
      </main>
    </div>
  );
}
