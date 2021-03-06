import _ from "lodash";
import React from "react";
import {

  Transition,

  Grid,

  Button,

  Container,
 
} from "semantic-ui-react";
// import scheduledTraining from "./scheduledTraining";
import { useQuery } from "@apollo/client";
import { FETCH_DAYS_QUERY} from "../../utils/graphql";
// import { Link } from "react-router-dom";
import ScheduledTrainingCard from "./scheduledTrainingCard";

function ScheduleComponent(props) {
  const { loading, data: { getDays: days } = {} } = useQuery(FETCH_DAYS_QUERY);

  const columns = _.times(7, (i) => (
    <Grid.Column key={i}>
      <Button>{i + 1}</Button>
    </Grid.Column>
  ));

let loadingMessage;
if (loading) {
loadingMessage = <p>content is loading</p>
}
  const ScheduleComponent = (
    <Transition.Group>
    {loadingMessage}
      <Container style={{ textAlign: "left" }}>
        <h1 style={{ textAlign: "center" }}>Training Schedule</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolor unde repudiandae culpa ullam, asperiores officiis ratione
          repellat quaerat nihil vel corporis distinctio vero doloribus dolore
          optio commodi voluptatum inventore.
        </p>

        <Container>
          <Grid style={{ margin: "2rem auto" }} centered>
            {columns}
          </Grid>
          <Grid style={{ margin: "2rem auto" }} relaxed>
            <Button>MO, 5.07</Button>
            <Button>TU, 6.07</Button>
            <Button>WE, 7.07</Button>
            <Button>TH, 8.07</Button>
            <Button>FR, 9.07</Button>
            <Button>SA, 10.07</Button>
            <Button>SU, 11.07</Button>
            <Button primary>Add day</Button>
          </Grid>
        </Container>

        {days &&
          days.map((day) => (
            <Grid.Column key={day.id} style={{ marginBottom: 20 }}>
              <ScheduledTrainingCard day={day} />
            </Grid.Column>
          ))}
      </Container>
    </Transition.Group>
  );
  return ScheduleComponent;
}

export default ScheduleComponent;
