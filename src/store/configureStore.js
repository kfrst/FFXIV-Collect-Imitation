import { configureStore } from "@reduxjs/toolkit"
import { asyncMiddleware } from "./middlewares/async"
import achievementsReducer from "../components/routes/achievements/achievementsData"
import achievementReducer from "../components/routes/achievements/achievementData"
import titlesReducer from "../components/routes/titles/titlesData"
import mountsReducer from "../components/routes/mounts/mountsData"
import mountReducer from "../components/routes/mounts/mountData"
import minionsReducer from "../components/routes/minions/minionsData"
import minionReducer from "../components/routes/minions/minionData"
import orchestrionsReducer from "../components/routes/orchestrions/orchestrionsData"
import orchestrionReducer from "../components/routes/orchestrions/orchestrionData"
import spellsReducer from "../components/routes/spells/spellsData"
import spellReducer from "../components/routes/spells/spellData"
import emotesReducer from "../components/routes/emotes/emotesData"
import emoteReducer from "../components/routes/emotes/emoteData"
import bardingsReducer from "../components/routes/bardings/bardingsData"
import bardingReducer from "../components/routes/bardings/bardingData"
import hairstylesReducer from "../components/routes/hairstyles/hairstylesData"
import hairstyleReducer from "../components/routes/hairstyles/hairstyleData"
import armoiresReducer from "../components/routes/armoires/armoiresData"
import armoireReducer from "../components/routes/armoires/armoireData"
import fashionsReducer from "../components/routes/fashions/fashionsData"
import fashionReducer from "../components/routes/fashions/fashionData"
import framesReducer from "../components/routes/frames/framesData"
import frameReducer from "../components/routes/frames/frameData"
import recordsReducer from "../components/routes/records/recordsData"
import recordReducer from "../components/routes/records/recordData"
import surveysReducer from "../components/routes/surveys/surveysData"
import surveyReducer from "../components/routes/surveys/surveyData"

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      achievements: achievementsReducer,
      titles: titlesReducer,
      mounts: mountsReducer,
      minions: minionsReducer,
      orchestrions: orchestrionsReducer,
      spells: spellsReducer,
      emotes: emotesReducer,
      bardings: bardingsReducer,
      hairstyles: hairstylesReducer,
      armoires: armoiresReducer,
      fashions: fashionsReducer,
      frames: framesReducer,
      records: recordsReducer,
      surveys: surveysReducer,
      achievement: achievementReducer,
      mount: mountReducer,
      minion: minionReducer,
      orchestrion: orchestrionReducer,
      spell: spellReducer,
      emote: emoteReducer,
      barding: bardingReducer,
      hairstyle: hairstyleReducer,
      armoire: armoireReducer,
      fashion: fashionReducer,
      frame: frameReducer,
      record: recordReducer,
      survey: surveyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncMiddleware),
  })

  return store
}
