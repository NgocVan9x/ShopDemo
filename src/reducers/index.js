import homeReducer from "../container/HomeContainer/reducer";
import {reducer as formReducer} from "redux-form";

export default {
    form: formReducer,
    homeReducer,
};