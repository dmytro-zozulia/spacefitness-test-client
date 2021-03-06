import React from "react";
import {
  Transition,
  Grid,
  Button,
} from "semantic-ui-react";
import TrainerCard from "./trainerCard";
import { useQuery } from "@apollo/client";
import { FETCH_TRAINERS_QUERY } from "../../utils/graphql";
import { Link } from "react-router-dom";


function TrainersComponent(props) {
  const { loading, data: { getTrainers: trainers } = {} } =
    useQuery(FETCH_TRAINERS_QUERY);

//loading logic
 let loadingMessage;
if (loading) {
loadingMessage = <p>content is loading</p>
}


  const TrainersComponent = (
    <Transition.Group>
    {loadingMessage}
      {trainers &&
        trainers.map((trainer) => (
          <Grid.Column
            key={trainer.id}
            style={{ marginBottom: 20, maxWidth: "25%" }}
          >
            <TrainerCard trainer={trainer} style={{ display: "block" }} />
          </Grid.Column>
        ))}
        
      <Grid.Column>
      
        <Button primary style={{ paddingLeft:50, paddingRight:50, marginBottom:10  }}   as={Link}
              to={`/add-trainer`}>
          <h3>Add trainer</h3>
        </Button>
   
     
      </Grid.Column>
    </Transition.Group>
  );
  return TrainersComponent;
}

export default TrainersComponent;
