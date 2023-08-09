// import { CardList } from "./CardList/CardList";
// import { Section } from "./Section/Section";
// import data from "../data.json";
import events from "../../events.json";
import { Container } from "./App.styled";

import { PageTitle } from "../PageTitle/PageTitle";
import { EventBoard } from "../EventBoard/EventBoard";

export const App = () => {
  return (
    <Container>
      <PageTitle text="Upcoming events" />
      <EventBoard events={events} />

      {/* <Section title="Top week sales">
        <CardList items={data} />
      </Section>
      <Section title="Best products">
        <CardList items={data} />
      </Section> */}
    </Container>
  );
};
