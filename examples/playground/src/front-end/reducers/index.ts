import { Event, mapImmutable } from "aerial-common2";
import { ApplicationState, createApplicationState } from "../state";

export const applicationReducer = (state = createApplicationState(), event: Event) => {
  return state;
};