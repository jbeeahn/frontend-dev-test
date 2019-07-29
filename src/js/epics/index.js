import _ from "lodash"
import * as AppEpic from "./app-epic"

const initialEpicFunctions = []

const ListEpics = [AppEpic]

const epics = _.reduce(
  ListEpics,
  (result, epic) => _.concat(result, _.values(epic)),
  initialEpicFunctions
)

export default epics
